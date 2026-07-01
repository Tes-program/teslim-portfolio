---
week: "W43"
date: 2024-10-21
---

Fixed a production incident: the mailing service threw "Template not found" after deploy — root cause was HTML template path resolution breaking between dev and prod (`process.cwd()` behaving differently, template folder not included in the build output). Fixed the path resolution and the build process to include the template directory.
