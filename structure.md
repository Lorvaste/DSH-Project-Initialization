# structure.md — 统一全局目录

> 全局目录（维护场景定义：文档变化实时更新）。
> 本仓库是「AI 产品创建对齐」插件（单场景入口 alignment）。

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
│   ├── presets/alignment/      单场景入口「产品创建对齐」：agent.cordis.yml + 12 skills + 模板 zh/en
│   └── src/                      插件壳代码（presets 同步）
├── maintenance-docs/             维护文档
│   ├── INSTALL.md / INSTALL.en.md   安装指引
│   ├── CONTRIBUTING.md / CONTRIBUTING.en.md   贡献指南
│   ├── Reference/                项目结构规范参考
│   ├── maintain-rules.md         维护规则
│   ├── regression.md             回归清单
│   └── audit/                    审计
├── .gitignore / .gitattributes   剔除与行尾规则
└── Other/                        其他（内部，剔除：dsh-pjil / cs1 / Not public）
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
