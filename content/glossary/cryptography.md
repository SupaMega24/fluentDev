---
title: "What is Cryptography"
description: "Learn about cryptography in blockchain and how it works."
---

## Using Cryptography in English

### Cryptography

The word **cryptography** is a noun. It is the name for the practice and science of securing information using codes.

* **Example Sentence:** "**Cryptography** is the foundation of blockchain security."

In this sentence, "cryptography" is the subject, identifying the core concept being discussed.

### Cryptographically

The word **cryptographically** is an adverb. Adverbs typically end in "-ly" and are used to describe how an action is performed.

* **Example Sentence:** "The data was **cryptographically** secured, making it unreadable without the private key."

In this sentence, "cryptographically" modifies the verb "secured," telling you *how* the data was secured.

### Cryptographic

The word **cryptographic** is an adjective. Adjectives describe a noun. It is used to refer to anything related to the science of cryptography.

* **Example Sentence:** "A **cryptographic** hash is a unique digital fingerprint of a block."

In this sentence, "cryptographic" modifies the noun "hash," telling you what kind of hash it is.

## What is Cryptography?

**Cryptography** is the fundamental technology that provides **security**, **privacy**, and **trust** within a blockchain. It's the set of mathematical rules and algorithms that encrypt and verify data, allowing a decentralized network to operate securely without a central authority. On a blockchain, cryptography ensures that transactions are authentic, data is immutable, and the network is protected from tampering. It's what allows participants to trust the system, not a specific person or institution.

### What is cryptography in blockchain?

On a blockchain, cryptography is the essential engine that drives the entire system. It provides the core methods for securing transactions, verifying ownership, and linking blocks together. Blockchain networks use cryptographic functions, primarily **hashing** and **asymmetric (public-key) cryptography**, to secure data. These methods are used to create the unique digital identities of users (wallet addresses), verify transactions with **digital signatures**, and ensure the **integrity** of the entire **blockchain** ledger.

### What are the main types of cryptography?

Blockchain technology relies on three primary cryptographic types to function:

1. **Symmetric Key Cryptography:** This method uses a single, shared key for encryption and decryption. While less common for direct blockchain transactions, it is still used in some blockchain-related applications for efficient and secure data storage, where a single key can be securely managed.
2. **Asymmetric Key Cryptography (Public-Key Cryptography):** This system uses a pair of mathematically linked keys: a **public key** and a **private key**. This is foundational to blockchain, as it allows users to have a public wallet address (the public key) while securely controlling their funds with a secret **private key**. When a user wants to send a transaction, they use their private key to create a **digital signature** that the network can verify with their public key.
3. **Hash Functions:** These are one-way algorithms that transform transaction data of any size into a fixed-length output called a **hash**. They are a critical part of blockchain's immutability. Each block's unique hash is generated using its own data and the hash of the previous block, creating an unbroken chain of cryptographic proofs. Any attempt to alter a transaction would change its hash, breaking the chain and immediately alerting the network.

### What are the pillars of cryptography in blockchain?

The power of cryptography comes from the core principles that it enforces, which are vital for the secure and trustworthy operation of a decentralized blockchain.

1. **Confidentiality:** While transactions on a public blockchain are visible, the identities of the participants can be kept confidential by using cryptographic addresses rather than real-world identities.
2. **Authentication:** Cryptography confirms the identities of transaction senders. A **digital signature**, created with a user's private key, acts as a verifiable cryptographic proof that a transaction originated from the claimed sender.
3. **Integrity:** This guarantees that data on the blockchain has not been altered. The use of **hash functions** ensures that even a single-character change to a block's data will be detected, as its hash will no longer match the hash stored in the next block.
4. **Non-repudiation:** This prevents a user from denying they sent a transaction. Once a transaction is signed with a private key and added to the blockchain, the cryptographic proof is permanent and verifiable by anyone.
5. **Adaptability & Interoperability:** Modern cryptography, especially **Elliptic Curve Cryptography (ECC)**, is highly adaptable for use in devices with limited resources (like smartphones). It also allows for secure communication between different blockchain platforms, which is crucial for the future of the interconnected Web3 ecosystem.

### Cryptography's Role in Consensus and Scalability

Cryptography is not only used for individual transactions but also for securing the entire blockchain network through its **consensus mechanism**. In **Proof-of-Work (PoW)**, used by Bitcoin, cryptography is at the heart of the "work" itself. Miners use hash functions to solve a complex puzzle, and the first to solve it gets to add the next block to the chain. This cryptographic puzzle makes it computationally expensive for an attacker to tamper with the network. In **Proof-of-Stake (PoS)**, used by Ethereum, cryptography secures the validators and their stakes, ensuring a fair and verifiable process for proposing and validating new blocks.

For scaling solutions, also known as **Layer 2s**, cryptography is crucial. Technologies like **Zero-Knowledge Proofs (ZKPs)** allow for transactions to be processed off the main blockchain, with a cryptographic proof submitted to the main chain to verify their validity. This drastically increases transaction speed and efficiency without sacrificing the security of the underlying blockchain. ZKPs are a powerful example of advanced cryptography enabling the next generation of blockchain applications.