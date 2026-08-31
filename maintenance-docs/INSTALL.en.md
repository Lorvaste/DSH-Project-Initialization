# Installation Guide

Complete install, update, and uninstall instructions for the DSH plugin "Product Creation Alignment" (`DSH-Project-Initialization`).

[中文](INSTALL.md)

---

## Prerequisites

- [DSH Desktop](https://github.com/dataelement/dsh-desktop) installed (v0.6.3+)
- You can create new sessions (agent preset mechanism works)

## Step 1: Find DSH's preset directory

DSH's agent preset directory lives under DSH's data directory, typically:

| Environment | Path |
|---|---|
| Windows | `%APPDATA%\dsh-desktop\harness\.agent-presets\` |
| Other | `<dshHome>\.agent-presets\` (`dshHome` per DSH config) |

> Not sure? Check the data directory in DSH settings, or search for the `.agent-presets` folder in File Explorer.
> To confirm: the directory already contains preset subdirectories (each containing `agent.cordis.yml`) — that's the right location.

## Step 2: Install (either option)

### Option 1: Manual copy (zero build, recommended)

Copy the two scenario directories from the repo's `core-library/presets/` into the preset directory:

```powershell
# Locate
$presets = "$env:APPDATA\dsh-desktop\harness\.agent-presets"

# Copy (make sure no old copies exist in the target, to avoid nesting)
Remove-Item "$presets\from-scratch"  -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$presets\confirm-first" -Recurse -Force -ErrorAction SilentlyContinue

Copy-Item core-library\presets\from-scratch  $presets -Recurse
Copy-Item core-library\presets\confirm-first $presets -Recurse
```

> ⚠️ Delete before copy: overwriting an existing directory directly produces nesting (`from-scratch\from-scratch`), and the scenario will fail to load.

### Option 2: Plugin market (bundled presets)

Install the npm package `dsh-project-initialization` (add it to the DSH profile's dependencies + bundles list); at host startup the plugin shell automatically syncs the bundled `presets/` into `.agent-presets`, and both scenarios appear in the list.

> Plugin shell mechanism: at host startup the bundled presets/ are synced into `.agent-presets` (idempotent copy, equivalent to manual copy); after updating the plugin, a restart syncs it.

## Step 3: Verify the install

Create a new DSH session and check whether the scenario picker shows "From scratch" (`从零开始`) and "Wait, let me confirm first" (`先等等，让我确认一下`).

- Both scenarios present → installed successfully
- Missing scenarios → check the directory structure from Step 2 (any nesting), and that `agent.cordis.yml` is complete

## Usage

| Scenario | When to use | Flow |
|---|---|---|
| **From scratch** | No idea where to start? Try going from Q&A to confirmation | confirm workspace → git → skeleton → six-step Q&A → freeze → spec draft + task breakdown → push |
| **Wait, let me confirm first** | Something feels off? Review the understanding and confirm first | ① Finalize an initial plan ② Change the plan and goals of an in-progress project (version bump + change records) |

Follow the prompts inside the scenario step by step; at every step the AI restates, you confirm, and only then it proceeds.

## Update

```powershell
# After pulling the latest code, repeat Step 2 (delete before copy)
```

Version changes follow the repo's git history (README or Release notes).

## Uninstall

```powershell
Remove-Item "$env:APPDATA\dsh-desktop\harness\.agent-presets\from-scratch"  -Recurse -Force
Remove-Item "$env:APPDATA\dsh-desktop\harness\.agent-presets\confirm-first" -Recurse -Force
```

If installed via the plugin market, uninstall it in DSH's plugin manager instead.

## FAQ

| Issue | Cause & fix |
|---|---|
| Scenario picker doesn't show the two scenarios | Preset directory path wrong or structure incomplete — check the directory structure and `agent.cordis.yml`; make sure you copied into `.agent-presets` (not nested one level deeper) |
| No scenario skills inside the session | `customSkillDirs` baseUrl resolution failed — make sure the skill-filesystem line in `agent.cordis.yml` uses the baseUrl pattern (official form) and the preset directory contains `skills/` |
| Unrelated skills appear in the skill list | Global skill leak — make sure `includeDefaultRoots: false` is on the skill-filesystem line in `agent.cordis.yml` |
| git reports dubious ownership | Common on Windows: work around per command with `git -c safe.directory="<path>" <cmd>`, don't change the global config |
| push blocked by the sandbox | The DSH sandbox restricts the ssh pipe: retry after escalating permissions as prompted (the scenario will guide you) |
