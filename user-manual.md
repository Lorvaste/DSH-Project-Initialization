# user-manual.md — 使用说明

> 维护场景定义：使用说明（可选）。完整安装指引见 maintenance-docs/INSTALL.md。

## 使用步骤

1. DSH 新建会话，选择场景
2. **从零开始**：确认工作区 → git → 骨架 → 问答六步 → 冻结 → 规格初稿 + 任务拆分 → 推送
3. **先等等，让我确认一下**：提交初版方案完善成档，或改进行中项目的方案和目标
4. 每步：AI 先复述，你确认，才进下一步

## 场景速查

| 场景 | 什么时候用 | 流程 |
|---|---|---|
| 从零开始 | 从想法起步 | 问答六步 → 规格冻结 → 任务拆分 |
| 先等等，让我确认一下 | 复核/变更 | 完善初版方案 / 修改方案与目标（版本递增 + 变更记录）|

## 常见问题

| 问题 | 处理 |
|---|---|
| 场景选择器看不到场景 | 见 maintenance-docs/INSTALL.md 常见问题 |
| 场景内无 skill | 检查 agent.cordis.yml 的 skill-filesystem baseUrl 范式 |
| git 报 dubious ownership | `git -c safe.directory="<路径>" <cmd>` 逐命令绕过 |
