---
week: "W20"
date: 2026-05-12
---

Fixed a recurring bug class on Baaraku: a global `/api` prefix mismatch causing 404s repeatedly across different endpoints, plus a public invoice page incorrectly requiring login in incognito because Next.js middleware was catching a route that should have been public.
