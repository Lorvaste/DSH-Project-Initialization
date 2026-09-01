---
name: mnt
description: 维护主 skill——维护（发布/变更/回归/初始化/再编排/反馈）。聚合与调度本类原子子 skill。
---

# mnt（维护主 skill）

## 聚合清单

| 组 | 子 skill | 功能点 |
|---|---|---|
| 再编排 | scan-all / unify-docs / classify-docs / check-docs / reorchestrate-report | F20-F24 |
| 变更 | change-summarize / change-confirm-write / version-bump / change-log / domain-register | F35-F39 |
| 回归 | regress-run / regress-evidence / regress-report | F40-F42 |
| 初始化 | maintain-classify / archive-raw / maintain-docs-gen / structure-sync | F43-F46 |
| 发布 | release-build / release-deploy / release-record | F56-F58 |
| 反馈 | feedback-collect / new-req-list / todo-stage-doc | F62-F64 |

## 调度规则

- 触发：复核/变更请求、进入维护/发布/反馈 → 调度对应子 skill（变更/发布类 + verify 调度）
- 全量再编排为维护先行步骤（F20-F24 按序）
- 子 skill 单职责、可单独调用；跨类调用须经主 skill 或用户指令

## 本类规则

- 维护执行立场声明（RM-1）；变更范围与影响面假设先核对（RM-2）；变更/检验结论经确认生效（RM-3）
- 变更确认闸门：汇总方案 → 逐项确认 → 确认项才写入；删除/降级不静默
- 回归按清单逐项 + 红-绿；结果用户确认生效
- 操作分级：本类多为 L2/L3（改仓库/推送单独请示）；干跑先行 + 可回退保障
- 待办清单/新需求清单为可选文档（模板，不默认）
