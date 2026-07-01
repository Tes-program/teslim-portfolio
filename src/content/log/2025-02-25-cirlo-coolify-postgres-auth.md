---
week: "W09"
date: 2025-02-25
---

Debugged a run of PostgreSQL auth failures on Cirlo's Coolify-hosted database — root cause was a hostname that didn't resolve correctly inside Coolify's networking rather than an actual credentials problem; fixed by connecting via the database's direct IP instead.
