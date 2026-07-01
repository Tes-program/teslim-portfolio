---
week: "W25"
date: 2025-06-16
---

Diagnosed a Redis "max clients reached" crash on Cirlo's Render staging — Bull queues, the cache manager, and Bull Board were each opening separate Redis connections without pooling limits.
