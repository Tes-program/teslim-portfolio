---
week: "W37"
date: 2025-09-10
---

Fixed a real architectural bug on RAIN: multiple services were each creating their own database connection pool, and only one had correct SSL config for the DigitalOcean-managed Postgres instance. Consolidated to a single shared `EnhancedDatabaseService` instance instead of duplicated pools.
