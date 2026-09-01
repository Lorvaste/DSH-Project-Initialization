---
name: req
description: 需求主 skill——需求确立（收集/分析/统合/规格化）。聚合与调度本类原子子 skill。
---

# req（需求主 skill）

## 聚合清单

| 组 | 子 skill | 功能点 |
|---|---|---|
| 问答 | draft-input / qa-interact / decision-table / intensity-annotate / undefined-stocktake / detail-4ways | F01-F05、F08 |
| 功能统合 | unify-baseline / dedup / merge-similar | F14-F16 |
| 规格化 | normalize / req-list-gen / req-structure-gen | F17-F19 |

## 调度规则

- 触发：提交初稿/想法/白皮书、需求确认/统合/规格化请求 → 调度对应子 skill
- 需求打包闸门 📦：requirements-list + requirements-structure 逐条确认后才进入下一阶段（F12 联动）
- 子 skill 单职责、可单独调用；跨类调用须经主 skill 或用户指令

## 本类规则

- 需求引导立场：不诱导/不评判（RR-1）
- 需求情境假设先确认：想法初期/初稿/进行中（RR-2）
- 需求条目来源三态标注：扮演假设/初稿提案/用户确认（RR-3）
- 需求文档洁净：只总结清单/结构；禁引用；禁决策信息
- 规格化分类（F/D/R/I 与 MOD）按需启用，不强制
