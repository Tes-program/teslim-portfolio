---
week: "W34"
date: 2024-08-19
---

Refactored a `RolesGuard` to a `PermissionsGuard` on the Audease codebase — moved from "any of these roles" to "all of these permissions" (`some()` → `every()`).
