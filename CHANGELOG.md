# CHANGELOG.md — 版本与更新记录

> 维护场景定义：版本与更新记录（可选）。每次发布更新。

## 版本历史

### v1.0.3（2026-09-01）— 重构实现（新定义）
- 单场景入口 alignment（取代双场景）：12 skill（2 基础 + 10 功能）+ 模板体系（doc-templates 16 + rule-templates 7，zh/en）
- 功能 skill 按上下文加载，可单独调用；三场景最小预设（需求确立 / 开发前 / 维护）
- 开发类仅模板无 skill（技术选型/规划/域规则/开发规则；SDD/TDD 可选）
- 仓库按维护场景布局（core-library / maintenance-docs / Other / structure.md / AGENTS.md / CHANGELOG.md / user-manual.md）
- 文档与规则全量重排（短句条目化、无编号、需求文档洁净三禁、证据机制、防漂移红旗）
- 场景入口改名「想法落地」（英文镜像 Idea to Project）：preset name/description 更新，全库 12 文件同步
- 审计修复：AGENTS.md.tpl zh/en 补「确认机制」[必须] +「文档不锁死」[可选]；INSTALL.en FAQ 去旧双场景表述；.gitignore.tpl 补追溯注记；index.d.ts 补导出声明；参考文档术语/命名统一

### v1.0.2（2026-08-30）— 审计修复
- 6 实例遍历性审计修复（.gitignore.tpl 补 verification-issues.md、polish 去 task-split 3.5 悬空引用、scaffold 双锚点、task-split 追溯差集自检、Rules 4.1 固件归属注脚）
- 英文文档套件（README/INSTALL/CONTRIBUTING .en.md）
- 仓库按维护场景布局重排（core-library / maintenance-docs / Other / structure.md / AGENTS.md / CHANGELOG.md）

### v1.0.1 — 封装完成
- 插件壳实装（启动同步 presets，官方范式）+ 实测调通
- 包名更改为 dsh-project-initialization

### v1.0.0 — 首发
- 双场景（from-scratch / confirm-first）+ 问答六步 + 规格冻结
- 审计 A/B/C 修复与术语统一

## 发布记录

| 版本 | 日期 | 摘要 | tag |
|---|---|---|---|
| v1.0.3 | 2026-09-01 | 重构实现 + 改名「想法落地」+ 审计修复 | v1.0.3 |
| v1.0.2 | 2026-08-30 | 审计修复 + 维护场景布局 | v1.0.2 |
| v1.0.1 | 2026-08 | 封装完成（插件壳） | v1.0.1 |
| v1.0.0 | 2026-08 | 首发 | v1.0.0 |
