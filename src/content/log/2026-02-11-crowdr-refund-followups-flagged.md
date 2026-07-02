---
week: "W07"
date: 2026-02-11
---

Found and flagged (not yet fixed) that Crowdr's refund processing wasn't updating donor records (`isRefunded`, `refundAmount`, `refundedAt`) despite the actual Paystack refund succeeding, and that campaign payable-amount calculations on public endpoints weren't refund-aware yet, both queued as follow-up work with specific prompts rather than left implicit.
