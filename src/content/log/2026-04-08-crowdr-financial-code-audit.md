---
week: "W15"
date: 2026-04-08
---

Ran a systematic financial-code audit across Crowdr's core money-handling services (financial-engine, withdrawals, transfer, refund, bulk-refund, payments) and found real issues pre-emptively: a partial-refund fee bug calculating fees as a flat percentage of the refund amount instead of proportionally against the original fee; a race condition with missing MongoDB transaction wrapping; a TOCTOU vulnerability needing a unique compound index; `handleSuccessfulTransfer` fetching the most recent withdrawal by recency instead of by transfer ID; and a commented-out duplicate-withdrawal guard.
