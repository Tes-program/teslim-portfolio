---
week: "W41"
date: 2025-10-06
---

Worked through a chain of test-harness bugs for the credential-verification gas-optimization testing: a MongoDB connection lifecycle bug (operations timing out because connections weren't properly opened/closed around test runs), then a 401 from a placeholder auth token instead of a real institution-scoped JWT, then a 404 from a batch credential endpoint that didn't exist yet and had to be built.
