---
week: "W09"
date: 2025-03-02
---

Began implementing the pivoted certificate-verification project: integrated Web3Auth into a React/Chakra UI credential-verification frontend (`VerifyCredential` page), wallet-based sign-in replacing a "Connect Wallet" flow. Also hit the inevitable Vite/browser polyfill fights (`process is not defined`, WalletConnect dependency resolution) that come with bringing web3 libraries into a Vite app.
