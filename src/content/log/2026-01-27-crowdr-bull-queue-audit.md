---
week: "W05"
date: 2026-01-27
---

Audited Crowdr's Bull queue infrastructure after noticing the dashboard was publicly exposed, and found the exposure was the least of it: the media queue had a 79.6% failure rate (1,473 of 1,851 jobs failing), and the campaign-views queue had ballooned to 588,789 jobs with no cleanup configuration. Flagged as an immediate priority list: secure the dashboard, add job cleanup config, fix the media upload failure rate, add real monitoring.
