---
title: "What is a Consensus Mechanism?"
description: "Learn how blockchains reach agreement through consensus mechanisms, including Sybil resistance and chain selection."
---

## What is a consensus mechanism in blockchain?

A **consensus mechanism** is the process that [blockchains](https://fluentdev.vercel.app/glossary/blockchain) use to agree on the [state](https://fluentdev.vercel.app/glossary/state) of the ledger. Because there is no central authority, participants need a way to decide which [transactions](https://fluentdev.vercel.app/glossary/transaction) are valid and which version of the blockchain is the “real” one.  

Consensus mechanisms ensure that:

- Everyone has the same copy of the ledger.  
- No one can spend the same coin twice.  
- The system continues running securely, even if some participants are dishonest.  

> It works like GPS systems finding the best route. Multiple satellites provide information, and even if some give different data, the system uses established algorithms to determine the correct path.

## Consensus mechanisms vs. consensus algorithms

The terms are often mixed up, but they’re not the same thing.  

A **consensus mechanism** is the *overall process* that blockchains use to maintain a single shared history. It combines two key components:  

1. [**Sybil resistance**](https://fluentdev.vercel.app/glossary/sybil-resistance) – prevents one person from creating unlimited fake identities to take over.  
   - Blockchains are open systems: anyone can spin up a [node](https://fluentdev.vercel.app/glossary/nodes) and join. Without safeguards, a malicious actor could flood the network with fake identities (a “Sybil attack”).  
   - [**Proof-of-Work (PoW)**](https://fluentdev.vercel.app/glossary/proof-of-work) solves this by requiring enormous computing power and electricity.  
   - [**Proof-of-Stake (PoS)**](https://fluentdev.vercel.app/glossary/proof-of-stake) solves this by requiring participants to lock up real capital, which can be slashed if they cheat.  
   - In both models, influence costs real-world resources, making dishonesty prohibitively expensive.

2. **Chain selection** – decides which version of the blockchain is valid when forks occur.  
   - Sometimes two blocks appear at the same height because they were proposed simultaneously. The network needs a rule to choose which one to keep.  
   - In Bitcoin, nodes follow the chain with the most accumulated work.  
   - In Ethereum, [validators](https://fluentdev.vercel.app/glossary/validators) follow the chain finalized by the greatest weight of attestations.  
   - These rules ensure that honest participants eventually converge on the same version of history.

A **consensus algorithm** is the *specific formula* used to implement one of these components. For example:  
- Proof-of-Work and Proof-of-Stake are **Sybil resistance algorithms**.  
- The longest-chain rule is a **chain selection algorithm**.  

**NOTE:**
> PoW in Bitcoin and PoS in Ethereum are the most well-known examples, but many other blockchains use their own consensus algorithms. Some adapt PoW or PoS, while others use new models like **delegated proof-of-stake** or [proof-of-authority](https://fluentdev.vercel.app/glossary/proof-of-authority).

**Plain English analogy:** 

The **mechanism** is the big picture; the full process that keeps the blockchain secure and unified. The **algorithms** are the building blocks that make it work.  
 
Sybil resistance is like charging an entry fee so no one can flood the system with fake votes. Chain selection is a tie-breaker rule that everyone agrees to follow when two different versions of the story appear.

## How does consensus work on a blockchain?

Here’s the process step by step:

1. A new transaction is broadcast to the network.  
2. Transactions are bundled into a [block](https://fluentdev.vercel.app/glossary/blocks).  
3. The block is proposed to the network.  
4. **Sybil resistance** rules (like PoW puzzles or PoS validator checks) ensure the proposer is legitimate.  
5. **Chain selection** rules decide if the block belongs on the main chain.  
6. Once accepted, all nodes update their copy of the ledger.  

This cycle repeats continuously, allowing blockchains to grow securely over time.

## Using “consensus mechanism” in English

The term **consensus mechanism** often appears in technical discussions, reports, and presentations. Here are some common ways it’s used:

### General explanation  

> Bitcoin and Ethereum use different **consensus mechanisms** to secure their networks.

### Comparison 

> Sybil resistance and chain selection are two major components of a **consensus mechanism**.

### Function-focused  

> The **consensus mechanism** ensures that all participants agree on the same version of the blockchain.

### Business/industry context  
  
> Choosing the right **consensus mechanism** can affect scalability, security, and energy efficiency.