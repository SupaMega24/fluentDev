---
title: "What is Cryptography"
description: "Learn about cryptography in blockchain and how it works."
---

## What is Cryptography?

**Cryptography** is the fundamental technology that provides **security**, **privacy**, and **trust** within a [blockchain](https://fluentdev.vercel.app/glossary/blockchain). It's the set of mathematical rules and algorithms that encrypt and verify data, allowing a [decentralized](https://fluentdev.vercel.app/glossary/decentralization) network to operate securely without a central authority. On a blockchain, cryptography ensures that [transactions](https://fluentdev.vercel.app/glossary/transaction) are authentic, data is [immutable](https://fluentdev.vercel.app/glossary/immutable), and the network is protected from tampering. It's what allows participants to trust the system, not a specific person or institution.

### What is cryptography in blockchain?

On a blockchain, cryptography is the essential engine that drives the entire system. It provides the core methods for securing transactions, verifying ownership, and linking [blocks](https://fluentdev.vercel.app/glossary/blocks) together. Blockchain networks use cryptographic functions, primarily [hashing](https://fluentdev.vercel.app/glossary/hash-function) and **asymmetric cryptography (explained in the next section)**, to secure data. These methods are used to create the unique digital identities of users (wallet addresses), verify transactions with [digital signature](https://fluentdev.vercel.app/glossary/signature), and ensure the **integrity** of the entire **blockchain** ledger.

> Cryptography is the security system that makes blockchains safe to use.

## What are the main types of cryptography?

Blockchain technology relies on three primary cryptographic types to function:

1. **Symmetric Key Cryptography:** This method uses a single, shared key for encryption and decryption. While less common for direct blockchain transactions, it is still used in some blockchain-related applications for efficient and secure data storage, where a single key can be securely managed.
   
> One key is used for both locking and unlocking the information.

2. **Asymmetric Key Cryptography:** This system uses a pair of mathematically linked keys: a [public key](https://fluentdev.vercel.app/glossary/public-key) and a [**private key**](https://fluentdev.vercel.app/glossary/private-key). This is foundational to blockchain, as it allows users to have a public wallet address (generated from the public key) while securely controlling their funds with a secret private key. When a user wants to send a transaction, they use their private key to create a digital signature that the network can verify with their public key.

> You have a public address to share and a private key to control your money.

3. **Hash Functions:** These are one-way algorithms that transform transaction data of any size into a fixed-length output called a [hash](https://fluentdev.vercel.app/glossary/hash). They are a critical part of blockchain's immutability. Each block's unique hash is generated using its own data and the hash of the previous block, creating an unbroken chain of [cryptographic proofs](https://fluentdev.vercel.app/glossary/cryptographic-proofs). Any attempt to alter a transaction would change its hash, breaking the chain and immediately alerting the network.

> A hash is a digital fingerprint that shows if data has been changed.

## What are the pillars of cryptography in blockchain?

The power of cryptography comes from the core principles that it enforces, which are vital for the secure and trustworthy operation of a decentralized blockchain.

1. **Pseudonymity:** While transactions are visible, participants can maintain privacy using cryptographic addresses rather than real-world identities.
2. **Authentication:** Cryptography confirms the identities of transaction senders. A **digital signature**, created with a user's private key, acts as a verifiable cryptographic proof that a transaction originated from the claimed sender.
3. **Integrity:** This guarantees that data on the blockchain has not been altered. The use of **hash functions** ensures that even a single-character change to a block's data will be detected, as its hash will no longer match the hash stored in the next block.
4. **Non-repudiation:** This prevents a user from denying they sent a transaction. Once a transaction is signed with a private key and added to the blockchain, the cryptographic proof is permanent and verifiable by anyone.
5. **Adaptability & Interoperability:** Modern cryptography, especially **Elliptic Curve Cryptography (ECC)**, is highly adaptable for use in devices with limited resources (like smartphones). It also allows for secure communication between different blockchain platforms, which is crucial for the future of the interconnected Web3 ecosystem.

## Cryptography's Role in Consensus and Scalability

Cryptography is not only used for individual transactions but also for securing the entire blockchain network through its [consensus mechanism](https://fluentdev.vercel.app/glossary/consensus-mechanism). In [Proof-of-Work (PoW)](https://fluentdev.vercel.app/glossary/proof-of-work), used by Bitcoin, cryptography is at the heart of the "work" itself. Miners use hash functions to solve a complex puzzle, and the first to solve it gets to add the next block to the chain. This cryptographic puzzle makes it computationally expensive for an attacker to tamper with the network. In [Proof-of-Stake (PoS)](https://fluentdev.vercel.app/glossary/proof-of-stake), used by Ethereum, cryptography secures the validators and their stakes, ensuring a fair and verifiable process for proposing and validating new blocks.

For scaling solutions, also known as [Layer 2s](https://fluentdev.vercel.app/glossary/layer-2), cryptography is crucial. Technologies like **Zero-Knowledge Proofs (ZKPs)** allow for transactions to be processed off the main blockchain, with a cryptographic proof submitted to the main chain to verify their validity. This drastically increases transaction speed and efficiency without sacrificing the security of the underlying blockchain. ZKPs are a powerful example of advanced cryptography enabling the next generation of blockchain applications.

## Using Cryptography in English

When talking about blockchain, you’ll often use the word *cryptography* and its related forms in different real-world situations:

### Explaining the foundation of blockchain

Here, *cryptography* is a noun you’d use when explaining the big picture.

> **Cryptography** is what makes blockchain transactions secure.  

### Describing how security works

In this sentence, *cryptographically* (adverb) shows the *method* used to secure data.

> The message was **cryptographically** signed so we can trust it came from the right person. 

### Referring to tools and concepts

Here, *cryptographic* (adjective) describes a specific type of tool, process, or concept.

> Ethereum relies on **cryptographic** signatures to verify transactions. 
 
