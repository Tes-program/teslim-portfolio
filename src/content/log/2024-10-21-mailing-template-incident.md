---
week: "W43"
date: 2024-10-21
---

Fixed a production incident where the mailing service threw "Template not found" after deploy. Root cause was HTML template path resolution breaking between dev and prod (`process.cwd()` behaving differently, template folder not included in the build output) — fixed the path resolution and updated the build process to include the template directory.
