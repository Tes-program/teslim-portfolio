---
week: "W18"
date: 2026-04-28
---

CareRound's review surfaced real findings, not nitpicks: a multi-tenancy security flaw in `HospitalController` letting any tenant ADMIN enumerate all hospitals across tenants; a hardcoded JWT secret in `application-dev.yml`; a medication-chart bug setting discontinued tasks to `OVERDUE` instead of a proper terminal `DISCONTINUED` status; a missing Kafka consumer for user-activation events; topic-name mismatches between `kafka-init` and application config; and no CI trigger configured on pull requests.
