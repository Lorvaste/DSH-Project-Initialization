---
name: scaffold
description: 场景「从零开始」的脚手架阶段：确认工作区、git 初始化、ssh 远端（可选）、生成默认骨架（9+2 项），为访谈提供项目地基。用户进入新项目场景时使用本 skill。
---

# 脚手架（scaffold）

目标：为产品创建项目搭好地基（git + 默认骨架），对应流程状态机 workspace → git-init → git-remote → scaffold。

## 执行步骤

### 1. 确认工作区（状态：workspace）

- 询问用户项目工作区目录（一次一个问题）
- 校验：目录有效、可写；不存在则创建
- 闸门：用户确认目录 → 进入下一步

### 2. git 初始化（状态：git-init）

- 在确认的工作区执行 `git init`
- 已存在 git 仓库则直接通过
- 闸门：`git init` 成功（或已存在）→ 进入下一步
- ⚠️ 环境事实：P:\Project 下仓库会报 dubious ownership，用 `git -c safe.directory="<路径>" <cmd>` 绕过，勿改全局配置

### 3. ssh 远端（可选，状态：git-remote）

- 询问用户是否链接远端仓库（用户可选——ssh 最稳定，https 需 token 管理）
- 选择链接：`git remote add origin <ssh-url>`，确认远端可达
- 选择跳过：显式记录到 Progress.md
- 闸门：用户选择完成（链接或跳过）→ 进入下一步

### 4. 生成默认骨架（状态：scaffold）

按 assets/ 模板生成 9+2 项，**占位符替换**规则：

| 占位符 | 替换为 |
|---|---|
| `{{PROJECT_NAME}}` | 项目名 |
| `{{REMOTE_URL}}` | ssh 远端地址（无则留空）|
| `{{AUTHOR_NAME}}` | git 本地身份名 |
| `{{AUTHOR_EMAIL}}` | git 本地身份邮箱 |
| `{{SCENE_TYPE}}` | 场景类型（待访谈确认，先留待定）|

模板清单（assets/ 目录）：

```
README.md.tpl        → README.md      （愿景/说明/文档目录/远程仓库）
Rules.md.tpl         → Rules.md       （语言偏好/上下文规则/开发规则/术语标准/骨架分工声明）
Structure.md.tpl     → Structure.md   （项目定位/当前结构/场景路径）
Progress.md.tpl      → Progress.md    （当前阶段/阶段总览/会话日志——流程状态记录于此）
plan.md.tpl          → plan.md        （项目结构规范/开发规划/验收规则）
.gitignore.tpl       → .gitignore     （git 忽略规则）
.gitattributes.tpl   → .gitattributes （换行符规范，统一 LF）
```

- LICENSE：询问用户选择开源协议（默认 Apache-2.0，复制本 preset 的 LICENSE）
- Other/、Reference/ 目录创建（空目录由 .gitkeep 占位或文档中说明）
- 初始提交：`git add -A && git commit -m "chore: 初始化项目骨架"`（提交规范：Conventional Commits）

### 5. 闸门校验

- 骨架 9+2 项文件齐全、内容符合 plan.md 规范
- 失败：回本步重做；用户明确要求跳过则跳过并记录到 Progress.md
- 通过：进入访谈阶段（interview skill）

## 规则

- 其他骨架（类型子结构：软件/硬件/复合）**不在本 skill 范围**——由访谈确定场景类型后按项目 Rules.md 第四章规则生成（见 interview skill 说明）
- 任意状态可回退到之前任意状态（用户说"回到某步"即回退）
- 当前状态写入 Progress.md（中断可恢复续跑）

## 防漂移红旗表（Red Flags——这些想法意味着 STOP）

| 合理化念头 | 必须改为 |
|---|---|
| "骨架差不多了，缺一两个文件没关系" | 闸门校验：9+2 项文件齐全才进入下一步 |
| "git 初始化过了就不用记录" | 每个里程碑 commit，状态写入 Progress.md |
| "跳过没记录也没事" | 跳过必须显式记录到 Progress.md |

## 规则分级与优先级

- **刚性（Rigid，必须执行）**：骨架文件齐全闸门 / git init 成功 / 跳过显式记录
- **弹性（Flexible，适配原则）**：ssh 远端选择（用户可选）/ LICENSE 协议选择（用户定）
- **优先级链**：用户拍板 > 场景规则 > AI 建议

## 工程准则

- **先查证，不假设**：环境事实（git 行为/路径/平台差异）以实测或文档为准，不凭记忆推断
- **三次失败协议**：失败路径 ① 诊断并修复 → ② 换方案（不重复同一操作）→ ③ 重新思考 → 3 次后求助用户
- **写盘即记忆**：每个里程碑 commit + Progress.md 状态记录
