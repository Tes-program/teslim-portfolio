---
week: "W30"
date: 2025-07-21
---

Rebuilt RAIN's image pipeline from "fallback stock photos when generation fails" to an all-or-nothing approach. Every one of the 12 daily news items now gets a Replicate-generated (Flux Schnell) contextual image, with no stock-photo fallback path at all, after stakeholder feedback that out-of-context stock images were worse than guaranteeing real generation for every item.
