---
week: "W09"
date: 2025-02-25
---

Debugged a run of PostgreSQL auth failures on Cirlo's Coolify-hosted database. Root cause turned out to be a hostname that didn't resolve correctly inside Coolify's networking, not an actual credentials problem. Fixed by connecting via the database's direct IP instead.
