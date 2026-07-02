---
week: "W17"
date: 2026-04-20
---

Gave an internal tech talk on observability, built directly from Crowdr's production Grafana dashboard. Used real findings as the talk's anchor (a `/campaigns` endpoint at 1.5s P95, a `/payments/initiate` conversion-risk latency, an 8,000%+ 5xx error spike, a flat 488ms `/settings/KYC` bottleneck suggesting a structural issue) instead of a generic observability primer.
