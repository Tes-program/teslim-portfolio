---
week: "W11"
date: 2025-03-10
---

Gadify: built the device registration form (React Hook Form + Vite + Tailwind), separating file-upload state from form validation to fix a bug where the uploaded image wasn't captured on submit. Fixed a `profiles` object-vs-array access bug on the recent devices/activities dashboard query, and implemented role-based route protection (`ProtectedRoute` with `staffOnly`/`studentOnly` flags redirecting mismatched roles) while mapping out remaining Supabase wiring — auth, profile management, device CRUD, staff dashboard, device verification, lost/reported device handling.
