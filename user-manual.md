# user-manual.md — 使用说明

> 维护场景定义：使用说明（可选）。完整安装指引见 maintenance-docs/INSTALL.md。

## 使用步骤

1. DSH 新建会话，选择「想法落地」
2. 按上下文推进（AI 先复述，你确认，才进下一步）：提交想法 → 需求确立 → 技术选型 → 维护
3. skill 由上下文自动加载（无场景预设，主 skill 即入口）

## 主 skill 速查（上下文线索 → 加载）

| 上下文线索 | 加载（主 skill） |
|---|---|
| 工作区为空 / 初始化请求 | base（git init/身份/远端 + 骨架） |
| 提交初稿 / 想法 / 白皮书 | req + common（确认） |
| 需求确认 / 统合 / 规格化请求 | req + rules |
| 技术选型 / 论证请求 | dev + 开发类模板 |
| 重复性/合规检查 | dev（检索）+ verify 调度 |
| 复核 / 变更请求 | mnt + verify 调度 |
| 进入维护 / 发布 / 反馈 | mnt |
| 任意时刻「检查/验证」 | verify 调度（验证单元组合） |
| 长会话 / token 优化 | common（token） |
| 清理/整理 | common（清除整理） |
| 术语统一 | rules |

## 关键规则

- 确认绑定：确认 = 对当前点名编号项的明确回应；"已理解/好的"不是确认
- 操作分级 L0-L4：执行前核对授权；禁区拒绝、高风险单独请示、干跑先行
- 扮演假设：扮演角色前声明；假设 ≠ 事实；禁止讨好用户与迎合上下文
- 进入下一阶段前：AI 会提醒是否执行遍历性检查（可跳过但须记录）

## 常见问题

| 问题 | 处理 |
|---|---|
| 场景选择器看不到场景 | 见 maintenance-docs/INSTALL.md 常见问题 |
| preset 内无 skill | 检查 agent.cordis.yml 的 skill-filesystem baseUrl 范式；确认 preset 目录含 skills/ |
| git 报 dubious ownership | `git -c safe.directory="<路径>" <cmd>` 逐命令绕过 |
