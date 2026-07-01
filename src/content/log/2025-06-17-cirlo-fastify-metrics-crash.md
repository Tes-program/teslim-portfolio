---
week: "W25"
date: 2025-06-17
---

Fixed a Prometheus metrics endpoint crash on Cirlo after a Fastify migration — the code still called Express's `res.set()`, which doesn't exist on Fastify's reply object.
