---
week: "W31"
date: 2025-07-31
---

Hit and resolved a chain of infra problems on Audease's subdomain rollout: a nameserver mismatch (the domain registrar turned out to be Squarespace, not Google Domains), `gcloud run domain-mappings create` rejecting a `--region` flag that doesn't exist for that command, and wildcard domain mappings (`*.audease.co.uk`) not being supported directly by Cloud Run.
