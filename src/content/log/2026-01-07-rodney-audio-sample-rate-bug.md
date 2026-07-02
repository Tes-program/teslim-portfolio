---
week: "W02"
date: 2026-01-07
---

Diagnosed a subtle audio-quality bug on Rodney close to a client demo deadline. STT was failing in live sessions despite both providers working fine in isolation; root cause was a sample-rate mismatch (LiveKit outputs 48kHz, the STT providers expected 16kHz) plus a missing WAV header for AssemblyAI. Fixed with proper resampling and improved voice-activity detection thresholds.
