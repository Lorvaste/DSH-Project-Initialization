# DSH-Project Initialization

AI 产品创建对齐插件。

[English](README.en.md)

![License](https://img.shields.io/badge/license-Apache--2.0-blue) ![DSH](https://img.shields.io/badge/dsh-agent--preset-ready-green) ![Platform](https://img.shields.io/badge/platform-DSH%20Desktop-blueviolet)

---

## 这是什么

用 AI 从零做产品，结果常与最初想法对不上。

本插件解决这个问题：单场景入口「产品创建对齐」，AI 在动手前把需求问清楚、写成清单与结构、与你逐条确认。确认过的才往下走，改过的都留记录。

## 场景（= 功能集合最小预设）

| 场景 | 定位 |
|---|---|
| 需求确立 | 需求收集与设计（完善补充想法）+ 需求确认（含统合节点）+ 规格化 |
| 开发前 | 技术选型与技术设计（基于需求定档论证）；开发类仅提供模板（开发方式用户自定） |
| 维护 | 文档再编排（先行）+ 维护初始化 + 变更管理 + 回归验证 |

场景与功能 skill 完全拆分：skill 按上下文按需加载，每个 skill 可单独调用；插件可被其他场景按需调用。

## 功能 skill（10 个）

qa（统合问答，两模式）｜confirm（确认理解/纠偏）｜integrate（统合节点，行为）｜organize（规格化 + 文档再编排）｜unify-terms（术语一致化）｜verify（遍历性检查）｜change（变更管理）｜regress（回归验证）｜maintain（维护初始化）｜token-compress（token 压缩，需求确立阶段不生效）

## 快速开始

### 安装

> 完整安装指引（目录定位/更新/卸载/常见问题）见 **[维护文档/安装指引](maintenance-docs/INSTALL.md)**。

**方式一：手动复制（零构建）**

```powershell
# 先删后复制，避免嵌套
Remove-Item "$env:APPDATA\dsh-desktop\harness\.agent-presets\alignment" -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item core-library\presets\alignment "$env:APPDATA\dsh-desktop\harness\.agent-presets\" -Recurse
```

> `.agent-presets` 实际路径以 DSH 安装的 `<dshHome>` 为准。

**方式二：插件市场**

安装插件包（`dsh-project-initialization`）后，`cordis.patch.yml` 注册插件壳，宿主启动时自动把包内 `presets/` 同步到 `.agent-presets`（幂等，与手动复制等效），场景自动出现在名单。

### 使用

1. DSH 新建会话，选择「产品创建对齐」场景
2. 按上下文推进：需求确立 → 开发前 → 维护（各阶段 AI 先复述，你确认，才进下一步）

## 规则要点

- 所有操作：先告知理解，用户确认后再执行
- 阶段推进由用户决定；禁止"假定完成"
- 沉默 ≠ 同意；变更显式记录
- 先查证不假设；禁止假设性结论
- 需求文档：只总结清单/结构，禁引用、禁决策信息，干净简洁
- 文档 = 初始基准，不锁死
- 中英双版（zh 主版 / en 镜像）

## 仓库结构（维护场景布局）

```
├── core-library/                主体库
│   ├── presets/alignment/       单场景入口（agent.cordis.yml + 12 skill + 模板 zh/en）
│   └── src/                     插件壳代码（presets 同步）
├── maintenance-docs/            维护文档（安装/贡献/参考/维护规则/回归清单/审计）
├── user-manual.md               使用说明
├── CHANGELOG.md                 版本与更新记录
├── AGENTS.md                    根规则
├── structure.md                 统一全局目录
├── README.md / README.en.md     自述
├── LICENSE                      Apache-2.0
├── Rules.md                     项目规则
├── package.json / cordis.patch.yml / .gitignore / .gitattributes
└── Other/                       其他（内部，剔除：dsh-pjil / cs1 / Not public）
```

## 许可

[Apache-2.0](LICENSE)
