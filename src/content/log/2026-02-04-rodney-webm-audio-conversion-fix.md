---
week: "W06"
date: 2026-02-04
---

Fixed Rodney's STT demo audio-format issue at its actual root: browser `MediaRecorder` produces WebM, which neither Deepgram nor AssemblyAI could process directly. Converted WebM to 16kHz/16-bit/mono WAV via the Web Audio API to fix it properly.
