---
week: "W29"
date: 2025-07-18
---

Diagnosed why an AI-generated "fetch real news with real links" prompt couldn't work as designed on RAIN. OpenAI's completions API can't browse the internet, so any prompt asking it to find and link real articles produces hallucinated URLs no matter how it's worded. Redirected toward actual web-search-backed retrieval instead of prompt engineering around a hard capability limit.
