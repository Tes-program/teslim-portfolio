---
week: "W05"
date: 2026-01-28
---

Designed and built a proper double-entry ledger system for Crowdr (donations, withdrawals, refunds, service fees, transaction fees as the five entry types) as the actual foundation for a Paystack refund service. It came out of discovering the existing revenue-calculation logic double-counted service charges in a way that happened to produce correct numbers today but would break the moment refunds were introduced. Included a migration to backfill the ledger from existing transaction history.
