# Contributing

Thank you for considering contributing to **DSH-Project Initialization** (AI idea-to-project alignment plugin)!

[中文](CONTRIBUTING.md)

## What this project is

A DSH plugin, "Idea to Project": aligns every step of AI-built products with the user's idea.

- No scenario presets: the master skill is the entry; skills load on context (workspace state / user instruction / automatic trigger)
- 6 master skills (base / req / dev / mnt / common / rules) + verify dispatcher + 66 atomic sub-skills (73 in total)
- Templates: doc-templates 20 + rule-templates 8 (zh/en mirrored); skill details are zh-only

## Repository structure

```
├── core-library/presets/alignment/   "Idea to Project": agent.cordis.yml + 73 skills + templates zh/en
├── core-library/src/                 Thin plugin shell (syncs presets/ to .agent-presets at startup)
├── maintenance-docs/                 Maintenance docs (install/contribute/reference/rules/regression/audit)
├── AGENTS.md                         Root rules
├── structure.md                      Global directory
├── package.json                      dsh bundle manifest
└── cordis.patch.yml                  Plugin shell registration
```

## Development conventions

### Rule priority

User decision > AGENTS.md (root rules) > domain rules > rules (skill rules)

### Rule highlights

- Every operation: state understanding, user confirms, then execute
- Confirmation binding: confirmation = explicit reply to the currently requested numbered item (returned content / context wording / silence ≠ confirmation)
- Operation grading L0-L4: check authorization scope before executing; forbidden zones rejected, high-risk operations need a separate request, dry-run first
- Role-play assumptions: declare assumptions before role-play; role-play assumption ≠ fact; no sycophancy, no context pandering
- Phase advancement by user; no "assumed completion"; remind whether to run traversal checks before advancing
- Verify first, no assumptions; no hypothetical conclusions; verify causality and premises before answering/asking
- Requirement docs: summary lists/structures only, no references, no decision info, clean and concise
- Docs = initial baseline, never locked
- zh/en dual version (zh primary / en mirror; skill details zh-only)

### Notes when changing skills

- Structure definition: plugin implementation lives in core-library/presets/alignment; generated-project structure in maintenance-docs/Reference/project-structure.md
- Atomicity discipline: one function point = one atomic sub-skill (66 points F01-F66); master-skill aggregate lists must match sub-skill directories
- Verification units (verify-*) are combined by the verify dispatcher; rule families (confirmation binding / operation grading / role-play assumptions / causal verification / stage-advance check) land in core skills (common/item-confirm/verify) and AGENTS.md.tpl
- Template & rule sync: when rules change, check doc-templates / rule-templates (zh/en)
- Templates generate into user projects — change carefully
- No literal `\n`; no leftover placeholders

### Git conventions

- Branch: `main`, no long-lived parallel branches
- Commits: Conventional Commits (type ∈ feat/fix/docs/chore/refactor/test/style/build/perf)
- One commit per milestone
- Line endings: LF (configured in .gitattributes, do not change)

## Non-public content

`Other/` holds internal docs (e.g., the glossary.md terminology dictionary); it is **not committed** (.gitignore covers it) and is for local use only.

## Pre-PR checklist

- [ ] Changes follow the rule priority chain
- [ ] Skill rules consistent with the implementation (core-library/presets/alignment/skills)
- [ ] Master-skill aggregate lists match sub-skill directories
- [ ] Templates & rules synced (zh/en)
- [ ] No literal `\n`, no leftover placeholders
- [ ] Docs updated (README / structure / user-manual as applicable)
- [ ] Commit message follows Conventional Commits

## Release

Releases go through GitHub Release (tag `vX.Y.Z`). Before release:

- Confirm the "Idea to Project" preset loads in DSH (new session → scenario picker)
- Confirm on-demand skill loading works (no global skill leakage)
- Update outdated statements in INSTALL.md / README / CHANGELOG.md
