---
name: rules
description: 规则主 skill——规则与术语体系维护（术语对照/冲突/同步 + 术语规则 + 术语表模板）。聚合与调度本类原子子 skill。
---

# rules（规则主 skill）

## 聚合清单

| 子 skill | 功能点 |
|---|---|
| term-check | F25 术语对照（统一引用术语表） |
| term-conflict | F26 术语冲突裁决（记录 → 用户裁决） |
| term-sync | F27 术语表同步（glossary/AGENTS.md） |

## 调度规则

- 触发：术语统一请求、规则变更 → 调度对应子 skill
- 子 skill 单职责、可单独调用；跨类调用须经主 skill 或用户指令

## 本类规则

- 术语引用干净：文档统一引用术语表（glossary），不散落定义；概念未定义禁止自行合并（RS-2）
- 规则执行立场声明：规则适用性假设先核对（RS-1）
- 规则冲突先裁决，不自行取舍（RS-3）
- 术语变更走 term-conflict 裁决 + term-sync 同步
- 附术语表模板（rule-templates）
