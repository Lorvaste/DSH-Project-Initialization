# Rules.md — 项目规则

> 本插件仓库的项目规则。新定义权威：AGENTS.md（根规则）、Other/cs1/mod1.md（设计定案）、core-library/presets/alignment/（模板体系）。
> 所有参与者（人类与 AI）默认遵守；规范变更需显式记录。

## 0. 规则优先级（裁决链）

1. 用户明确指令（当场拍板，高于一切）
2. AGENTS.md（根规则；用户可修改，项目内优先）
3. 域内规则（仅适用当前域；与全局冲突时全局优先）
4. 场景规则（skill 指令）
5. 本文件默认规则（兜底）

冲突处理：发现冲突 → 记录 → 请用户裁决 → 裁决结果更新规则。

## 1. 语言偏好

- 交流与文档默认中文；代码标识符、git 提交信息用英文
- 文档名只用英文
- 中英双版：zh 主版 / en 镜像

## 2. 上下文规则

- 需求变更显式记录，禁止静默漂移
- 关键理解点：「AI 复述 → 用户确认」后才算对齐
- 文档是唯一权威：代码/产物与文档冲突时以文档为准，并记录偏差
- 不满足当前阶段校验，不得进入下一阶段（闸门）
- 阶段推进由用户决定；AI 只提示，禁止"假定完成"
- 文档 = 初始基准，不锁死

## 3. 开发规则

- 遵循 SDD：先规格后实现（规格 = requirements-list / requirements-structure 初始基准）
- TDD：可选规则（见 dev-rules 模板，用户决定启用）
- 每个里程碑完成：文档保存 + git 提交

### 3.1 git 规则

**初始化与身份**
- `git init -b main`；项目级 `git config user.name/user.email`，勿改全局

**分支**
- 主干即 `main`，不建长期并行分支

**忽略与属性**
- `.gitignore` 必备：密钥凭据/构建产物/内部目录（Other/）/编辑器/系统文件
- `.gitattributes`：统一 LF（`* text=auto` + 文档/代码 `eol=lf`）

**提交**
- Conventional Commits：`<type>(<scope>): <subject>`，type ∈ feat/fix/docs/chore/refactor/test/style/build/perf
- 一个里程碑一个提交

**推送**
- 场景结束才推送，push 可选
- 推送前检查：无密钥、无内部文档、无未确认产物

**环境坑**
- dubious ownership：`git -c safe.directory="<路径>" <cmd>` 逐命令绕过
- 远端确认：`git ls-remote <url>`

**安全**
- 密钥与凭据永不提交
- 内部文档（Other/ 下）git 例外，仅本地维护

## 4. 骨架生成

- 用户项目骨架 = 三模式目录（通用 / 需求确认 / 开发前 / 维护），由 alignment 场景按模板生成
- 模板体系：core-library/presets/alignment/doc-templates/ + rule-templates/（zh/en）
- 生成方式：scaffold 按模板逐项确认；文档只定义表达方式 / 章节分级 / 可选章节
- 需求文档洁净：只总结清单或结构；禁引用其他文件或条目；禁决策信息；干净简洁

## 5. 术语标准

| 术语 | 定义 |
|---|---|
| 产品创建对齐 | 单场景入口（preset id `alignment`） |
| 场景 | 功能集合最小预设（需求确立 / 开发前 / 维护） |
| 功能 skill | 10 个：qa/confirm/integrate/organize/unify-terms/verify/change/regress/maintain/token-compress |
| 开发类 | 仅模板无 skill（技术选型/规划/域规则/开发规则） |
| 需求文档 | requirements-list / requirements-structure / requirements-summary（只总结清单或结构） |
| 统一全局目录 | structure.md（文档变化实时更新） |
| 根规则 | AGENTS.md |
| 中英双版 | zh 主版 / en 镜像；主 skill 识别语言偏好 |
| 按需加载 | skill 按上下文（工作区状态/用户指令/自动触发）加载 |
| 规则分级 | 刚性（必须执行）vs 弹性（适配原则，以用户确定完成为准） |
| 优先级链 | 用户拍板 > AGENTS.md > 域内规则 > 场景规则 |
| skill 隔离 | 场景只加载自身 skill（includeDefaultRoots:false + baseUrl 范式） |
| 证据机制 | 结论附证据；明确"什么不算证据"；红旗词触发确认 |
| 防漂移红旗 | AI 合理化念头 → 必须显式确认 |
