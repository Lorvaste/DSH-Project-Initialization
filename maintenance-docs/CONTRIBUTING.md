# 贡献指南（Contributing）

感谢你考虑为 **DSH-Project Initialization**（AI 产品创建对齐插件）做贡献！

[English](CONTRIBUTING.en.md)

## 项目是什么

DSH 插件：双 agent preset 场景，让 AI 从零创建产品的每一步对齐用户想法。

| 场景 | preset id | 职责 |
|---|---|---|
| 从零开始 | `from-scratch` | 想法 → 问答六步 → 规格冻结 → spec/tasks 初稿 → 推送 |
| 先等等，让我确认一下 | `confirm-first` | 初版方案完善成档 / 修改进行中项目的方案与目标 |

## 仓库结构

```
├── presets/                插件本体（agent preset）
│   ├── from-scratch/       场景一：agent.cordis.yml + 4 skill + assets 模板
│   └── confirm-first/      场景二：agent.cordis.yml + polish skill
├── Reference/
│   └── project-structure.md   项目结构规范参考
├── Rules.md                项目规范（骨架生成文件母版）
├── INSTALL.md              安装指引
├── src/                    薄插件壳（启动同步 presets/ 到 .agent-presets）
├── package.json            dsh bundle manifest
└── cordis.patch.yml        插件壳注册
```

## 开发约定

### 规则优先级（裁决链，冲突时先满足者胜）

1. 用户明确指令
2. 项目内 Rules.md
3. 域内规则（域骨架中的规则）
4. 场景 skill 指令
5. Rules.md 默认规则

### 流程与状态机

场景一状态机：workspace → git-init → git-remote → scaffold → interview → freeze → spec-final → task-breakdown → docs-push → done。

- 每个阶段有**闸门**：不满足当前阶段校验不得进入下一阶段
- 任意状态可回退；回退时后续落盘产物标记「已作废待重写」并记录到 Progress.md
- 状态写入 Progress.md（中断可恢复续跑）

### 修改 skill 时的注意

- **skill 自包含**：confirm-first 的 polish skill 必须完全自包含（不依赖 from-scratch 的 skill）；from-scratch 的 4 个 skill 相互衔接（scaffold→interview→freeze→task-split）
- **模板与规则同步**：`presets/from-scratch/assets/*.tpl` 是默认骨架模板，`Rules.md` 是骨架生成规则（第四章）——改动规则时检查模板是否需要同步；模板是生成到用户项目的，改动需谨慎
- **占位符语义**：`{{KEY}}` 替换、`{{#KEY}}...{{/KEY}}` 条件块（KEY 非空才渲染；空则整块隐藏）。**不得**在条件块填入字面量 "待定"（真值会渲染错误内容）
- **markdown 格式**：禁止字面 `\n` 混入表格/列表（历史教训：曾导致模板渲染错乱）

### git 约定

- 分支：`main`，不建长期并行分支
- 提交：Conventional Commits（`<type>(<scope>): <subject>`，type ∈ feat/fix/docs/chore/refactor/test/style/build/perf）
- 一个里程碑一个提交（如脚手架、规格冻结、任务拆分）
- 换行符：统一 LF（.gitattributes 已配置，勿改）

## 不公开内容

`Not public/` 目录存放内部文档（开发计划/进度/访谈记录/开发期脚本），**不随仓库提交**（.gitignore 已忽略），仅供本地维护。向公开仓库提交时不要包含该目录内容。

## 提 PR 前检查

- [ ] 修改符合规则优先级链
- [ ] skill 自包含（confirm-first）/ skill 衔接完整（from-scratch）
- [ ] 模板与 Rules.md 同步（涉及骨架生成时）
- [ ] 无字面 `\n`、无残留占位符
- [ ] 文档已更新（README/INSTALL/Structure 相应位置）
- [ ] 提交信息符合 Conventional Commits

## 发布

版本发布走 GitHub Release（tag `vX.Y.Z`）。发布前：

- 确认双场景可在 DSH 正常加载（新建会话 → 场景选择器）
- 确认 skill 隔离生效（无全局 skill 泄漏）
- 更新 INSTALL.md / README 中的过时表述
