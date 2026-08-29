# Progress.md — 项目进度

## 当前阶段

**阶段 1：需求理解冻结**（in_progress）—— Reference/IDEA.md v0.2 草案待用户确认，剩余待确认项见文档第九章。

## 阶段总览

| 阶段 | 状态 | 说明 |
|---|---|---|
| 0. 需求澄清访谈 | complete | 5 轮访谈 + plan.md 结构规范 + 5 项裁决 |
| 1. 需求理解冻结 | in_progress | 确认 Reference/IDEA.md v0.2（含待确认清单）后冻结为 v1.0 |
| 2. 产品设计 | pending | 问答流程（六步）、规格结构、脚手架模板细化 |
| 3. 技术方案 | complete | 场景模式实现方案：agent preset 载体、工具白名单、skill 规范、流程状态机、插件壳 |
| 4. 插件实现 | in_progress | preset 文件已创建（agent.cordis.yml/preset.yml/4 skill/assets 模板/薄插件壳）；待验证阶段实测插件壳注册 |
| 5. 验证 | pending | 本地安装测试、端到端走一遍从零流程 |
| 6. 开源分发 | pending | GitHub 仓库 + 插件市场发布、文档 |

## 会话日志

### 2026-08 会话 1：需求澄清访谈（5 轮）

- [x] 以 PM+技术经理双视角给出初步思路框架（五道闸门）
- [x] 访谈 1-5：产品类型/偏差诊断/使用者/交互/集成深度/术语确认/插件形态/冻结机制/MVP/纠偏/实体/体量/分发
- [x] 用户提供 plan.md（项目结构规范：两路径、三场景、通用骨架、软件/硬件子结构）
- [x] 5 项裁决：先通用骨架后类型结构 / 软件有则生成 / 进行中包含产物对照 / 文件按建议并入 / plan.md 既是模板也自举
- [x] 按新结构自举本仓库（文件重组完成）
- [x] 设计定案：问答六步/规格结构/tasks 功能域/状态机/分发/验收移出范围（57 条决策）
- [x] 实现 preset「从零开始」：agent.cordis.yml + preset.yml + skills（scaffold/interview/freeze/task-split）+ assets 模板（7 个）+ 薄插件壳（package.json/cordis.patch.yml）

## 下一步

- [ ] 验证阶段：实测插件壳注册（cordis.patch.yml roots 合并语义）
- [ ] 端到端走一遍从零流程（本仓库或新项目）
- [ ] 用户确认 Reference/IDEA.md v0.2 → 冻结 v1.0
- [ ] 远端推送（需权限升级）
