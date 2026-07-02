---
week: "W26"
date: 2025-06-23
---

Fixed a Crowdr NestJS route-param mismatch. A `@Get()` decorator missing `:userId` caused `undefined` to reach a custom `ParseObjectIdPipe`.
