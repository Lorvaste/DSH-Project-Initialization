# DSH-Project Initialization

AI 想法落地插件。

[English](README.en.md)

![License](https://img.shields.io/badge/license-Apache--2.0-blue) ![DSH](https://img.shields.io/badge/dsh-agent--preset-ready-green) ![Platform](https://img.shields.io/badge/platform-DSH%20Desktop-blueviolet)

---

## 项目概览

是否曾有一个想法，迟迟难以落地为项目？是否觉得在 AI 时代，仍要把大量时间耗费在重复性的基础工作上，而非真正的创作？

本插件面向自由创作者：将一句模糊的想法，在持续问答中逐步梳理为清晰需求、技术路线与维护基准——最终生成可复用的项目结构文档，每一步都有据可查、随时可改。

它不仅是项目初始化工具，更是一种创作习惯的养成方式：所有操作先告知理解、你确认后再执行；阶段推进由你决定；需求文档只保留清单与结构，干净、简洁、不锁死。尤其适合从零起步的创作者，在结构化引导中理清思路、降低启动门槛，让每一个想法都有机会成长为完整项目。

## 功能结构（v1.1：主 skill + 原子子 skill）

插件无场景预设——主 skill 即入口，skill 按上下文（工作区状态/用户指令/自动触发）加载，每个 skill 可单独调用。

**6 类主 skill**（规则 + 聚合清单 + 调度）：

| 主 skill | 定位 |
|---|---|
| base | 项目初始化（git init/身份/远端 + 骨架生成） |
| req | 需求确立（收集/分析/统合/规格化） |
| dev | 开发前（论证/技术选型/相似方案与合规检索） |
| mnt | 维护（再编排/变更/回归/初始化/发布/反馈） |
| common | 跨阶段通用（确认/验证调度/token/清除整理/问答模板） |
| rules | 规则与术语体系（术语对照/冲突裁决/同步 + 术语表模板） |

**原子子 skill 共 67 个**：按「一个功能实现点 = 一个原子子 skill」拆分（如 item-confirm 确认绑定、verify-3layer 三层遍历、release-build 构建打包等），单职责、简短、可单独调用；验证单元（F28-F34）由 verify 调度者统一组合调度。

**模板体系**：doc-templates 20 份 + rule-templates 8 份（zh/en 镜像）。

## 规则要点

- 所有操作：先告知理解，用户确认后再执行
- **确认绑定**：确认 = 对当前点名编号项的明确回应；返回内容/上下文表述/沉默不算确认
- **操作分级 L0-L4**：执行前核对授权范围；禁区拒绝、高风险单独请示、干跑先行
- **扮演假设**：扮演角色前声明假设；扮演假设 ≠ 事实；尊重客观事实，禁止讨好用户与迎合上下文
- **因果与逻辑事实验证**：回答/提问前验证因果与前提
- 阶段推进由用户决定；禁止"假定完成"；进入下一阶段前提醒是否遍历检查
- 沉默 ≠ 同意；变更显式记录；先查证不假设
- 需求文档：只总结清单/结构，禁引用、禁决策信息，干净简洁
- 文档 = 初始基准，不锁死；中英双版（zh 主版 / en 镜像；skill 细则为中文单语）

## 快速开始

### 安装

> 完整安装指引（目录定位/更新/卸载/常见问题）见 **[维护文档/安装指引](maintenance-docs/INSTALL.md)**（在 GitHub 仓库内；npm 包不含维护文档）。

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

1. DSH 新建会话，选择「想法落地」
2. 按上下文推进（AI 先复述，你确认，才进下一步）：提交想法 → 需求确立 → 技术选型 → 维护
3. skill 由上下文自动加载（提交初稿 → req 主；选型请求 → dev 主；检查请求 → verify 调度）

## 仓库结构

```
├── core-library/                主体库
│   ├── presets/alignment/       「想法落地」preset（agent.cordis.yml + 73 skill + 模板 zh/en）
│   └── src/                     插件壳代码（presets 同步）
├── maintenance-docs/            维护文档（安装/贡献/参考/维护规则/回归清单/审计）
├── user-manual.md               使用说明
├── CHANGELOG.md                 版本与更新记录
├── AGENTS.md                    根规则
├── structure.md                 统一全局目录
├── README.md / README.en.md     自述
├── LICENSE                      Apache-2.0
├── package.json / cordis.patch.yml / .gitignore / .gitattributes
└── Other/                       其他（内部，剔除）
```

## 许可

[Apache-2.0](LICENSE)
