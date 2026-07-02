---
week: "W34"
date: 2025-08-21
---

Added real filtering to RAIN to reject category/archive pages (URL pattern detection, domain-specific blocklists, date-pattern/article-ID validation) after discovering the pipeline was serving pages like `cushmanwakefield.com/insights` as if they were individual articles.
