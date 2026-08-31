# user-manual.md — 使用说明

> 维护场景定义：使用说明（可选）。完整安装指引见 maintenance-docs/INSTALL.md。

## 使用步骤

1. DSH 新建会话，选择「想法落地」
2. 按上下文推进：需求确立 → 开发前 → 维护
3. 每步：AI 先复述，你确认，才进下一步

## 场景速查

| 场景 | 定位 | 流程 |
|---|---|---|
| 需求确立 | 需求收集与设计（完善补充想法）+ 需求确认（含统合节点）+ 规格化 | qa → confirm → integrate → organize → unify-terms → verify |
| 开发前 | 技术选型与技术设计（基于需求定档论证） | qa（技术选型模式）→ 开发类模板 |
| 维护 | 维护确认与运营 | organize（再编排先行）→ maintain → change → regress → verify |

## 常见问题

| 问题 | 处理 |
|---|---|
| 场景选择器看不到场景 | 见 maintenance-docs/INSTALL.md 常见问题 |
| 场景内无 skill | 检查 agent.cordis.yml 的 skill-filesystem baseUrl 范式 |
| git 报 dubious ownership | `git -c safe.directory="<路径>" <cmd>` 逐命令绕过 |
