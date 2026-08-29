# Contributing

Thank you for considering contributing to **DSH-Project Initialization** (the AI product-creation alignment plugin)!

[中文](CONTRIBUTING.md)

## What this project is

A DSH plugin with two agent preset scenarios that align every step of AI-built products with the user's original idea.

| Scenario | preset id | Responsibility |
|---|---|---|
| From scratch | `from-scratch` | Idea → six-step Q&A → spec freeze → spec/tasks drafts → push |
| Wait, let me confirm first | `confirm-first` | Finalize an initial plan / change the plan and goals of an in-progress project |

## Repository structure

```
├── presets/                Plugin body (agent presets)
│   ├── from-scratch/       Scenario 1: agent.cordis.yml + 4 skills + assets templates
│   └── confirm-first/      Scenario 2: agent.cordis.yml + polish skill
├── Reference/
│   └── project-structure.md   Project structure specification reference
├── Rules.md                Project rules (master template for generated skeletons)
├── INSTALL.md / INSTALL.en.md   Installation guides
├── src/                    Thin plugin shell (syncs presets/ into .agent-presets at startup)
├── package.json            dsh bundle manifest
└── cordis.patch.yml        Plugin shell registration
```

## Development conventions

### Rule priority (arbitration chain, first match wins on conflict)

1. Explicit user instruction
2. Project Rules.md
3. Domain rules (in domain skeletons)
4. Scenario skill instructions
5. Rules.md defaults

### Flow & state machine

Scenario 1 state machine: workspace → git-init → git-remote → scaffold → interview → freeze → spec-final → task-breakdown → docs-push → done.

- Every stage has a **gate**: you may not enter the next stage until the current stage's checks pass
- Any state may be rolled back; products written after a rollback target are marked "invalid, to be rewritten" and recorded in Progress.md
- State is written to Progress.md (resumable after interruption)

### When modifying skills

- **Skill self-containment**: confirm-first's polish skill must be fully self-contained (must not depend on from-scratch skills); from-scratch's 4 skills chain into each other (scaffold→interview→freeze→task-split)
- **Template & rules sync**: `presets/from-scratch/assets/*.tpl` are the default skeleton templates, and `Rules.md` chapter 4 defines the skeleton generation rules — when changing rules, check whether templates need syncing; templates are generated into user projects, so change them carefully
- **Placeholder semantics**: `{{KEY}}` substitution; `{{#KEY}}...{{/KEY}}` conditional blocks (render only when KEY is non-empty; hide the whole block when empty). Never fill a conditional block with the literal "pending" (a truthy value renders wrong content)
- **Markdown hygiene**: never mix literal `\n` into tables/lists (historical lesson: it once corrupted template rendering)

### git conventions

- Branch: `main`, no long-lived parallel branches
- Commits: Conventional Commits (`<type>(<scope>): <subject>`, type ∈ feat/fix/docs/chore/refactor/test/style/build/perf)
- One milestone, one commit (e.g., skeleton, spec freeze, task breakdown)
- Line endings: LF everywhere (.gitattributes is configured; don't change it)

## Non-public content

The `Not public/` directory holds internal documents (development plans / progress / interview records / dev-time scripts). It is **not committed** with the repo (ignored by .gitignore) and is for local maintenance only. Don't include it in public-repo submissions.

## Before opening a PR

- [ ] Change follows the rule priority chain
- [ ] Skill self-containment (confirm-first) / skill chaining complete (from-scratch)
- [ ] Templates synced with Rules.md (when skeleton generation is affected)
- [ ] No literal `\n`, no leftover placeholders
- [ ] Docs updated where relevant (README / INSTALL / Structure)
- [ ] Commit message follows Conventional Commits

## Releasing

Releases go through GitHub Releases (tag `vX.Y.Z`). Before releasing:

- Confirm both scenarios load in DSH (new session → scenario picker)
- Confirm skill isolation works (no global skill leak)
- Update any outdated statements in INSTALL.md / README
