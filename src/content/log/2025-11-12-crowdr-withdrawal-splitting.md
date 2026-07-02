---
week: "W46"
date: 2025-11-12
---

Built automatic withdrawal splitting on Crowdr for amounts exceeding Paystack's 9,999,999 NGN single-transfer limit. Set up a parent/child withdrawal tracking structure that sequences multiple transfers with delays to avoid rate limiting, rather than just failing large withdrawal requests outright.
