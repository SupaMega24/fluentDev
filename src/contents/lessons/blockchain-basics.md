---
title: "Blockchain Basics"
video: https://wisp.link/your-video-id
difficulty: beginner
---

## What is a Blockchain?

A **blockchain** is:

- Distributed across many computers
- Immutable (can't alter past records)
- Transparent (all transactions visible)

```solidity
// Simple Smart Contract
contract Wallet {
    address public owner;
    
    constructor() {
        owner = msg.sender;
    }
}