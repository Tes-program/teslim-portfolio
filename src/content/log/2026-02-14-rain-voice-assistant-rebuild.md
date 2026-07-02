---
week: "W07"
date: 2026-02-14
---

Rebuilt RAIN's voice assistant after direct CTO pushback on quality: the original Deepgram-based STT/TTS implementation struggled specifically with Nigerian accents. Evaluated the actual tradeoff rather than defaulting to the most expensive option (ElevenLabs, ~20x cost) and landed on OpenAI Whisper (STT) + TTS-1 with the Onyx voice. Better accent handling than Deepgram, far cheaper than ElevenLabs, with the Islamic-finance domain-term corrections (Mudarabah, Musharakah, Sukuk) and Nigerian currency handling carried over from the original build.
