---
name: base
description: 基础主 skill——项目初始化（git init/身份/远端 + 骨架生成）。聚合与调度本类原子子 skill。
---

# base（基础主 skill）

## 聚合清单

| 子 skill | 功能点 |
|---|---|
| git-init | F50 git init -b main |
| git-identity | F51 项目级身份 |
| git-remote | F52 远端 origin（可选） |
| scaffold | F53 通用骨架生成（9+2 项） |
| substructure | F54 类型子结构生成（软件/硬件，有则生成） |
| scaffold-confirm | F55 生成确认交互（复用逐条确认） |

## 调度规则

- 触发：工作区为空 / 初始化请求 → 按 F50→F55 顺序调度
- 子 skill 单职责、可单独调用；跨类调用须经主 skill 或用户指令
- 操作分级：本类为 L1/L2（完整定义见 common 主 skill 操作分级）；删除/移动/重命名先确认

## 本类规则

- 所有操作先告知理解，用户确认后执行
- 先查证不假设：git 状态/工作区现状先核对（RB-2 情境假设核对）
- 扮演假设：RB-1 引导者立场声明（不替你决策）；RB-3 初始化意图与项目形态先确认
- 远端 origin 可选，不默认
- git-init 类操作不落盘
