---
week: "W32"
date: 2024-08-05
---

Debugged a `ForbiddenException` on a NestJS guard that was checking business ownership from GraphQL variables — turned out the frontend wasn't sending the business ID the guard expected.
