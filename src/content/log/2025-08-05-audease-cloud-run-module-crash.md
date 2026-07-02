---
week: "W32"
date: 2025-08-05
---

Diagnosed a production module-loading crash (`Cannot find module dist/main.js`) on a Cloud Run deployment. Traced it to a Dockerfile build stage silently failing to produce output, fixed with an explicit `RUN ls -la dist/` verification step in the build.
