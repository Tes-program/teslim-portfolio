---
week: "W16"
date: 2026-04-15
---

Ran a full dependency audit on Crowdr: multer 1.x carrying active CVEs (upgraded to 2.x), NestJS CLI/schematics mismatched against the framework version, Node types pinned to v20 despite running Node 22, and a `start:dev` script bug that was setting `NODE_ENV=production` in development.
