# Structure.md — 项目内容

> 项目内容的结构化信息：定位、当前结构、场景与路径说明。

## 项目定位

{{PROJECT_VISION}}

## 当前结构

```
{{PROJECT_NAME}}/
├── README.md         自述：愿景、说明、文档目录
├── LICENSE           {{LICENSE_NAME}}
├── Rules.md          项目规范
├── Structure.md      本文档
├── Progress.md       项目进度与流程状态
├── plan.md           项目结构规范 + 开发计划 + 验收规则
├── Other/            其他内容（访谈记录、决策思路）
├── Reference/
│   ├── spec.md       项目规格（冻结）
│   └── tasks.md      任务拆分（按功能域）
├── .gitignore        git 忽略规则
├── .gitattributes    换行符规范（统一 LF）
└── .git/
{{#SCENE_TYPE}}
（类型子结构见下：{{SCENE_TYPE}}）
{{/SCENE_TYPE}}
```

## 场景类型

{{SCENE_TYPE_DETAIL}}

## 流程路径

### 项目刚开始（从零流程）

```
确认工作区 → git init → ssh 远端（可选）→ 默认骨架 → 需求问答
→ 类型子结构 → 规格冻结 → spec 初版终稿 → 任务拆分初稿 → 文档推送
```

### 项目进行中（纠偏流程，后续版本）

```
确认工作区 → git 状态与远端 → 文档对齐（AI 复述 + 用户核对）
→ 结构化重排（循环确认）→ 产物对照（偏差清单）→ 逐项修正
```
