---
week: "W17"
date: 2026-04-23
---

Built a proper admin system for RAIN in response to the evaluation findings, rather than just patching the one wrong fact: a `ContextBlock` schema with categories, full CRUD, and a `PromptAssemblyService` that builds the live system prompt from active database blocks at request time, so platform facts can be corrected without a redeploy. Also shipped a separate Next.js admin app with a prompt-preview page showing the exact assembled prompt and token count.
