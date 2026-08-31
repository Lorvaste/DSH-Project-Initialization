// 插件壳：启动时把包内 presets/ 同步到用户 .agent-presets（DSH agent-presets 发现根）
// 官方第三方 preset 插件范式（参照 @linxin666/dsh-liangshen）：
// 不配置 agent-presets roots（相对路径按进程 cwd 解析会错），改为启动同步。
// 幂等：文件内容相同则跳过；不删除用户自己创作的 preset。
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync } from 'node:fs'
import { homedir } from 'node:os'
import { fileURLToPath } from 'node:url'
import { join, resolve, isAbsolute } from 'node:path'

export const name = 'project-alignment'

const MOUNTED = Symbol.for('dsh-project-initialization.mounted')

// 防重复挂载：同一进程内只同步一次（生命周期内保持）
function mountOnce(fn) {
  const registry = globalThis[MOUNTED] ??= new Set()
  return (ctx, config) => {
    if (registry.has(name)) return
    registry.add(name)
    try {
      return fn(ctx, config)
    } catch (error) {
      registry.delete(name)
      throw error
    }
  }
}

// DSH home：$DSH_HOME（展开 ~，相对 cwd 解析）→ 回退 ~/.dsh
function resolveDshHome(env = process.env, home = homedir()) {
  const raw = env.DSH_HOME
  if (raw !== undefined && raw.trim() !== '') {
    const trimmed = raw.trim()
    const expanded = trimmed.startsWith('~') ? join(home, trimmed.slice(1)) : trimmed
    return isAbsolute(expanded) ? expanded : resolve(process.cwd(), expanded)
  }
  return join(home, '.dsh')
}

function bundledPresetsRoot() {
  return fileURLToPath(new URL('../presets/', import.meta.url))
}

function filesEqual(a, b) {
  if (!existsSync(b)) return false
  return readFileSync(a).equals(readFileSync(b))
}

// 目录树复制（幂等：已存在且内容相同的文件跳过）
function copyTree(src, dst) {
  mkdirSync(dst, { recursive: true })
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const s = join(src, entry.name)
    const d = join(dst, entry.name)
    if (entry.isDirectory()) {
      copyTree(s, d)
    } else if (!existsSync(d) || !filesEqual(s, d)) {
      copyFileSync(s, d)
    }
  }
}

// 同步单个 preset：结构变化（agent.cordis.yml 不同）时整目录重建；否则幂等补齐
// 导出供测试与复用；apply 内以 mountOnce 保证进程内只同步一次
export function syncPreset(sourceRoot, targetRoot, id) {
  const src = join(sourceRoot, id)
  const dst = join(targetRoot, id)
  const srcManifest = join(src, 'agent.cordis.yml')
  if (!existsSync(srcManifest)) throw new Error(`preset ${id}: missing agent.cordis.yml`)
  if (existsSync(dst) && !filesEqual(srcManifest, join(dst, 'agent.cordis.yml'))) {
    rmSync(dst, { recursive: true })
  }
  copyTree(src, dst)
}

export function resolveDshHomeForTest(env = process.env, home = homedir()) {
  return resolveDshHome(env, home)
}

export const apply = mountOnce((ctx) => {
  const targetRoot = join(resolveDshHome(), '.agent-presets')
  const logger = ctx?.logger ?? console
  try {
    mkdirSync(targetRoot, { recursive: true })
    const sourceRoot = bundledPresetsRoot()
    for (const id of ['from-scratch', 'confirm-first']) {
      try {
        syncPreset(sourceRoot, targetRoot, id)
      } catch (error) {
        logger.warn?.(`project-alignment: preset ${id} sync failed: ${error instanceof Error ? error.message : String(error)}`)
      }
    }
    logger.info?.(`project-alignment: presets synced into ${targetRoot}`)
  } catch (error) {
    logger.warn?.(`project-alignment: preset sync failed: ${error instanceof Error ? error.message : String(error)}`)
  }
})
