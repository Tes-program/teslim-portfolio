---
week: "W16"
date: 2026-04-16
---

Built out CI/CD and observability for Crowdr from scratch: GitHub Actions pipelines, Husky pre-push hooks, Grafana Cloud integration that required real debugging (the `prometheus-remote-write` library failed on a missing dependency, then a Protobuf+Snappy encoding mismatch, fixed by switching to `protobufjs` + `snappy` directly with Node 22's native fetch), and three real Grafana dashboards (API Health, Business Metrics, Node.js Runtime) with alerting.
