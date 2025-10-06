---
title: "What is a Node?"
description: "Learn what blockchain nodes are, how they work, and why they are essential to blockchain networks."
---

## What is a blockchain node?

A **node** is any computer that connects to a [blockchain](https://fluentdev.vercel.app/glossary/blockchain) network. It stores, shares, and verifies the data that keeps the blockchain running. Every node plays a role in maintaining the system’s security, transparency, and [decentralization](https://fluentdev.vercel.app/glossary/decentralization).

Nodes communicate with each other to [validate transactions](https://fluentdev.vercel.app/glossary/validators), store copies of the ledger, and ensure everyone agrees on the same version of the blockchain. 

> Think of nodes as museum curators around the world, each maintaining an identical collection. Before adding a new piece, all curators verify it's authentic. If someone tries to sneak in a fake, the other curators will catch it because their records don't match.

## How does a blockchain node work?

Nodes perform several key functions that keep a blockchain network operational and trustworthy:

- **Transaction validation:** Nodes check that each [transaction](https://fluentdev.vercel.app/glossary/transaction) follows the network’s rules. For example, ensuring users aren’t spending the same funds twice.  
- **Data storage:** Many nodes keep a full or partial copy of the blockchain, ensuring that the history of transactions can’t be lost or changed.  
- **Block propagation:** When a new [block](https://fluentdev.vercel.app/glossary/blocks) is created, nodes share it across the network so that everyone stays synchronized.  
- **Consensus participation:** Some nodes help the network agree on which transactions and blocks are valid through [consensus](https://fluentdev.vercel.app/glossary/consensus) protocols like Proof of Work ([PoW](https://fluentdev.vercel.app/glossary/proof-of-work)) or Proof of Stake ([PoS](https://fluentdev.vercel.app/glossary/proof-of-stake)).  
- **Security:** Nodes verify [digital signatures](https://fluentdev.vercel.app/glossary/signature), reject invalid data, and prevent malicious actors from altering the blockchain.

> A node is like a security guard, librarian, and messenger all in one. They check every record, store it safely, and keep everyone else updated with the latest version.

## What are some types of blockchain nodes?

Different types of nodes serve different purposes depending on how much data they store and how they participate in consensus:

- **Full node:** Stores the entire blockchain and independently verifies every transaction and block.  
- **Light node:** Stores only essential data and relies on full nodes for full transaction verification.  
- **Archived node:** Keeps historical blockchain states, often used by explorers or analytics tools.  
- **Pruned node:** Starts as a full node but deletes old data to save space, keeping only the most recent blocks.  
- **Consensus node:** Takes part in block validation and consensus processes (e.g., validators in Solana or Ethereum).  
- **Remote Procedure Call (RPC) node:** Provides an interface that lets developers and decentralized apps ([dApps](https://fluentdev.vercel.app/glossary/dapp)) interact with the blockchain.  
- **Mining node:** Used in Proof of Work networks like Bitcoin to compete for block rewards by solving complex [cryptographic](https://fluentdev.vercel.app/glossary/cryptography) puzzles.

> Full nodes are like complete record keepers, light nodes are quick reference guides, and RPC nodes act like customer service desks that connect apps to the blockchain.

## What is a node client?

A **node client** is the software that allows a computer to function as a blockchain node. It connects to the network, processes transactions, stores data, and communicates with other nodes. Each blockchain has its own client implementations that follow the same protocol but may differ in programming language or performance features.

For example, **Bitcoin Core** runs Bitcoin nodes, **Solana Validator** software powers Solana’s nodes, and **Ethereum** separates its responsibilities between **execution clients** (like Geth or Nethermind) and **consensus clients** (like Prysm or Lighthouse).

> A node client is like the app you install to connect to a network. Just as you need a specific app to access a service, blockchains require specific client software for nodes to join and operate correctly.

## Using node in English

### Discussing network reliability
> “Running multiple **nodes** helps ensure the network remains online even if one fails.”

### Explaining project infrastructure  
> “Our dApp relies on **RPC nodes** to connect users’ transactions to the blockchain.”

### Talking about system performance  
> “We deployed a **pruned node** to balance storage costs with fast data access.”




 