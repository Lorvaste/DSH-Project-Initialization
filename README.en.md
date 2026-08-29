# DSH-Project Initialization

AI product-creation alignment plugin for DSH.

[中文](README.md)

![License](https://img.shields.io/badge/license-Apache--2.0-blue) ![DSH](https://img.shields.io/badge/dsh-agent--preset-ready-green) ![Platform](https://img.shields.io/badge/platform-DSH%20Desktop-blueviolet)

---

## What it is

When you build a product from scratch with AI, the result often drifts from what you originally had in mind.

This plugin addresses exactly that: it adds two scenarios to DSH where the AI asks what you want clearly, writes it down as a specification, and confirms every item with you before moving on. Only what you confirmed moves forward; everything changed is recorded.

## Scenarios

| Scenario | preset id | When to use |
|---|---|---|
| **From scratch** | `from-scratch` | No idea where to start? Try going from Q&A to confirmation — start from an idea, get a spec draft and task breakdown through a six-step Q&A |
| **Wait, let me confirm first** | `confirm-first` | Something feels off? Review the understanding and confirm first — refine an initial plan, or change the plan and goals of an in-progress project |

## What it does

- **Six-step Q&A**: what you want → feature scope → details (one question at a time) → feature-domain breakdown → gap check → finalize
- **Spec freeze**: the AI restates the requirements and you confirm item by item; anything unconfirmed doesn't count
- **Gap check**: catches logical contradictions, coverage gaps, ambiguity, and unverifiable items

## Quick start

### Install

> See **[INSTALL.en.md](INSTALL.en.md)** for the full installation guide (directory location / update / uninstall / FAQ).

**Option 1: Manual copy (zero build)**

```powershell
# Delete first, then copy, to avoid nesting
Remove-Item "$env:APPDATA\dsh-desktop\harness\.agent-presets\from-scratch"  -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$env:APPDATA\dsh-desktop\harness\.agent-presets\confirm-first" -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item presets\from-scratch  "$env:APPDATA\dsh-desktop\harness\.agent-presets\" -Recurse
Copy-Item presets\confirm-first "$env:APPDATA\dsh-desktop\harness\.agent-presets\" -Recurse
```

> The actual `.agent-presets` path follows the `<dshHome>` of your DSH installation.

**Option 2: Plugin market**

After installing the plugin package (`dsh-project-initialization`), `cordis.patch.yml` registers `presets/` as a preset root (`trust: system`), and both scenarios appear in the list automatically.

> With the package installed, the host syncs presets/ into `.agent-presets` at startup (idempotent, equivalent to manual copy).

### Use

1. Create a new DSH session and pick a scenario
2. **From scratch**: confirm workspace → git → skeleton → six-step Q&A → freeze → spec draft + task breakdown → push
3. **Wait, let me confirm first**: submit an initial plan to be finalized, or change the plan and goals of an in-progress project

## How it works

```
what you want → feature scope → detail confirmation → feature-domain split → gap check → finalize
    │                                        │           │
    └── gate at every step, stay until passed ←──────────┘           ↓
                                     spec.md (frozen, numbered items + domain list)
                                     tasks.md (organized by domain, items linked to spec)
```

At every stage: the AI restates first, you confirm, and only then does it proceed.

## Repository structure

```
├── presets/
│   ├── from-scratch/       Scenario "From scratch": agent.cordis.yml + 4 skills + assets templates
│   └── confirm-first/      Scenario "Wait, let me confirm first": agent.cordis.yml + polish skill
├── INSTALL.md / INSTALL.en.md   Installation guides (directory location / update / uninstall / FAQ)
├── CONTRIBUTING.md / CONTRIBUTING.en.md   Contribution guides
├── Reference/
│   └── project-structure.md   Project structure specification reference
├── Rules.md                Project rules (master template for generated skeletons)
├── Structure.md            Repository structure description
├── package.json            Thin plugin shell (dsh bundle manifest)
├── cordis.patch.yml        Plugin shell registration (presets/ root)
└── LICENSE                 Apache-2.0
```

## License

[Apache-2.0](LICENSE)
