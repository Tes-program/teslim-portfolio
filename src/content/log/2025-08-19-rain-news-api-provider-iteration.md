---
week: "W34"
date: 2025-08-19
---

Iterated through several external news API providers as sources of ground truth for RAIN (NewsAPI, SerpAPI, Google Custom Search, ApiTube, GNews, Currents). Each hit a real limitation (restrictive rate limits, wrong parameter formats, timeouts) before landing on a unified service with fallback across providers and 30-second timeouts with retry/backoff.
