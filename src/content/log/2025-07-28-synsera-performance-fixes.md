---
week: "W31"
date: 2025-07-28
---

Fixed real performance problems on Synsera after they became reports, not hypothetical concerns: page memory usage at 800MB-1GB, scrolling reported as "terrible," and glitching hero text. Traced to multiple infinite CSS/JS animation loops running simultaneously, an unoptimized Lenis smooth-scroll config, and a complex gradient-flow text animation causing flicker. Fixed with minimal, targeted animation changes rather than ripping out the creative direction.
