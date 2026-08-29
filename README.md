# DSH-Project Initialization

> AI 产品创建对齐插件 —— 从零开始，让 AI 做的每一步都对齐你的想法

- 远程仓库：`git@github.com:Lorvaste/DSH-Project-Initialization.git`（SSH）
- 默认分支：`main`

## 项目愿景

AI 辅助从零创建产品时，最终产物与最初想法经常不一致。根因是缺少 TDD/SDD 对齐纪律：没有规格约束 AI 别理解偏，没有验收标准判断 AI 做对没有。

本项目开发一个 **DSH 插件（场景模式）**，把隐式假设变成显式检查，让想法和产物之间每一步都有据可查、可追溯、可回滚。

## 项目说明

- **形态**：DSH 插件「场景模式」——工具白名单（省 token）+ skill 规范 + 流程编排
- **覆盖场景**：纯软件 / 纯实体 / 复合项目（三类场景）
- **两条路径**：项目刚开始（从零流程）、项目进行中（纠偏流程）
- **核心机制**：规格冻结（AI 复述 → 用户逐条确认）→ 脚手架（git + 通用骨架 + 类型子结构）→ 任务分解+追溯 → 执行 → 验收
- **分发**：GitHub 开源 + DSH 插件市场

## 文档目录

| 文件 | 内容 |
|---|---|
| [Reference/IDEA.md](Reference/IDEA.md) | 需求理解（想法思路，v0.2 草案）|
| [plan.md](plan.md) | 项目结构规范 + 开发计划 + 验收规则 |
| [Rules.md](Rules.md) | 项目规范（语言/上下文/开发/术语）|
| [Structure.md](Structure.md) | 项目内容结构化说明 |
| [Progress.md](Progress.md) | 项目进度 |
| [Other/findings.md](Other/findings.md) | 访谈发现与决策思路 |
| Reference/ | 参考文件 |
