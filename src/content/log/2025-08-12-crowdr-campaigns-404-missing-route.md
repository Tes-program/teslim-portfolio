---
week: "W33"
date: 2025-08-12
---

Fixed a full production 404 on `GET /campaigns` on Crowdr. The route handler itself was simply missing from the controller, despite the service layer supporting it and auth middleware already excluding the path for public access.
