# Structure.md — 仓库结构

> 仓库内容的结构化说明。本仓库是「AI 产品创建对齐」插件（DSH agent preset 双场景）。

## 仓库结构（对外）

```
DSH-Project Initialization/
├── README.md         自述：愿景、特性、双场景、安装、使用
├── LICENSE           Apache-2.0
├── Reference/
│   └── project-structure.md 项目结构规范参考
├── Rules.md          项目规范（骨架生成文件母版）
├── Structure.md      本文档
├── presets/          插件本体（agent-presets root）
│   ├── from-scratch/         场景「从零开始」
│   │   ├── agent.cordis.yml  工具白名单（宿主行引用）+ 场景人设
│   │   ├── preset.yml        元数据：显示名「从零开始」
│   │   ├── LICENSE           Apache-2.0
│   │   ├── skills/           scaffold / interview / freeze / task-split
│   │   └── assets/           默认骨架模板（7 个 .tpl，占位符版）
│   └── confirm-first/        场景「先等等，让我确认一下」
│       ├── agent.cordis.yml  工具白名单（同款）+ 场景人设
│       ├── preset.yml        元数据：显示名「先等等，让我确认一下」
│       ├── LICENSE           Apache-2.0
│       └── skills/           polish（双子场景：初版完善/变更目标）
├── .gitignore        git 忽略规则（含密钥凭据覆盖、Not public/）
├── .gitattributes    换行符规范（统一 LF）
├── package.json      薄插件壳（dsh bundle manifest）
├── cordis.patch.yml  插件壳注册（presets/ root）
└── Not public/       不公开内容（本地维护，不随仓库提交：开发计划/进度/访谈记录/开发期脚本）
```

## 两条路径（插件流程）

### 项目刚开始（从零流程）

```
确认工作区 → git init → ssh 远端（可选）→ 默认骨架 → 需求问答
→ 类型子结构 → 规格冻结 → spec 初版终稿 → 任务拆分初稿 → 文档推送
```

### 项目进行中（完善/变更流程）

```
确认工作区 → git 状态与远端 → 文档对齐（AI 复述 + 用户核对）
→ 变更确认 → spec 版本递增 + 变更记录显式化 → 推送
```
