# 项目结构规范（参考）

> 项目结构规范参考。结构定义以 core-library/presets/alignment/ 内模板（doc-templates / rule-templates，zh/en）为准；开发计划与进度为项目内部内容，不随公开仓库提交。

## 结构基准（三模式目录）

### 通用（必须 + 可选）

```
{Project}/
├── README.md           自述文件（必须）
├── LICENSE             开源协议（必须；未选择协议则内容为空；模板文件 LICENSE.md.tpl）
├── AGENTS.md           根规则（必须）
├── structure.md        统一全局目录（必须，文档变化实时更新）
├── .git/               版本控制（必须）
├── Other/              其他（必须，内部）
├── .gitignore          可选（用户决定）
├── .gitattributes      可选（用户决定）
└── Reference/          公开资料（可选，用户决定）
```

### 需求确立场景

```
├── requirements-list.md        需求清单（必须：只总结清单，实时更新，禁引用/指向、禁决策信息）
├── requirements-structure.md   需求结构/功能实现结构（必须：只总结结构，同禁）
└── Other/requirements/
    ├── qa-record.md            Q&A 问答记录
    └── decision-log/           决策记录
```

### 开发前场景（需求相关文件从需求确立移动归集）

```
├── requirements-summary.md                  需求总结与结构（必须）
├── tech-selection.md                        技术选型（必须）
├── project-plan-and-progress.md             项目规划与当前进度（必须）
├── dev-domains/                             开发域文档（可选）
│   ├── domain-rules.md                      域规则
│   ├── tech-selection-and-implementation.md 技术选型与实现规划
│   ├── implementation/                      实现
│   ├── demo/                                功能 demo
│   └── scripts/                             脚本
└── Other/
    ├── requirements/                        需求相关文件（从需求确立移动）
    └── reference/                           联网检索参考资料
```

### 维护场景（以下均可选）

```
├── user-manual.md          使用说明
├── CHANGELOG.md            版本与更新记录
├── core-library/           主体库
├── maintenance-docs/       维护文档
│   ├── regression.md       回归清单
│   ├── maintain-rules.md   维护规则（可选）
│   └── audit/              审计（可选）
└── Other/                  其他
```

## 生成规则

- 模板体系：alignment/doc-templates（16 份）+ alignment/rule-templates（7 份），zh/en 双版
- 模板只定义：表达方式 / 章节分级 / 可选章节
- 生成方式：scaffold 按模板逐项确认，用户确认后落盘
- 需求文档洁净：只总结清单或结构；禁引用其他文件或条目；禁决策信息；干净简洁
