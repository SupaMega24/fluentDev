---
title: "What is Distributed Ledger Technology (DLT)?"
description: "Learn about distributed ledger technology (DLT), how it relates to blockchain, examples of DLT platforms, and where it's used."
---

## What is distributed ledger technology (DLT)?

A **distributed ledger** is a shared database that exists across multiple computers (or [nodes](https://fluentdev.vercel.app/glossary/nodes)), so no single entity controls the records. This setup ensures that every participant can independently verify transactions and maintain trust without relying on a central authority. It is the foundational technology behind many [blockchain](https://fluentdev.vercel.app/glossary/blockchain) systems, enabling transparency, security, and fault tolerance.

Transactions are verified by a [consensus](https://fluentdev.vercel.app/glossary/consensus) process (such as [Proof of Work (PoW)](https://fluentdev.vercel.app/glossary/proof-of-work), [Proof of Stake (PoS)](https://fluentdev.vercel.app/glossary/proof-of-stake), or [Tower Byzantine Fault Tolerance](https://ackee.xyz/solana/book/latest/chapter2/tower-bft/)) so participants can trust the ledger without a single controlling party.  

Most DLTs are **tamper-evident** rather than perfectly [immutable](https://fluentdev.vercel.app/glossary/immutable). Records are extremely difficult to change, and any attempt leaves a clear trail.

### Key benefits of DLTs include:

These features explain why organizations and developers adopt DLTs in finance, supply chain, and other domains:

- **Transparency:** All participants can see and verify the same records, reducing the need for blind trust.  
- **Auditability:** Every [transaction](https://fluentdev.vercel.app/glossary/transaction) is recorded with a [timestamp](https://fluentdev.vercel.app/glossary/timestamp) and [cryptographic proof](https://fluentdev.vercel.app/glossary/cryptographic-proofs), making it easy to trace history.  
- **Disintermediation:** DLT removes the need for central authorities or middlemen, allowing direct peer-to-peer interactions.  
- **Resilience and fault tolerance:** Copies of the ledger exist across many nodes, so the system continues running even if some nodes fail.  
- **Reduced reconciliation costs:** Shared data means organizations spend less time and money cross-checking records.

### Challenges of DLTs include:

While DLTs bring many benefits, there are also technical and practical limitations:

- **Scalability limits:** As more users join, verifying and storing every transaction can slow performance.  
- **Energy consumption (for some systems like PoW):** Mining-based systems such as Bitcoin require high electricity usage.  
- **Regulatory uncertainty:** Governments are still deciding how to regulate DLT, creating compliance risks.  
- **Collusion risks:** If participants cooperate maliciously, they could manipulate the ledger. This is generally impractical for highly decentralized systems but more plausible for smaller networks with fewer validators.  
- **Security vulnerabilities:** [Permissioned](https://fluentdev.vercel.app/glossary/permissioned) DLTs must prevent unauthorized access, and cryptocurrency wallets remain a target for hacks.  
- **Permanence challenges:** Immutability is a strength, but mistakes or incorrect entries are difficult to correct.

> Distributed ledger technology (DLT) is a way of keeping records across many computers instead of relying on a single authority. This makes it harder to tamper with data, increases trust, and ensures everyone sees the same version of the truth. 
> It brings benefits like transparency, resilience, and cutting out middlemen. 
> But also faces challenges such as scalability, energy use, unclear regulations, and the difficulty of fixing mistakes once data is recorded.

## Is DLT the same as blockchain?

DLT is a broad category, and blockchain is just one type. Understanding the difference helps clarify how systems operate:

- **Blockchain:** Groups transactions into [blocks](https://fluentdev.vercel.app/glossary/blocks), cryptographically linked to form a chain.  
- [Directed Acyclic Graphs (DAGs):](https://atomicwallet.io/academy/articles/what-is-iota) Organize transactions in a web-like structure rather than linear blocks.
- **Hashgraph:** Uses a [“gossip about gossip”](https://hedera.com/learning/hedera-hashgraph/what-is-gossip-about-gossip?) protocol where nodes share information about transactions with each other. This allows for fast, fair ordering without mining.  
- **Holochain:** Stores data [agent-centrically](https://www.holochain.org/what-holochain/), meaning each user maintains their own chain that can link with others in an encrypted peer-to-peer network. It emphasizes scalability and autonomy rather than consensus across the whole network.

## What is an example of a DLT?

DLT platforms vary in design and use case, from cryptocurrencies to enterprise solutions:

- **Bitcoin:** A blockchain using Proof of Work for digital currency.  
- **Ethereum:** A blockchain supporting [smart contracts](https://fluentdev.vercel.app/glossary/smart-contract).  
- **Solana:** A high-performance blockchain that uses [Proof of History](https://www.cyfrin.io/glossary/proof-of-history-poh) combined with Proof of Stake.  
- **IOTA:** A DAG-based ledger designed for IoT devices.  
- **Hyperledger Fabric:** A permissioned DLT for enterprises.  
- **Corda:** A DLT tailored for financial institutions, designed for privacy and regulatory compliance.

## Are DLTs centralized or decentralized?

DLTs exist on a spectrum. Understanding their degree of decentralization helps explain the risks and benefits:

- **Permissionless (Public):** Open to anyone. Examples include Bitcoin and Ethereum, where any participant can join, validate transactions, and view the entire ledger.  
- **Consortium (Federated):** Controlled by a group of pre-selected organizations. Examples include trade finance networks and supply chain collaborations, where competing companies share governance.  
- **Permissioned (Private):** Restricted to approved participants only. Examples include Hyperledger Fabric and Corda, where enterprises control access while still distributing records across nodes.    

> Decentralization is not all-or-nothing—some DLTs may be architecturally distributed but politically centralized.

## Using “distributed ledger technology” in English

### Distributed ledger technology (noun)

A system where records are stored and shared across multiple computers.  

**Finance Example**  
> In finance, distributed ledger technology allows us to process international transactions faster and with fewer intermediaries. That means lower fees and near real-time settlement.  

**Supply Chain Example**  
> For supply chains, a distributed ledger can track every step of a product’s journey. This makes it easier to verify authenticity, reduce fraud, and improve overall transparency.  

**Technology Choice Example**  
> There are different types of distributed ledgers: blockchains, DAGs, and even agent-centric models like Holochain. Each offers trade-offs in speed, scalability, and governance, so we need to choose the one that fits our project goals.  
