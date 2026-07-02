---
week: "W03"
date: 2026-01-12
---

Diagnosed a full KYC system outage on Crowdr: `CastError` on every KYC-related endpoint traced to corrupted records with empty strings stored where MongoDB ObjectIds were expected in image fields. Shipped both an emergency cleanup (direct deletion of corrupted records) and root-cause prevention (request sanitization middleware, DTO-level validation).
