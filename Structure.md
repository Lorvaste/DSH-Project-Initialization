# Structure.md — 项目内容

> 项目内容的结构化信息：定位、当前结构、场景与路径说明。

## 项目定位

DSH 插件「AI 产品创建对齐」：场景模式插件，解决 AI 从零创建产品与想法不一致。
完整需求理解见 [Reference/IDEA.md](Reference/IDEA.md)。

## 当前结构（自举，符合 plan.md 规范）

```
DSH-Project Initialization/
├── README.md         自述：愿景、说明、文档目录
├── LICENSE           Apache-2.0
├── Rules.md          项目规范
├── Structure.md      本文档
├── Progress.md       项目进度
├── plan.md           项目结构规范 + 开发计划 + 验收规则
├── Other/
│   └── findings.md   访谈发现与决策思路
├── Reference/
│   └── IDEA.md       需求理解（v0.2 草案）
├── .gitignore        git 忽略规则
├── .gitattributes    换行符规范（统一 LF）
└── .git/
```

## 三类场景（插件覆盖）

| 场景 | 说明 |
|---|---|
| 纯软件 | Frontend/Backend/Database 子结构（有则生成）|
| 纯实体 | Model/电子电路/嵌入式 子结构（有则生成）|
| 复合项目 | 按类型与功能块拆分组合（软件+硬件）|

## 两条路径（插件流程）

### 项目刚开始（从零流程）

```
确认工作区 → git init → ssh 远端（可选）→ 通用骨架 → 需求问答
→ 类型子结构 → 规格冻结 → 文档推送 → 任务分解 → 执行 → 验收
```

### 项目进行中（纠偏流程）

```
确认工作区 → git 状态与远端 → 文档对齐（AI 复述 + 用户核对）
→ 结构化重排（循环确认）→ 产物对照（偏差清单）→ 逐项修正
```
