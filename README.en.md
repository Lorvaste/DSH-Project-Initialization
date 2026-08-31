# DSH-Project Initialization

AI product-creation alignment plugin for DSH.

[中文](README.md)

![License](https://img.shields.io/badge/license-Apache--2.0-blue) ![DSH](https://img.shields.io/badge/dsh-agent--preset-ready-green) ![Platform](https://img.shields.io/badge/platform-DSH%20Desktop-blueviolet)

---

## What it is

When you build a product from scratch with AI, the result often drifts from what you originally had in mind.

This plugin addresses exactly that: a single scenario entry "Product Alignment" where the AI asks what you want clearly, writes it down as lists and structure, and confirms every item with you before moving on. Only what you confirmed moves forward; everything changed is recorded.

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

> See **[maintenance-docs/INSTALL.en.md](maintenance-docs/INSTALL.en.md)** for the full installation guide.

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

1. Create a new DSH session and pick "Product Alignment"
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
├── Rules.md                     Project rules
├── package.json / cordis.patch.yml / .gitignore / .gitattributes
└── Other/                       Other (internal, excluded: dsh-pjil / cs1 / Not public)
```

## License

[Apache-2.0](LICENSE)
