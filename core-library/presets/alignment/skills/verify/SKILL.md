---
name: verify
description: 遍历性检查调度者（唯一验证调度者）。任意时刻用户指令或自动触发时使用。
---

# verify（验证调度者）

## 调度规则

- 任何验证请求经 verify 调度：按目标选择验证单元组合（单元可单独调用）
- 目标 → 单元组合：
  - 需求/规格检查 → verify-3layer + verify-7dim + verify-3check + verify-placeholder
  - 文档/结构检查 → verify-3check + verify-placeholder
  - 变更影响 → verify-recheck（影响面复验）
  - 回归验证 → regress-run + verify-redgreen + verify-evidence
  - 论证/结论 → verify-evidence（证据报告）
- 输出：verify-report（模板 verify-report.md.tpl），结果经用户确认后生效
- 与 PG-2 联动：阶段推进前给出检查类型清单（对象 × 单元组合）
