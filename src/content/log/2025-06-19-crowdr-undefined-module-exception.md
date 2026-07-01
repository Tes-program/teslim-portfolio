---
week: "W25"
date: 2025-06-19
---

Fixed a NestJS `UndefinedModuleException` on Crowdr caused by duplicate module imports in `PaymentsModule` — `CampaignsModule`, `DonorsModule`, and `UsersModule` were imported both directly and via `forwardRef()`, conflicting.
