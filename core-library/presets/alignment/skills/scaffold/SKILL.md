---
name: scaffold
description: 生成通用骨架（9+2 项，逐项确认）。git 就绪后使用。
---

# scaffold（F53）

- 通用骨架：README / LICENSE / AGENTS / structure / Progress / plan / Other / .gitignore / .gitattributes（逐项确认）
- 模板：doc-templates/ + rule-templates/（zh/en 按语言偏好）
- 未选协议（LICENSE）则跳过并显式记录
- 文档名只用英文
- 未确认项不生成（复用逐条确认，见 scaffold-confirm）
