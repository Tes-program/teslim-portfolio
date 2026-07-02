---
week: "W38"
date: 2025-09-17
---

Added a proper form-submission-status enum (submitted / pending / not_started) to Audease's student list endpoint, implemented via an efficient raw-SQL subquery rather than loading full relations.
