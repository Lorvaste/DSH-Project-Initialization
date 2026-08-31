# Contributing

Thank you for considering contributing to **DSH-Project Initialization** (AI idea-to-project alignment plugin)!

[中文](CONTRIBUTING.md)

## What this project is

A DSH plugin: single scenario entry "Idea to Project" that aligns every step of AI-built products with the user's idea.

- Scenarios (= minimal function presets): requirement establishment / pre-development / maintenance
- Functional skills (10): qa / confirm / integrate / organize / unify-terms / verify / change / regress / maintain / token-compress
- Skills load on context, invocable standalone; the plugin can be invoked by other scenarios

## Repository structure

```
├── core-library/presets/alignment/   Single entry: agent.cordis.yml + 12 skills + templates zh/en
├── core-library/src/                 Thin plugin shell (syncs presets/ to .agent-presets at startup)
├── maintenance-docs/                 Maintenance docs (install/contribute/reference/rules/regression/audit)
├── AGENTS.md                         Root rules
├── structure.md                      Global directory
├── package.json                      dsh bundle manifest
└── cordis.patch.yml                  Plugin shell registration
```

## Development conventions

### Rule priority

User decision > AGENTS.md (root rules) > domain rules > scenario rules

### Rule highlights

- Every operation: state understanding, user confirms, then execute
- Phase advancement by user; no "assumed completion"
- Verify first, no assumptions; no hypothetical conclusions
- Requirement docs: summary lists/structures only, no references, no decision info, clean and concise
- Docs = initial baseline, never locked
- zh/en dual version (zh primary / en mirror)

### Notes when changing skills

- New design definitions live in Other/cs1/ (mod1.md is authoritative)
- Template & rule sync: when rules change, check doc-templates / rule-templates (zh/en)
- Templates generate into user projects — change carefully
- No literal `\n`; no leftover placeholders

### Git conventions

- Branch: `main`, no long-lived parallel branches
- Commits: Conventional Commits (type ∈ feat/fix/docs/chore/refactor/test/style/build/perf)
- One commit per milestone
- Line endings: LF (configured in .gitattributes, do not change)

## Non-public content

`Other/` (dsh-pjil / cs1 / Not public) holds internal docs and the derivation workspace; it is **not committed** (.gitignore covers it) and is for local use only.

## Pre-PR checklist

- [ ] Changes follow the rule priority chain
- [ ] Skill rules consistent with the mod1 definition
- [ ] Templates & rules synced (zh/en)
- [ ] No literal `\n`, no leftover placeholders
- [ ] Docs updated (README / structure / user-manual as applicable)
- [ ] Commit message follows Conventional Commits

## Release

Releases go through GitHub Release (tag `vX.Y.Z`). Before release:

- Confirm the "Idea to Project" scenario loads in DSH (new session → scenario picker)
- Confirm on-demand skill loading works (no global skill leakage)
- Update outdated statements in INSTALL.md / README / CHANGELOG.md
