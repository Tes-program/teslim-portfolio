---
week: "W47"
date: 2025-11-20
---

Added document upload/analysis to RAIN's chat sessions (attach a PDF, ask questions about it). Went back and forth on how to parse the PDFs, from custom parsing to LangChain and back to a custom loader after LangChain's bundled one failed to resolve `pdf-parse` correctly. Also fixed a 504 timeout on larger uploads by moving processing to a background job queue with status polling.
