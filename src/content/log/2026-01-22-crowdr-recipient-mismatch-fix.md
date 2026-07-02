---
week: "W04"
date: 2026-01-22
---

Ran a verification script comparing Crowdr's MongoDB records against Paystack's actual recipient data and found 40 mismatched recipients: real accounts where money could have misrouted. Fixed with an atomic replace-recipient flow (create new recipient first, verify, then delete old, with automatic rollback on failure), since Paystack's own update endpoint only allows changing name/email, not the account number itself.
