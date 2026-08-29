// 运行时验证脚本：验证 customSkillDirs baseUrl 表达式与 agent.cordis.yml 结构
// 模拟 dsh-agent-presets 挂载时注入的 baseUrl（preset 目录的 file:// URL）
// 预设目录：优先 $DSH_HOME/.agent-presets，回退 ~/.dsh/.agent-presets
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const presetsHome = process.env.DSH_HOME
  ? path.join(process.env.DSH_HOME, '.agent-presets')
  : path.join(os.homedir(), '.dsh', '.agent-presets');

function verifyPreset(name) {
  console.log(`\n===== preset: ${name} =====`);
  const presetDir = path.join(presetsHome, name);
  const baseUrl = 'file:///' + presetDir.replace(/\\/g, '/') + '/';

  // 1. 验证 baseUrl 表达式（与 agent.cordis.yml 中完全相同的表达式）
  let resolved = null;
  try {
    resolved = fileURLToPath(new URL('skills/', baseUrl));
    console.log(`[baseUrl 表达式] OK → ${resolved}`);
    const skillsExists = fs.existsSync(resolved);
    console.log(`[skills/ 存在] ${skillsExists}`);
    if (skillsExists) {
      const skills = fs.readdirSync(resolved, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name);
      console.log(`[发现的 skill] ${skills.join(', ')}`);
    }
  } catch (e) {
    console.log(`[baseUrl 表达式] FAIL: ${e.message}`);
  }

  // 2. 检查 agent.cordis.yml 必填行
  const acFile = path.join(presetDir, 'agent.cordis.yml');
  const ac = fs.readFileSync(acFile, 'utf8');
  const required = ['dsh-persona', 'dsh-tool-ask-user', 'dsh-tool-fs', 'dsh-skill-filesystem', 'dsh-tool-skill'];
  for (const r of required) {
    console.log(`[agent.cordis.yml 含 ${r}] ${ac.includes(r) ? 'OK' : 'MISSING!'}`);
  }
  const customSkillDirsOk = ac.includes("new URL('skills/', baseUrl)");
  console.log(`[customSkillDirs baseUrl 范式] ${customSkillDirsOk ? 'OK' : 'MISSING!'}`);
  const includeDefaultRootsOk = ac.includes('includeDefaultRoots: false');
  console.log(`[includeDefaultRoots: false] ${includeDefaultRootsOk ? 'OK' : 'MISSING!'}`);

  // 3. preset.yml 元数据
  const pyFile = path.join(presetDir, 'preset.yml');
  if (fs.existsSync(pyFile)) {
    const py = fs.readFileSync(pyFile, 'utf8');
    const nameMatch = py.match(/^name: (.+)$/m);
    console.log(`[preset.yml name] ${nameMatch ? nameMatch[1] : 'MISSING'}`);
  }

  // 4. YAML 结构粗验证（顶层 - id: 行）
  const topIds = ac.split('\n').filter(l => /^- id:/.test(l)).map(l => l.trim());
  console.log(`[顶层插件行] ${topIds.length} 行: ${topIds.join('; ')}`);
  return { resolved, skills: resolved && fs.existsSync(resolved) ? fs.readdirSync(resolved) : [] };
}

const r1 = verifyPreset('from-scratch');
const r2 = verifyPreset('confirm-first');

// 5. 汇总
console.log('\n===== 汇总 =====');
console.log(`from-scratch skills: ${r1.skills.join(', ')}`);
console.log(`confirm-first skills: ${r2.skills.join(', ')}`);
