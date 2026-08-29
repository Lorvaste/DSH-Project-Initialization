// 插件壳模拟测试：验证 presets 同步逻辑（幂等/更新重建/结构校验）
// 用法：node tools/test-plugin-shell.js
import { mkdtempSync, readdirSync, rmSync, writeFileSync, existsSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { tmpdir } from 'node:os'
import { fileURLToPath } from 'node:url'

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const srcRoot = join(repoRoot, 'presets')
const testHome = mkdtempSync(join(tmpdir(), 'dsh-shell-test-'))
process.env.DSH_HOME = testHome

const { apply, syncPreset } = await import('../src/index.js')

// 1. 首次 apply（mountOnce：进程内同步一次）
const ctx = { logger: console }
apply(ctx)
const presetRoot = join(testHome, '.agent-presets')
const ids = readdirSync(presetRoot).sort()
console.log('--- 首次同步 ---')
console.log('presets:', ids.join(', '))
let pass = ids.join(',') === 'confirm-first,from-scratch'
for (const id of ['from-scratch', 'confirm-first']) {
  const ok = existsSync(join(presetRoot, id, 'agent.cordis.yml'))
  const skills = existsSync(join(presetRoot, id, 'skills')) ? readdirSync(join(presetRoot, id, 'skills')).length : 0
  console.log(`${id}: agent.cordis.yml=${ok} skills=${skills}`)
  pass = pass && ok
}

// 2. mountOnce：二次 apply 应为 no-op（进程内只同步一次）
apply(ctx)
console.log('--- 二次 apply（mountOnce no-op，无输出即通过）---')

// 3. 幂等：直接调 syncPreset，内容相同不重建
const before = readFileSync(join(presetRoot, 'from-scratch', 'preset.yml')).length
syncPreset(srcRoot, presetRoot, 'from-scratch')
const after = readFileSync(join(presetRoot, 'from-scratch', 'preset.yml')).length
console.log(`--- 幂等: preset.yml 字节数稳定 ${before === after ? 'OK' : 'FAIL'} ---`)
pass = pass && before === after

// 4. 结构变化：篡改 manifest → 应整目录重建覆盖
writeFileSync(join(presetRoot, 'from-scratch', 'agent.cordis.yml'), '# stale marker\n')
syncPreset(srcRoot, presetRoot, 'from-scratch')
const rebuilt = !readFileSync(join(presetRoot, 'from-scratch', 'agent.cordis.yml'), 'utf8').includes('stale')
console.log(`--- 结构变化重建: ${rebuilt ? 'OK（旧内容被覆盖）' : 'FAIL（残留旧内容）'} ---`)
pass = pass && rebuilt

// 5. 缺 manifest 报错
try {
  syncPreset(srcRoot, presetRoot, 'nonexistent')
  console.log('--- 缺 manifest 报错: FAIL（未抛错）---')
  pass = false
} catch {
  console.log('--- 缺 manifest 报错: OK ---')
}

rmSync(testHome, { recursive: true, force: true })
console.log(`\n${pass ? '✅ 全部通过' : '❌ 存在失败项'}`)
process.exit(pass ? 0 : 1)
