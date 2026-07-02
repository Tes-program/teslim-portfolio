---
week: "W30"
date: 2025-07-24
---

Resolved a DigitalOcean managed Postgres connection timeout for the RAIN database. Came down to IP whitelist restrictions, confirmed via `telnet` timing out at the network level rather than getting refused at the Postgres level.
