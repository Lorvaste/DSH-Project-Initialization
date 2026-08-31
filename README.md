# DSH-Project Initialization

AI 产品创建对齐插件。

[English](README.en.md)

![License](https://img.shields.io/badge/license-Apache--2.0-blue) ![DSH](https://img.shields.io/badge/dsh-agent--preset-ready-green) ![Platform](https://img.shields.io/badge/platform-DSH%20Desktop-blueviolet)

---

## 这是什么

用 AI 从零开始做产品，做出来的东西常常和最初的想法对不上。

这个插件解决的就是这个问题：给 DSH 加两个场景，让 AI 在动手之前把你要什么问清楚、写成规格、跟你逐条确认。确认过的才往下走，改过的都留记录。

## 场景

| 场景 | preset id | 什么时候用 |
|---|---|---|
| **从零开始** | `from-scratch` | 没思路吗，从问答到确认试试——从一个想法出发，问答六步出规格初稿和任务拆分 |
| **先等等，让我确认一下** | `confirm-first` | 感觉不对劲，要不复核理解再确认一下——完善初版方案，或改进行中项目的方案和目标 |

## 它能做什么

- **问答六步**：想做什么 → 功能范围 → 细节（一次一问）→ 功能域拆分 → 查漏 → 成档
- **规格冻结**：AI 复述需求，你逐条确认，没确认的不算数
- **查漏**：查逻辑矛盾、覆盖缺口、歧义、不可验证的条目

## 快速开始

### 安装

> 完整安装指引（目录定位/更新/卸载/常见问题）见 **[维护文档/安装指引](maintenance-docs/INSTALL.md)**。

**方式一：手动复制（零构建）**

```powershell
# 先删后复制，避免嵌套
Remove-Item "$env:APPDATA\dsh-desktop\harness\.agent-presets\from-scratch"  -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$env:APPDATA\dsh-desktop\harness\.agent-presets\confirm-first" -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item core-library\presets\from-scratch  "$env:APPDATA\dsh-desktop\harness\.agent-presets\" -Recurse
Copy-Item core-library\presets\confirm-first "$env:APPDATA\dsh-desktop\harness\.agent-presets\" -Recurse
```

> `.agent-presets` 实际路径以 DSH 安装的 `<dshHome>` 为准。

**方式二：插件市场**

安装插件包（`dsh-project-initialization`）后，`cordis.patch.yml` 注册插件壳，宿主启动时自动把包内 `presets/` 同步到 `.agent-presets`（幂等，与手动复制等效），两个场景自动出现在名单。

### 使用

1. DSH 新建会话，选一个场景
2. **从零开始**：确认工作区 → git → 骨架 → 问答六步 → 冻结 → 规格初稿 + 任务拆分 → 推送
3. **先等等，让我确认一下**：提交初版方案完善成档，或改进行中项目的方案和目标

## 工作原理

```
想做什么 → 功能范围 → 细节确认 → 功能域拆分 → 查漏 → 确认成档
    │                                        │           │
    └── 每步过闸，没过就停在当前步 ←──────────┘           ↓
                                     spec.md（冻结，条目编号 + 功能域清单）
                                     tasks.md（按功能域组织，任务关联规格条目）
```

每个阶段：AI 先复述，你确认，才进下一步。

## 仓库结构（维护场景布局）

```
├── core-library/                主体库
│   ├── presets/                 插件本体（agent-presets root）
│   │   ├── from-scratch/        场景「从零开始」：agent.cordis.yml + 4 个 skill + assets 模板
│   │   └── confirm-first/       场景「先等等，让我确认一下」：agent.cordis.yml + polish skill
│   └── src/                     插件壳代码（presets 同步）
├── maintenance-docs/            维护文档
│   ├── INSTALL.md / INSTALL.en.md   安装指引
│   ├── CONTRIBUTING.md / CONTRIBUTING.en.md   贡献指南
│   ├── Reference/               项目结构规范参考
│   ├── maintain-rules.md        维护规则
│   ├── regression.md            回归清单
│   └── audit/                   审计
├── user-manual.md               使用说明
├── CHANGELOG.md                 版本与更新记录
├── AGENTS.md                    根规则
├── structure.md                 统一全局目录
├── Rules.md                     项目规则（骨架生成文件母版）
├── package.json                 薄插件壳（dsh bundle manifest）
├── cordis.patch.yml             插件壳注册
├── .gitignore / .gitattributes  剔除与行尾规则
├── LICENSE                      Apache-2.0
└── Other/                       其他（内部，剔除：dsh-pjil / cs1 / Not public）
```

## 许可

[Apache-2.0](LICENSE)
