# 安装指引

DSH 插件「产品创建对齐」（`DSH-Project-Initialization`）的完整安装、更新与卸载说明。

[English](INSTALL.en.md)

---

## 前置条件

- 已安装 [DSH Desktop](https://github.com/dataelement/dsh-desktop)（v0.6.3+）
- 已能正常新建会话（agent preset 机制可用）

## 第一步：找到 DSH 的 preset 目录

DSH 的 agent preset 目录在 DSH 数据目录下，一般路径：

| 环境 | 路径 |
|---|---|
| Windows | `%APPDATA%\dsh-desktop\harness\.agent-presets\` |
| 其他 | `<dshHome>\.agent-presets\`（`dshHome` 见 DSH 配置）|

> 不确定时：在 DSH 设置里查看数据目录，或在文件资源管理器搜索 `.agent-presets` 文件夹。
> 确认方式：该目录下已存在 preset 子目录（每个目录含 `agent.cordis.yml`）即为正确位置。

## 第二步：安装（二选一）

### 方式一：手动复制（零构建，推荐）

把仓库 `core-library/presets/` 下的单场景目录 `alignment/` 复制到 preset 目录：

```powershell
# 定位
$presets = "$env:APPDATA\dsh-desktop\harness\.agent-presets"

# 复制（确保目标目录不存在旧副本，避免嵌套）
Remove-Item "$presets\alignment" -Recurse -Force -ErrorAction SilentlyContinue

Copy-Item core-library\presets\alignment $presets -Recurse
```

> ⚠️ 先删后复制：直接覆盖已存在的目录会产生嵌套（`alignment\alignment`），场景将无法加载。

### 方式二：插件市场（随附 preset）

安装 npm 包 `dsh-project-initialization`（加入 DSH profile 依赖 + bundles 列表）后，宿主启动时插件壳自动把包内 `presets/` 同步到 `.agent-presets`，场景自动出现在名单。

> 插件壳注册机制：宿主启动时自动把包内 presets/ 同步到 `.agent-presets`（幂等复制），与手动复制等效；插件更新后重启即同步。

## 第三步：检查安装

在 DSH 新建会话，检查场景选择器是否出现「产品创建对齐」。

- 场景出现 → 安装成功
- 缺场景 → 检查第二步的目录结构（是否有嵌套）、`agent.cordis.yml` 是否完整

## 使用

| 场景 | 什么时候用 | 流程 |
|---|---|---|
| **产品创建对齐** | 从想法到维护全流程 | 需求确立（问答/确认/规格化）→ 开发前（技术选型/模板）→ 维护（再编排/变更/回归）|

场景内按提示一步步走；每一步 AI 先复述、你确认、才进下一步。

## 更新

```powershell
# 拉到最新代码后，重复第二步（先删后复制）
```

版本变化以仓库 git 历史为准（README 或 Release 说明）。

## 卸载

```powershell
Remove-Item "$env:APPDATA\dsh-desktop\harness\.agent-presets\alignment" -Recurse -Force
```

插件市场方式安装的，在 DSH 插件管理中卸载即可。

## 常见问题

| 问题 | 原因与处理 |
|---|---|
| 场景选择器看不到场景 | preset 目录路径不对或结构不完整——检查目录结构与 `agent.cordis.yml`；确认复制到 `.agent-presets` 下（不是里面再套一层）|
| 场景里没有场景 skill | `customSkillDirs` 的 baseUrl 解析失败——确认 `agent.cordis.yml` 的 skill-filesystem 行是 baseUrl 范式（官方写法），preset 目录含 `skills/` |
| skill 列表里出现无关 skill | 全局 skill 泄漏——确认 `includeDefaultRoots: false` 在 `agent.cordis.yml` 的 skill-filesystem 行 |
| git 操作报 dubious ownership | Windows 常见：用 `git -c safe.directory="<路径>" <cmd>` 逐命令绕过，勿改全局配置 |
| push 被沙箱拦截 | DSH 沙箱限制 ssh 管道：按提示提升权限后重试（场景内会引导）|
