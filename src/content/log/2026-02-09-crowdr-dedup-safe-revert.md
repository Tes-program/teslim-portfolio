---
week: "W07"
date: 2026-02-09
---

After evaluating in-place fixes, made the call to fully revert Crowdr's withdrawal deduplication rather than patch around it. Restored withdrawal statuses from `duplicate_removed` back to `approved` and recreated deleted ledger entries, using the original deduplication report as the source of truth for what to undo. Built with dry-run mode and full logging before touching production data again.
