---
week: "W19"
date: 2026-05-04
---

Deployed CareRound for the actual demo: EC2 + Docker Compose, a free DuckDNS subdomain with Certbot-issued SSL. Also fixed a genuinely tricky mixed-content bug where the AI service was being reached via `localhost` (resolving to the container itself) instead of its actual separate EC2 host, fixed by explicitly passing the AI service URL through the compose environment.
