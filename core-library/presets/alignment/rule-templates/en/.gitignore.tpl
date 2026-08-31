# .gitignore — Rule Template Definition

## Optional Rules

- [required] Secrets & credentials: .env / *.pem / *.key / *.pfx / *.p12 / *.jks / credentials* / id_rsa / id_ed25519
- [required] Build & dependency artifacts: node_modules / dist / build / *.tgz
- [optional] Internal directories: Other/ etc. (whole-directory exclusion, carries on the v1.0.2 verification-issues.md fix)
- [optional] Editors & system files: .vscode / .idea / .DS_Store / Thumbs.db
- [optional] Local environment: *.local / .hmr

## Rule Content

- Exclusion entries (grouped per optional rules list)

## Rule Expression

- gitignore syntax
- Comment groups with clear names
- No extra notes
