---
week: "W44"
date: 2024-10-28
---

Diagnosed and fixed a production CORS failure on tattooadmin.io — `Access-Control-Allow-Origin: *` combined with credentialed requests, which browsers reject. Fixed with an explicit origin list (dynamic origin-validation for multiple environments) and by correcting NestJS middleware order so CORS registration ran before Helmet.
