---
week: "W07"
date: 2026-02-13
---

RAIN's ₦0-portfolio bug (fixed once already in early February) recurred in a new form: a user with ₦3,000,000 in active investments got a ₦0 response. Traced to the same underlying pattern, a SQL status filter ('approved') not matching the database's actual status values. Second time this exact status-mismatch bug class has hit the portfolio-value query.
