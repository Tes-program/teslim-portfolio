---
week: "W33"
date: 2025-08-15
---

Built out withdrawable-amount calculations across Crowdr's `my-campaigns/summary` and `admin/withdrawals/:id` endpoints, added date-range filtering, and added a user-deletion endpoint (soft delete vs. hard delete, with safety checks blocking deletion of users with active campaigns or pending withdrawals).
