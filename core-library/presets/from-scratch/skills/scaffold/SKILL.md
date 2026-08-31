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

- 在确认的工作区执行 `git init -b main`（明确默认分支 main，与环境默认无关；已存在的仓库跳过）
- **git 身份配置（关键步骤，刚性）**：确认 git 身份可用（优先项目级；已有可用全局身份可沿用，不改全局），不可用则询问用户并配置项目级：
  - `git config user.name "<用户名>"`
  - `git config user.email "<邮箱>"`
  - （项目级配置即可，勿改全局）
- 闸门：`git init` 成功 + git 身份可用（初始提交前必须有身份）→ 进入下一步
- ⚠️ 环境事实（条件式）：若报 dubious ownership（Windows 下常见，目录属主与当前用户不一致），用 `git -c safe.directory="<路径>" <cmd>` 逐命令绕过，勿改全局配置

### 3. ssh 远端（可选，状态：git-remote）

- 询问用户是否链接远端仓库（用户可选——ssh 最稳定，https 需 token 管理）
- 选择链接：`git remote add origin <ssh-url>`，确认远端可达（`git ls-remote <url>`；沙箱内 ssh 管道被拦时引导权限升级）
- 选择跳过：显式记录到 Progress.md
- 闸门：用户选择完成（链接或跳过）→ 进入下一步

### 4. 生成默认骨架（状态：scaffold）

按 assets/ 模板生成 9+2 项，**占位符替换**规则（模板实际使用的全部占位符；assets 与 skills 同属 preset 根目录，由当前 skill 文件路径上溯两级定位）：

| 占位符 | 替换为 |
|---|---|
| `{{PROJECT_NAME}}` | 项目名（取自工作区目录名，或询问用户）|
| `{{PROJECT_VISION}}` | 项目愿景一句话 |
| `{{REMOTE_URL}}` | ssh 远端地址（无则替换为空串）|
| `{{LICENSE_NAME}}` | 开源协议名（默认 Apache-2.0）|
| `{{SCENE_TYPE}}` | 场景类型（访谈后填入；**初始替换为空串**——条件块依赖空值隐藏）|
| `{{SCENE_TYPE_DETAIL}}` | 场景类型说明（访谈后补）|
| `{{CURRENT_STAGE}}` | 当前阶段名 |
| `{{CURRENT_STAGE_DESC}}` | 当前阶段描述 |

**条件块语义**（`{{#KEY}}...{{/KEY}}`）：KEY 替换后为**非空**才渲染块内容；为空则整块隐藏。`{{#REMOTE_URL}}`（无远端则隐藏仓库信息行）、`{{#SCENE_TYPE}}`（访谈前为空则隐藏类型子结构段）必须按此语义处理，**不得**填入字面量 "待定"（真值会渲染错误内容）。

**阶段二回填锚点**：Structure.md.tpl 含 **2 个** `{{#SCENE_TYPE}}` 条件块（①结构树内行「（类型子结构见下：{{SCENE_TYPE}}）」②独立节「## 场景类型」含 {{SCENE_TYPE_DETAIL}}）。渲染阶段一时两个块都整块隐藏，须在**每个块的原位置**保留注释锚点 `<!-- 类型子结构段：访谈确定场景类型后回填 -->`（共 2 处，不可只留一个）；块内容整块隐藏后无占位符可回填，锚点是阶段二（§6）的插入位置——回填时分别渲染树内行与场景类型节。

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

- LICENSE：询问用户选择开源协议（默认 Apache-2.0，**复制 preset 自带 LICENSE**——presets/from-scratch/LICENSE 已内置）
- Other/、Reference/ 目录创建（空目录由 .gitkeep 占位或文档中说明）
- 初始提交：`git add -A && git commit -m "chore: 初始化项目骨架"`（提交规范：Conventional Commits）

### 5. 闸门校验

- 骨架 9+2 项文件齐全、内容符合 plan.md 规范
- 失败：回本步重做；用户明确要求跳过则跳过并记录到 Progress.md
- 通过：进入访谈阶段（interview skill）

### 6. 阶段二：类型子结构生成（访谈后执行）

- **时机**：访谈（interview skill）确定场景类型后、规格冻结前
- **依据**：项目 Rules.md 第四章（其他骨架生成规则，项目内优先）
- 按 4.1 判定的场景类型执行：
  - 纯软件 → 4.2 软件子结构（有则生成：有前端才建 Frontend 等）
  - 纯实体 → 4.3 硬件子结构（有则生成：Model/电路/嵌入式）
  - 复合 → 4.4 软件+硬件组合
- 生成后：更新 Structure.md 结构树 + **在阶段一保留的锚点处渲染场景类型段**（按 Structure.md.tpl 的 `{{#SCENE_TYPE}}` 块结构，填入实际 SCENE_TYPE/SCENE_TYPE_DETAIL，两处锚点都要回填）+ git commit——**有子结构**：`chore: 生成类型子结构`；**零子结构**（访谈确认无任何软件/硬件功能块，如纯 CLI 小工具）：`chore: 确认零类型子结构`（内容仅 Structure.md/Progress.md 更新，提交信息如实反映，避免与实际产物不符）
- 闸门：子结构符合第四章规则、Structure.md 已同步 → 进入冻结阶段（freeze skill）
- ⚠️ 本阶段是阶段一的延续：默认骨架（访谈前）+ 类型子结构（访谈后）都在本 skill 职责内

## 规则

- 本 skill 分两阶段：**阶段一**（默认骨架，访谈前）+ **阶段二**（类型子结构，访谈确定类型后执行，见第 6 节）
- 任意状态可回退到之前任意状态（用户说"回到某步"即回退）
- **回退副作用规则**：回退到某状态时，该状态之后的落盘产物（spec/tasks/commit）标记「已作废待重写」并记录到 Progress.md（与"写盘即记忆"一致，不静默丢弃）
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
- **优先级链**：用户拍板 > 全局规则 > 域内规则 > 场景规则（完整链见 Rules.md 0.1）

## 工程准则

- **先查证，不假设**：环境事实（git 行为/路径/平台差异）以实测或文档为准，不凭记忆推断
- **三次失败协议**：失败路径 ① 诊断并修复 → ② 换方案（不重复同一操作）→ ③ 重新思考 → 3 次后求助用户
- **写盘即记忆**：每个里程碑 commit + Progress.md 状态记录
