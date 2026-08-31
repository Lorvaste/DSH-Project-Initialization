# 贡献指南（Contributing）

感谢你考虑为 **DSH-Project Initialization**（AI 产品创建对齐插件）做贡献！

[English](CONTRIBUTING.en.md)

## 项目是什么

DSH 插件：单场景入口「产品创建对齐」，让 AI 创建产品每一步对齐用户想法。

- 场景（= 功能集合最小预设）：需求确立 / 开发前 / 维护
- 功能 skill（10）：qa / confirm / integrate / organize / unify-terms / verify / change / regress / maintain / token-compress
- skill 按上下文按需加载，可单独调用；插件可被其他场景调用

## 仓库结构

```
├── core-library/presets/alignment/   单场景入口：agent.cordis.yml + 12 skills + 模板 zh/en
├── core-library/src/                薄插件壳（启动同步 presets/ 到 .agent-presets）
├── maintenance-docs/                维护文档（安装/贡献/参考/维护规则/回归清单/审计）
├── AGENTS.md                        根规则
├── structure.md                     统一全局目录
├── package.json                     dsh bundle manifest
└── cordis.patch.yml                 插件壳注册
```

## 开发约定

### 规则优先级

用户拍板 > AGENTS.md（根规则）> 域内规则 > 场景规则

### 规则要点

- 所有操作：先告知理解，用户确认后再执行
- 阶段推进由用户决定；禁止"假定完成"
- 先查证不假设；禁止假设性结论
- 需求文档：只总结清单/结构，禁引用、禁决策信息，干净简洁
- 文档 = 初始基准，不锁死
- 中英双版（zh 主版 / en 镜像）

### 修改 skill 时的注意

- 新设计定义见 Other/cs1/（mod1.md 为权威）
- 模板与规则同步：改动规则时检查 doc-templates / rule-templates（zh/en）是否需要同步
- 模板是生成到用户项目的，改动需谨慎
- 无字面 `\n`、无残留占位符

### git 约定

- 分支：`main`，不建长期并行分支
- 提交：Conventional Commits（type ∈ feat/fix/docs/chore/refactor/test/style/build/perf）
- 一个里程碑一个提交
- 换行符：统一 LF（.gitattributes 已配置，勿改）

## 不公开内容

`Other/`（dsh-pjil / cs1 / Not public）存放内部文档与推导工作区，**不随仓库提交**（.gitignore 已忽略），仅供本地维护。

## 提 PR 前检查

- [ ] 修改符合规则优先级链
- [ ] skill 规则与 mod1 定案一致
- [ ] 模板与规则同步（zh/en）
- [ ] 无字面 `\n`、无残留占位符
- [ ] 文档已更新（README / structure / user-manual 相应位置）
- [ ] 提交信息符合 Conventional Commits

## 发布

版本发布走 GitHub Release（tag `vX.Y.Z`）。发布前：

- 确认「产品创建对齐」场景可在 DSH 正常加载（新建会话 → 场景选择器）
- 确认 skill 按需加载生效（无全局 skill 泄漏）
- 更新 INSTALL.md / README / CHANGELOG.md 中的过时表述
