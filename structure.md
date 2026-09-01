# structure.md — 统一全局目录

> 全局目录（维护场景定义：文档变化实时更新）。
> 本仓库是「想法落地」插件（v1.1：主 skill + 原子子 skill，无场景预设）。

## 目录树

```
DSH-Project Initialization/
├── README.md / README.en.md     自述（中/英）
├── LICENSE                       Apache-2.0
├── AGENTS.md                     根规则
├── structure.md                  本文件（统一全局目录）
├── user-manual.md                使用说明
├── CHANGELOG.md                  版本与更新记录
├── package.json                  薄插件壳（dsh bundle manifest）
├── cordis.patch.yml              插件壳注册
├── core-library/                 主体库
│   ├── presets/alignment/       「想法落地」：agent.cordis.yml + 73 skill（6 主 + verify 调度 + 66 原子子）+ 模板 zh/en
│   │   ├── doc-templates/        文档模板 20 份（zh/en 各 20）
│   │   ├── rule-templates/       规则模板 8 份（zh/en 各 8）
│   │   └── skills/               73 个 skill 目录（平铺，每目录 SKILL.md）
│   └── src/                      插件壳代码（presets 同步）
├── maintenance-docs/             维护文档
│   ├── INSTALL.md / INSTALL.en.md   安装指引
│   ├── CONTRIBUTING.md / CONTRIBUTING.en.md   贡献指南
│   ├── Reference/                项目结构规范参考
│   ├── maintain-rules.md         维护规则
│   ├── regression.md             回归清单
│   └── audit/                    审计
├── .gitignore / .gitattributes   剔除与行尾规则
└── Other/                        其他（内部，剔除：计划/进度/审计等）
```

## 文档登记表

| 文档 | 路径 | 更新时机 |
|---|---|---|
| 自述 | README.md / README.en.md | 功能/流程变更时 |
| 根规则 | AGENTS.md | 规则变更时 |
| 全局目录 | structure.md | 任何结构变化时 |
| 使用说明 | user-manual.md | 使用方式变化时 |
| 版本记录 | CHANGELOG.md | 每次发布时 |
| 安装指引 | maintenance-docs/INSTALL.md | 安装流程变化时 |
| 贡献指南 | maintenance-docs/CONTRIBUTING.md | 贡献流程变化时 |
| 维护规则 | maintenance-docs/maintain-rules.md | 维护规则变更时 |
| 回归清单 | maintenance-docs/regression.md | 功能点变化时 |
| 结构规范参考 | maintenance-docs/Reference/project-structure.md | 结构定义变更时 |

## 变更记录

- 2026-09-01：Other/ 清理更新——内部文档直接存放于 Other/（不再分区），其余内容剔除（.gitignore）
- 2026-09-01：v1.1 发布前——目录树更新（73 skill / doc-templates 20 / rule-templates 8；无场景预设）
