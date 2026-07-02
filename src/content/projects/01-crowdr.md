---
title: "Crowdr — Recurring Donations Engine"
hash: "a3f1c2e"
context: "Crowdr"
dateRange: "2025–2026"
tags: ["NestJS", "MongoDB", "BullMQ", "Redis", "Payments", "Paystack", "BudPay", "Fraud detection"]
featured: true
order: 1
---

Primary backend engineer on a crowdfunding platform. Rebuilt recurring billing from a single cron sweep into a delayed-job model where each donation gets its own scheduled charge, which made retries a lot easier to reason about. Also shipped guest donor magic-link auth, fraud/IP behavioral tracking, and a campaign flagging system.
