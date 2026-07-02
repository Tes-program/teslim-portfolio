---
week: "W06"
date: 2026-02-08
---

Found that Crowdr's February deduplication script, which cleaned up duplicate withdrawal records, had a downstream bug: withdrawal-calculation logic wasn't updated to account for the new `duplicate_removed` status consistently, so some duplicate records still held real withdrawal amounts and were sometimes counted, sometimes not. Result: campaigns showed wildly wrong withdrawable balances in both directions (one test campaign showed ₦1,425 available instead of the correct ₦450).
