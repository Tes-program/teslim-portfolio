---
week: "W02"
date: 2026-01-05
---

Fought through Rodney's LiveKit integration: async/sync bridging issues between Flask's synchronous nature and LiveKit's async requirements (tried `ThreadPoolExecutor`, then `nest_asyncio`), a `gevent`/`asyncio` conflict causing indefinite hangs, LiveKit auth expecting JWT Bearer tokens rather than the Basic auth initially assumed, event handlers needing to be sync functions that launch async tasks rather than async themselves, and an audio pipeline bug where LiveKit's `AudioStream` yields wrapper `AudioFrameEvent` objects rather than raw frames.
