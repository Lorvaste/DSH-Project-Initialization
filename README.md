# DSH-Project Initialization

> **AI 产品创建对齐插件** —— 从零开始，让 AI 做的每一步都对齐你的想法。

- 远程仓库：`git@github.com:Lorvaste/DSH-Project-Initialization.git`（SSH）
- 默认分支：`main`
- 状态：设计定案 + 双场景实现完成，验证阶段进行中

## 项目愿景

AI 辅助从零创建产品时，最终产物与最初想法经常不一致。根因是缺少 TDD/SDD 对齐纪律：没有规格约束 AI 别理解偏，没有验收标准判断 AI 做对没有。

本项目以 **DSH agent preset**（场景模式）形式交付：把隐式假设变成显式检查，让想法和产物之间每一步都有据可查、可追溯、可回滚。

## 特性

- **双场景**：从零开始（创建）+ 先等等，让我确认一下（完善/变更）
- **工具白名单**：场景只挂必要工具（ask-user/fs/bash），省 token
- **六步问答**：想做什么 → 功能实现范围 → 细则确认 → 结构化拆分（功能域）→ 遍历性验证 → 确认成档
- **规格冻结**：AI 复述 → 用户逐条确认 → spec 初版终稿（Reference/spec.md）
- **遍历性检查**：三层遍历 + 七维度 + 领域遗漏模板
- **skill 隔离**：场景内只加载场景 skill，不受全局 skill 干扰
- **防漂移机制**：红旗表 / 变更记录显式化 / 状态机闸门 / 工程准则
- **分发**：GitHub 开源 + DSH 插件市场

## 场景

| 场景 | preset id | 用途 |
|---|---|---|
| **从零开始** | `from-scratch` | 想法 → spec 初版终稿 + 任务拆分初稿（单会话：工作区/git/骨架/六步访谈/冻结/任务拆分/推送）|
| **先等等，让我确认一下** | `confirm-first` | ① 完善用户初版方案 ② 修改进行中项目的方案与目标（spec 版本递增 + 变更记录显式化）|

> 执行/验收不在插件范围——由后续会话基于 `Reference/spec.md` + `Reference/tasks.md` 进行。

## 安装（双通道）

**方式一：手动复制（零构建）**

```powershell
# 将 preset 目录复制到 DSH 的 agent-presets 目录
Copy-Item presets\from-scratch "$env:USERPROFILE\.dsh\.agent-presets\" -Recurse
Copy-Item presets\confirm-first "$env:USERPROFILE\.dsh\.agent-presets\" -Recurse
```

> `.agent-presets` 实际路径以 DSH 安装的 `<dshHome>` 为准。

**方式二：插件市场（随附 preset）**

安装插件包（`dsh-from-scratch`）后，经 `cordis.patch.yml` 将 `presets/` 注册为 preset root（`trust: system`），两个场景自动出现在名单。

> ⚠️ 插件壳注册逻辑待验证阶段实测调通（见 [cordis.patch.yml](cordis.patch.yml)）。

## 使用

1. DSH 新建会话，选择场景 preset
2. 「从零开始」：确认工作区 → git → 骨架 → 六步访谈 → 冻结 → spec 初版终稿 + 任务拆分初稿 → 推送
3. 「先等等，让我确认一下」：① 提交初版方案完善成档；② 修改进行中项目的方案与目标

## 文档目录

| 文件 | 内容 |
|---|---|
| [Reference/IDEA.md](Reference/IDEA.md) | 需求理解（v0.2 草案，65+ 条决策记录）|
| [plan.md](plan.md) | 项目结构规范 + 开发计划 + 验收规则 |
| [Rules.md](Rules.md) | 项目规范（语言/上下文/开发/术语/骨架分工）|
| [Structure.md](Structure.md) | 项目内容结构化说明 |
| [Progress.md](Progress.md) | 项目进度 |
| [Other/findings.md](Other/findings.md) | 访谈发现与决策思路 |
| presets/ | 双场景 preset（agent.cordis.yml + skills/ + assets/）|

## 许可

Apache-2.0
