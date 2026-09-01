# CHANGELOG.md — 版本与更新记录

> 维护场景定义：版本与更新记录（可选）。每次发布更新。

## 版本历史

### v1.1.0（2026-09-01）— 原子化重构 + 范围扩展

**原子化了所有功能点**：12 个 skill 全量拆分——「一个功能实现点 = 一个原子子 skill」，重组为 6 类主 skill（base / req / dev / mnt / common / rules）+ verify 调度者 + 66 个原子子 skill（共 73 个），每个 skill 单职责、简短、可单独调用。

**扩展了工作范围**：
- 发布：构建/打包、部署/上线、版本记录（模板 + 功能）
- 清除整理：清理非必要内容、归类整理、清理报告
- 反馈闭环：反馈收集、新需求清单、待办清单 + 当前阶段文档
- 调研检索：相似方案检索、竞品/专利检索（工具白名单 web 检索例外）
- 术语体系：术语对照/冲突裁决/同步 + 术语表模板
- 模板体系：doc-templates 16 → 20、rule-templates 7 → 8（zh/en 镜像）

**结构变化**：
- 取消场景预设：主 skill 即入口，skill 按上下文加载
- 需求规格分类（F/D/R/I 与 MOD）改为按需启用
- 全目录文档同步与清理（README/user-manual/structure/maintenance-docs/CHANGELOG）

**规则体系重定义**：
- 确认绑定：确认 = 对当前点名编号项的明确回应（返回/上下文/沉默 ≠ 确认）
- 操作分级 L0-L4：执行前核对授权；禁区拒绝、高风险单独请示、干跑先行
- 扮演假设规则族：扮演声明、场景假设回显、三态区分、失效修正、尊重客观事实（禁讨好用户/迎合上下文）
- 因果与逻辑事实验证：回答/提问前验证因果与前提
- 阶段推进检查提醒：进入下一阶段前提醒是否遍历检查（跳过须记录）
- 验证原子化：验证单元独立，verify 为唯一调度者

**质量**：静态审计 + 4 维子 agent 实例审计（29 项问题全修复）+ 复检通过；skill 细则为中文单语（模板/文档 zh/en 镜像）。

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
| v1.1.0 | 2026-09-01 | 原子化重构（73 skill）+ 范围扩展（发布/清除整理/反馈/检索/术语） | v1.1.0 |
| v1.0.3 | 2026-09-01 | 重构实现 + 改名「想法落地」+ 审计修复 | v1.0.3 |
| v1.0.2 | 2026-08-30 | 审计修复 + 维护场景布局 | v1.0.2 |
| v1.0.1 | 2026-08 | 封装完成（插件壳） | v1.0.1 |
| v1.0.0 | 2026-08 | 首发 | v1.0.0 |
