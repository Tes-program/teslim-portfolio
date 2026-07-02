---
week: "W13"
date: 2026-03-25
---

Made deliberate Baaraku architecture decisions rather than defaulting into them: shared-schema multi-tenancy with `tenantId` on every table, subdomain-ready middleware from day one, a config-driven commission model supporting markup/flat-fee/both per client contract, and a three-tier time-tracking system (`time_sessions`, `time_segments`, `activity_heartbeats`) feeding a unified heartbeat API with per-client validation strictness levels.
