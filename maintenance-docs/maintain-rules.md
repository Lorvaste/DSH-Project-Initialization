# maintain-rules.md — 维护规则

> 维护场景定义：维护文档\维护规则（可选新增）。

## 版本号规范

- SemVer：主版本 X（结构性重写递增）/ 次版本 Y（功能/变更递增）
- 版本递增与同步：CHANGELOG.md + package.json version 同步

## 文档同步纪律

- 变更同步：structure.md（全局目录）/ README / user-manual / CHANGELOG
- 文档 = 初始基准，用户可改；变更显式记录
- 新文档统一英文命名并登记 structure.md

## 变更流程

- 变更确认：汇总 → 用户逐项确认 → 确认项才写入
- 删除/移动/重命名：先用户确认，记录（原路径 → 新路径 → 理由）
- 冲突先裁决

## 回归

- 变更后按 regression.md 清单复测（当前不设必跑门槛，结果经用户确认生效）

## 归档与剔除

- 内部目录 Other/ 整体剔除（.gitignore）
- 审计产物入 maintenance-docs/audit/
