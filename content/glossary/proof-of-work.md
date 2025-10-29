---
title: "What is Proof of Work" 
description: "A story-based explainer that shows how Proof of Work secures the Bitcoin blockchain through mining, hashing, and decentralized competition."
---

## Blockman and the Puzzler: A proof of work story 

In the digital city of Blocktown, everyone trusts the [blockchain](https://fluentdev.vercel.app/glossary/blockchain). But how does the network decide which transactions are real and who gets to write them into history? That's where the miners come in.

## **The challenge**

Every ten minutes, a new challenge echoes across Blocktown: a [cryptographic](https://fluentdev.vercel.app/glossary/cryptography) puzzle appears, and every miner in the city races to solve it first.

The network announces: *"Whoever finds the solution earns the right to add the next [block](https://fluentdev.vercel.app/glossary/blocks), and claims the block reward."*

Blockman powers up his mining rig. "Time to [hash](https://fluentdev.vercel.app/glossary/hash)," he mutters, watching his screen light up with calculations.

## **The race begins**

Across town, his rival, The Puzzler, grins at her monitor. "Hope you've got enough computing power, Blockman. This difficulty target isn't getting any easier."

Both miners start the same task: taking the pending [transactions](https://fluentdev.vercel.app/glossary/transaction), adding a random number called a [nonce](https://fluentdev.vercel.app/glossary/nonce), and running it all through a cryptographic [hash function](https://fluentdev.vercel.app/glossary/hash-function) that secures Bitcoin. The output is a seemingly random string of numbers and letters.

But they're not looking for just *any* hash. They need one that starts with enough zeros to meet the current **difficulty target**. The only way to find it? Guess and check. Billions of times per second.

Blockman's rig cycles through nonces:

* Nonce 1 → Hash: `8a3f2b...` ❌  
* Nonce 2 → Hash: `7c91e4...` ❌  
* Nonce 3 → Hash: `6d8a03...` ❌

The Puzzler's machines do the same, burning electricity and racing against the clock.

## **The solution**

Suddenly, Blockman's monitor flashes green.

**Nonce 4,291,056 → Hash: `00000a3f2b...` ✓**

"Got it\!" Blockman broadcasts his solution to the network. Every [node](https://fluentdev.vercel.app/glossary/nodes) in Blocktown verifies the math instantly. The hash is correct, the transactions are valid, the work has been proven.

The block is added to the chain. Blockman earns his reward: freshly minted Bitcoin and transaction fees.

The Puzzler's machines stop mid-calculation. She shrugs and resets for the next round. "You found the nonce first this time. But I've already started guessing for block 10,001."

The race never stops. Every ten minutes, a new puzzle. Every solution, proof of work.

While Blockman's competition makes for a good story, the reality of proof of work is even more interesting. Let’s take a deeper look at what proof of work really is. 

## What is Proof of Work (PoW)?

Proof of Work is how [decentralized](https://fluentdev.vercel.app/glossary/decentralization) networks like Bitcoin agree on which new transactions are valid.  
Since there’s no central authority, **miners** (people running powerful computers) step in to maintain the network’s honesty.

Each miner tries to add a new block of transactions to the blockchain. But before they can, they must prove they’ve done “the work”. This is the computational effort that shows they’re playing fair.  
That’s the *proof* in Proof of Work.

In return, the winner earns a **block reward**: newly minted [cryptocurrency](https://fluentdev.vercel.app/glossary/cryptocurrency) and transaction fees.  
This is how new bitcoins are created, and how miners are incentivized to keep the system secure.

## How does proof of work, work?

Let’s zoom in on what happens behind the scenes.

Each new block starts as a kind of digital challenge. Miners take all the block’s data, including the **block header**, and run it through a **hashing algorithm** (in Bitcoin’s case, **SHA-256**). The goal? Find a special number called a **nonce** that makes the resulting hash begin with a certain number of zeros. That pattern of zeros represents the **difficulty target**.

It’s like guessing a combination lock with billions of possibilities. Every guess takes computing power and electricity. The first miner to find the correct nonce announces their result to the network.  
Other miners quickly verify the solution and, once confirmed, the block is **validated** and added to the chain. Let’s take a closer look at how verification works:

**How other nodes verify the nonce:**

* A miner broadcasts their solution: the block data plus the winning nonce  
* Other nodes take that exact block data and nonce  
* They run it through the hash function (SHA-256) just once  
* They check if the resulting hash meets the difficulty target (starts with enough zeros)  
* If it does, the nonce is valid and the block is accepted  
* If it doesn't, the solution is rejected

**Why This Works:**

* Finding the nonce requires billions of guesses and massive computational power  
* Verifying the nonce requires a single calculation that any node can do instantly  
* This asymmetry (hard to solve, easy to verify) is what makes Proof of Work secure and efficient for the network

This constant puzzle-solving is what keeps the blockchain **decentralized** and tamper-resistant. No single entity can rewrite history without redoing all that computational work, which would be extremely infeasible and nearly impossible on established networks like Bitcoin.

