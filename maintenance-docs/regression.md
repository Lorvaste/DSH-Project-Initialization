# regression.md — 回归清单

> 维护场景定义：维护文档\回归清单。变更后按清单逐项复测。

## 既有功能点

| ID | 功能点 | 验证步骤 | 预期结果 | 最近验证 |
|---|---|---|---|---|
| RG-01 | 场景名单 | DSH 重启后查看场景选择器 | 出现「从零开始」与「先等等，让我确认一下」 | 2026-08-30 |
| RG-02 | skill 隔离 | 进入 from-scratch 场景查看 skill 列表 | 仅 freeze/interview/scaffold/task-split，无全局 skill 泄漏 | 2026-08-30 |
| RG-03 | from-scratch 冒烟 | 空目录执行初始化 | 骨架 8+2 项生成、git init -b main、身份 Lorvaste、跳过项显式记录 | 2026-08-30 |
| RG-04 | confirm-first 复述确认 | 提交初版方案 | F/D/R/I 四层复述 + MOD 预划分 | 2026-08-30 |

## 红-绿验证项

| ID | 对象 | 故障注入步骤 | 恢复步骤 | 结果 |
|---|---|---|---|---|
| RG-01 | presets 同步 | 篡改 .agent-presets 下 agent.cordis.yml | 重启 DSH Desktop（插件壳幂等同步重建） | 待验证 |
| RG-02 | skill 隔离 | 在用户根目录放置同名 skill | 场景内不出现 | 待验证 |

## 门槛标记

- 当前不设必跑门槛；验证结果经用户确认生效。
