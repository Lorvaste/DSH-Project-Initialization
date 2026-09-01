# DSH-Project Initialization

AI idea-to-project alignment plugin for DSH.

[中文](README.md)

![License](https://img.shields.io/badge/license-Apache--2.0-blue) ![DSH](https://img.shields.io/badge/dsh-agent--preset-ready-green) ![Platform](https://img.shields.io/badge/platform-DSH%20Desktop-blueviolet)

---

## Project Overview

Have you ever had an idea that never quite became a project? In the AI era, do you still find yourself spending too much time on repetitive groundwork instead of actual creation?

Built for independent creators, this plugin turns a vague idea into clear requirements through continuous Q&A via a single scenario entry and scenario presets: requirement establishment refines and integrates the idea, pre-development argues the tech route from the requirements, maintenance keeps everything aligned with regression — ending in a reusable project structure document, with every step traceable and revisable.

It is more than an initialization tool — it is a way to form a creative habit: every operation states its understanding first and waits for your confirmation; phase advancement is yours to decide; requirement documents keep only clean, concise lists and structures, never locked. Especially for creators starting from zero, structured guidance clears the path and lowers the barrier to start — so every idea gets a chance to grow into a complete project.

## Scenarios (= minimal function presets)

| Scenario | Focus |
|---|---|
| Requirement establishment | Requirement collection & design (refine and supplement ideas) + confirmation (with integration node) + specification |
| Pre-development | Tech selection & tech design (argued on requirement tier); dev class provides templates only (dev approach is user-defined) |
| Maintenance | Doc re-orchestration (first) + maintenance init + change management + regression |

Scenarios and functional skills are fully separated: skills load on context; every skill can be invoked standalone; the plugin can be invoked on demand by other scenarios.

## Functional skills (10)

qa (unified Q&A, two modes) | confirm | integrate (behavior, no document) | organize (spec + re-orchestrate) | unify-terms | verify | change | regress | maintain | token-compress (inactive during requirement establishment)

## Quick start

### Install

> See **[maintenance-docs/INSTALL.en.md](maintenance-docs/INSTALL.en.md)** for the full installation guide (inside the GitHub repo; maintenance docs are not shipped in the npm package).

**Option 1: Manual copy (zero build)**

```powershell
# Delete first, then copy, to avoid nesting
Remove-Item "$env:APPDATA\dsh-desktop\harness\.agent-presets\alignment" -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item core-library\presets\alignment "$env:APPDATA\dsh-desktop\harness\.agent-presets\" -Recurse
```

> The actual `.agent-presets` path follows the `<dshHome>` of your DSH installation.

**Option 2: Plugin market**

After installing the plugin package, the host syncs the bundled `presets/` into `.agent-presets` at startup (idempotent); the scenario appears in the list automatically.

### Use

1. Create a new DSH session and pick "Idea to Project"
2. Advance by context: requirement establishment → pre-development → maintenance (at every stage the AI restates first, you confirm, then it proceeds)

## Rule highlights

- Every operation: state understanding, user confirms, then execute
- Phase advancement by user; no "assumed completion"
- Silence ≠ consent; changes recorded explicitly
- Verify first, no assumptions; no hypothetical conclusions
- Requirement docs: summary lists/structures only, no references, no decision info, clean and concise
- Docs = initial baseline, never locked
- zh/en dual version (zh primary / en mirror)

## Repository structure (maintenance-scenario layout)

```
├── core-library/                Core library
│   ├── presets/alignment/       Single entry (agent.cordis.yml + 12 skills + templates zh/en)
│   └── src/                     Plugin shell code (presets sync)
├── maintenance-docs/            Maintenance docs (install/contribute/reference/rules/regression/audit)
├── user-manual.md               User manual
├── CHANGELOG.md                 Version & update record
├── AGENTS.md                    Root rules
├── structure.md                 Global directory
├── README.md / README.en.md     Readme
├── LICENSE                      Apache-2.0
├── package.json / cordis.patch.yml / .gitignore / .gitattributes
└── Other/                       Other (internal, excluded)
```

## License

[Apache-2.0](LICENSE)
