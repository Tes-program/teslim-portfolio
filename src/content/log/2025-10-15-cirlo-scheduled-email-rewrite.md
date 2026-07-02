---
week: "W42"
date: 2025-10-15
---

Rebuilt Cirlo's email scheduling as a single `ScheduledEmail` entity as the source of truth, with one cron job processing pending sends every 5 minutes instead of duplicate scheduling paths, unique constraints preventing duplicate sends at the database level, and admin endpoints for monitoring what's queued.
