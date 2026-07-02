---
week: "W36"
date: 2025-09-02
---

Fixed a real SSL bug on Crowdr's DigitalOcean-hosted Postgres connection: the connection string's `sslmode=require` was conflicting with programmatic SSL config in the `Pool` constructor. Resolved by settling on one source of truth: `rejectUnauthorized: false` in code, mode stripped from the string.
