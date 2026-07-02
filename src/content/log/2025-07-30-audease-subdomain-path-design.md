---
week: "W31"
date: 2025-07-30
---

Designed the full per-school subdomain path for Audease (`schoolname.audease.co.uk`): subdomain generated at school-registration time, DNS record via GCP Cloud DNS, Cloud Run domain mapping per subdomain, and a frontend contract documenting how login behaves differently on the base domain (redirects to the school's subdomain) vs. the school's own subdomain (shorter username, school context implicit).
