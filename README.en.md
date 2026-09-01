# DSH-Project Initialization

AI idea-to-project alignment plugin for DSH.

[中文](README.md)

![License](https://img.shields.io/badge/license-Apache--2.0-blue) ![DSH](https://img.shields.io/badge/dsh-agent--preset-ready-green) ![Platform](https://img.shields.io/badge/platform-DSH%20Desktop-blueviolet)

---

## Project Overview

Have you ever had an idea that never quite became a project? In the AI era, do you still find yourself spending too much time on repetitive groundwork instead of actual creation?

Built for independent creators, this plugin turns a vague idea into clear requirements, a tech route and a maintenance baseline through continuous Q&A — ending in a reusable project structure document, with every step traceable and revisable.

It is more than an initialization tool — it is a way to form a creative habit: every operation states its understanding first and waits for your confirmation; phase advancement is yours to decide; requirement documents keep only clean, concise lists and structures, never locked. Especially for creators starting from zero, structured guidance clears the path and lowers the barrier to start — so every idea gets a chance to grow into a complete project.

## Feature structure (v1.1: master skills + atomic sub-skills)

No scenario presets — the master skill is the entry; skills load on context (workspace state / user instruction / automatic trigger), and every skill can be invoked standalone.

**6 master skills** (rules + aggregate list + dispatch):

| Master skill | Focus |
|---|---|
| base | Project init (git init/identity/remote + scaffold) |
| req | Requirement establishment (collect/analyze/integrate/specify) |
| dev | Pre-development (argue/tech select/similarity & compliance research) |
| mnt | Maintenance (re-orchestrate/change/regress/init/release/feedback) |
| common | Cross-stage general (confirm/verify dispatch/token/cleanup/QA templates) |
| rules | Rules & terminology (term check/conflict/adjudicate/sync + glossary template) |

**67 atomic sub-skills**: split by "one function point = one atomic sub-skill" (e.g., item-confirm confirmation binding, verify-3layer three-layer traversal, release-build packaging), single responsibility, short, standalone-invocable; verification units (F28-F34) are combined and dispatched by the verify dispatcher.

**Templates**: doc-templates 20 + rule-templates 8 (zh/en mirrored).

## Rule highlights

- Every operation: state understanding, user confirms, then execute
- **Confirmation binding**: confirmation = explicit reply to the currently requested numbered item; returned content / context wording / silence are not confirmation
- **Operation grading L0-L4**: check authorization scope before executing; forbidden zones rejected, high-risk operations need a separate request, dry-run first
- **Role-play assumptions**: declare assumptions before role-play; role-play assumption ≠ fact; respect objective facts, no sycophancy, no context pandering
- **Causal & logical fact verification**: verify causality and premises before answering/asking
- Phase advancement by user; no "assumed completion"; remind whether to run traversal checks before advancing
- Silence ≠ consent; changes recorded explicitly; verify first, no assumptions
- Requirement docs: summary lists/structures only, no references, no decision info, clean and concise
- Docs = initial baseline, never locked; zh/en dual version (zh primary / en mirror; skill details are zh-only)

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
2. Advance by context (the AI restates first, you confirm, then it proceeds): submit idea → requirement establishment → tech selection → maintenance
3. Skills load automatically by context (draft submitted → req master; selection request → dev master; check request → verify dispatch)

## Repository structure

```
├── core-library/                Core library
│   ├── presets/alignment/       "Idea to Project" preset (agent.cordis.yml + 73 skills + templates zh/en)
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
