# 贡献指南（Contributing）

感谢你考虑为 **DSH-Project Initialization**（AI 想法落地插件）做贡献！

[English](CONTRIBUTING.en.md)

## 项目是什么

DSH 插件「想法落地」：让 AI 创建产品每一步对齐用户想法。

- 无场景预设：主 skill 即入口，skill 按上下文（工作区状态/用户指令/自动触发）加载
- 6 类主 skill（base / req / dev / mnt / common / rules）+ verify 调度者 + 66 原子子 skill（共 73）
- 模板体系：doc-templates 20 + rule-templates 8（zh/en 镜像）；skill 细则为中文单语

## 仓库结构

```
├── core-library/presets/alignment/   「想法落地」：agent.cordis.yml + 73 skills + 模板 zh/en
├── core-library/src/                 薄插件壳（启动同步 presets/ 到 .agent-presets）
├── maintenance-docs/                 维护文档（安装/贡献/参考/维护规则/回归清单/审计）
├── AGENTS.md                         根规则
├── structure.md                      统一全局目录
├── package.json                      dsh bundle manifest
└── cordis.patch.yml                  插件壳注册
```

## 开发约定

### 规则优先级

用户拍板 > AGENTS.md（根规则）> 域内规则 > 规则（skill 规则）

### 规则要点

- 所有操作：先告知理解，用户确认后再执行
- 确认绑定：确认 = 对当前点名编号项的明确回应（返回/上下文/沉默 ≠ 确认）
- 操作分级 L0-L4：执行前核对授权；禁区拒绝、高风险单独请示、干跑先行
- 扮演假设：扮演前声明假设；扮演假设 ≠ 事实；禁止讨好用户与迎合上下文
- 阶段推进由用户决定；禁止"假定完成"；进入下一阶段前提醒是否遍历检查
- 先查证不假设；禁止假设性结论；回答/提问前验证因果与前提
- 需求文档：只总结清单/结构，禁引用、禁决策信息，干净简洁
- 文档 = 初始基准，不锁死
- 中英双版（zh 主版 / en 镜像；skill 细则中文单语）

### 修改 skill 时的注意

- 结构定义：插件实现见 core-library/presets/alignment；生成项目结构见 maintenance-docs/Reference/project-structure.md
- 原子化纪律：一个功能实现点 = 一个原子子 skill（66 功能点 F01-F66）；主 skill 聚合清单须与子 skill 目录一致
- 验证单元（verify-*）由 verify 调度者组合；规则族（确认绑定/操作分级/扮演假设/因果验证/阶段推进检查）落点：common/item-confirm/verify 等核心 skill 与 AGENTS.md.tpl
- 模板与规则同步：改动规则时检查 doc-templates / rule-templates（zh/en）是否需要同步
- 模板是生成到用户项目的，改动需谨慎
- 无字面 `\n`、无残留占位符

### git 约定

- 分支：`main`，不建长期并行分支
- 提交：Conventional Commits（type ∈ feat/fix/docs/chore/refactor/test/style/build/perf）
- 一个里程碑一个提交
- 换行符：统一 LF（.gitattributes 已配置，勿改）

## 不公开内容

`Other/` 存放内部文档（如术语词典 glossary.md），**不随仓库提交**（.gitignore 已忽略），仅供本地维护。

## 提 PR 前检查

- [ ] 修改符合规则优先级链
- [ ] skill 规则与实装一致（core-library/presets/alignment/skills）
- [ ] 主 skill 聚合清单与子 skill 目录一致
- [ ] 模板与规则同步（zh/en）
- [ ] 无字面 `\n`、无残留占位符
- [ ] 文档已更新（README / structure / user-manual 相应位置）
- [ ] 提交信息符合 Conventional Commits

## 发布

版本发布走 GitHub Release（tag `vX.Y.Z`）。发布前：

- 确认「想法落地」preset 可在 DSH 正常加载（新建会话 → 场景选择器）
- 确认 skill 按需加载生效（无全局 skill 泄漏）
- 更新 INSTALL.md / README / CHANGELOG.md 中的过时表述
