---
week: "W40"
date: 2025-10-01
---

Added real-time web search to RAIN's Islamic finance chatbot within the existing $10/month budget constraint. Initially attempted via OpenAI's `gpt-4o-search-preview`, hit an API incompatibility (that model rejects a `temperature` parameter other code paths assumed was always safe to pass), then found OpenAI's actual documented parameter (`web_search_options`) before shipping the fix.
