---
week: "W20"
date: 2026-05-13
---

Found a live RAIN/Akhi failure with real money on the line: an authenticated user with an active ₦1,000,000 investment (with a real upcoming ₦51,750 profit payment) was told they had no active investments. Three compounding causes: a hardcoded false claim in the system prompt ("all issuances have closed"), a profit-calculation query only summing one year of returns instead of all scheduled redemptions, and the bot conflating "issuance closed to new bids" with "your investment is complete."
