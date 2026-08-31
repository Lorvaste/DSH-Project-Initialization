# AGENTS.md — Rule Template Definition

## Optional Rules

- [required] Priority chain: user decision > AGENTS.md > domain rules > scenario rules
- [required] Operation confirmation: state understanding, user confirms, then execute
- [required] User authority: silence ≠ consent; changes recorded; phase advancement by user
- [required] Truthfulness: verify first, no assumptions; no hypothetical conclusions
- [required] Language & naming: English filenames; zh/en mirror
- [optional] Adjudication flow: conflict → record → user adjudicates → update rules
- [optional] Glossary: unified terminology table
- [optional] Requirement doc cleanliness: summary only; no references; no decision info
- [optional] Evidence mechanism: conclusions with evidence; red-flag words trigger confirmation
- [optional] Persist-on-write: persistence frequency
- [optional] Verification validity: impact recheck; red-green verification
- [optional] Failure rollback: fix → recheck → confirmation
- [optional] Delete/move protection: confirm first; record original path → new path → reason
- [optional] Anti-drift red flags: rationalization → replacement

## Rule Content

- Root rule items (expanded per optional rules list)
- Each item: trigger → behavior (short item)
- Prohibitions listed separately

## Rule Expression

- Short itemized sentences, verb-first
- No rule numbering
- No decision info or references
- Behavior/prohibition pairs
