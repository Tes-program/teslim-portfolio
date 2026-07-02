---
week: "W15"
date: 2026-04-07
---

CareRound's capstone architecture was fully locked by this point: careround-core (Spring Boot 3.4), careround-notification, careround-audit as separate services, careround-ai (FastAPI + Whisper + a medical LLM), Kafka with four topic families, a Quartz JDBC-clustered scheduler implementing the Transactional Outbox Pattern, Redis, three isolated MySQL schemas per tenant, and Prometheus/Grafana observability.
