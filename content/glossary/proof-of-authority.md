---
title: "What is Proof of Authority (PoA)?"
description: "Learn what Proof of Authority is, how it works as a Sybil resistance mechanism, its benefits and drawbacks, and when it's used in blockchain networks."
---


## **What is Proof of Authority (PoA)?**

**Proof of Authority (PoA)** is a [Sybil resistance](https://fluentdev.vercel.app/glossary/sybil-resistance) mechanism used in [blockchain](https://fluentdev.vercel.app/glossary/blockchain) networks to prevent fake or malicious actors from taking control. It is a type of [consensus](https://fluentdev.vercel.app/glossary/consensus) approach where **pre-approved, verified [validators](https://fluentdev.vercel.app/glossary/validators)** secure the network and validate transactions.

### Key characteristics of PoA

* **Pre-approved validators:** PoA relies on a set of pre-approved validators with verified real-world identities. Examples could include known companies, institutions, or individuals trusted by the network.

* **Reputation matters:** Validators stake their public reputation rather than [cryptocurrency](https://fluentdev.vercel.app/glossary/cryptocurrency). Acting maliciously can lead to removal and damage to personal or organizational trust.

* **Part of consensus:** PoA ensures who can validate [blocks](https://fluentdev.vercel.app/glossary/blocks), while consensus algorithms like IBFT, Aura, or Clique determine how validators agree on the blockchain state.

> A PoA blockchain is like a private club with a strict membership committee. Only approved members can make decisions. This centralization allows faster, more efficient decision-making since members are known and trusted.

## **How Proof of Authority works**

1. **Validator selection:** Network operators vet potential validators based on identity, reputation, and trustworthiness. This may include legal documentation, background checks, or industry credentials.

2. **Block creation:** Authorized validators take turns proposing and validating blocks according to a predetermined schedule or algorithm.

3. **Transaction validation:** Once a block is proposed, other validators verify its accuracy. Since validators are pre-approved and identifiable, the process is fast and straightforward.

4. **Reputation at stake:** Validators risk their credibility, not cryptocurrency. Misbehavior can lead to removal and real-world consequences such as loss of business partnerships or damage to professional standing.

5. **No mining required:** PoA does not require expensive hardware or significant energy, making it cost-efficient and environmentally friendly.

> Selecting validators is like choosing a company’s board members: people with proven track records and something to lose if they make bad decisions. They don’t need the most tokens or the fastest computers, they just need to be trustworthy.

## **Benefits and drawbacks of PoA**

**Benefits:**

* **High transaction speed:** Small, trusted validator sets allow blocks to finalize in seconds.

* **Energy efficient:** No mining or high computational work required.

* **Low operational cost:** Minimal hardware and no energy-intensive mining.

* **Predictable block times:** Predefined schedules make block creation consistent.

* **Harder 51% attacks:** Compromising validators requires breaching their identities and reputations, not just computational power or [token](https://fluentdev.vercel.app/glossary/token) holdings.

**Drawbacks:**

* **Centralization:** Fewer validators means lower [decentralization](https://fluentdev.vercel.app/glossary/decentralization).

* **Trust requirements:** Users must trust the validators’ integrity. Collusion (when validators secretly work together for unfair advantage) or other malicious behavior is a risk.

* **Censorship risk:** Known validators can be pressured by external actors to censor transactions.

* **Limited transparency:** Validator selection may not be fully open to all users.

* **Vulnerability to authority corruption:** Compromised entities controlling validator selection threaten network security.

> PoA prioritizes speed and efficiency over decentralization. It works well for trusted networks but requires faith in the validators’ honesty.

## **Common use cases**

* [**Private**](https://fluentdev.vercel.app/glossary/private-blockchain) **and [consortium blockchains](https://fluentdev.vercel.app/glossary/consortium-blockchain):** Enterprise networks with known partners (e.g., supply chains, interbank settlements).

* [**Permissioned**](https://fluentdev.vercel.app/glossary/permissioned) **networks:** Internal organizational systems prioritizing efficiency and cost over public access.

* **Test networks:** Simple PoA [testnets](https://fluentdev.vercel.app/glossary/testnet) allow developers to test applications without staking or mining requirements.

* **Supply chain management:** Validators are known companies with reputational stakes in accurate tracking.

* **Identity verification systems:** Networks where verified identities are essential.

* **Public blockchains with specific goals:** Examples include [VeChain](https://vechain.org/), which uses PoA for enterprise adoption and supply chain efficiency.

> PoA is like a board meeting compared to a public town hall. Faster and more efficient, but limited to trusted participants.

## **PoA vs PoW vs PoS**

The table below highlights the differences between three different types of Sybil resistance mechanisms: Proof of Authority (PoA), Proof of Work ([PoW](https://fluentdev.vercel.app/glossary/proof-of-work)), and Proof of Stake ([PoS](https://fluentdev.vercel.app/glossary/proof-of-stake)). 

| Feature             | PoA                               | PoW                                   | PoS                                                       |
| ------------------- | --------------------------------- | ------------------------------------- | --------------------------------------------------------- |
| Validator selection | Pre-approved, verified identities | Anyone with computing power           | Token holders who stake                                   |
| What’s at stake     | Reputation                        | Electricity and hardware              | Locked cryptocurrency                                     |
| Energy consumption  | Very low                          | Very high                             | Low to moderate                                           |
| Transaction speed   | Very fast (seconds)               | Slow (minutes)                        | Fast (seconds–minutes)                                    |
| Decentralization    | Low                               | High                                  | Moderate (depends on token distribution)                  |
| Trust required      | High                              | Low (trustless)                       | Low (crypto-economic security)                            |
| Setup cost          | Low                               | Very high                             | Moderate to high                                          |
| Best for            | Private/enterprise networks       | Public, censorship-resistant networks | Public networks balancing efficiency and decentralization |

> Each Sybil resistance mechanism makes different trade-offs, often described as **the blockchain trilemma**. PoA sacrifices decentralization for speed and efficiency, PoW sacrifices efficiency for maximum decentralization, and PoS tries to balance both but requires token distribution.

## **Using "proof of authority" in English**

Here are common ways the term "proof of authority" appears in blockchain contexts:

**Describing consensus mechanisms**

When explaining how a blockchain validates transactions and secures the network through trusted validators.

Structure: \[Blockchain\] uses Proof of Authority \+ explanation of validators

> VeChain uses **Proof of Authority** with 101 Authority Masternodes that validate transactions.

> Our enterprise blockchain runs on **Proof of Authority** where each partner company operates a validator node.

**Comparing blockchain types**

When discussing trade-offs between different consensus approaches.

Structure: Proof of Authority \+ comparison to other mechanisms

> **Proof of Authority** is faster than Proof of Work but more centralized.

> We chose **Proof of Authority** over Proof of Stake because we need known validators for compliance reasons.

**Explaining validator requirements**

When describing who can validate blocks and what they risk.

Structure: In Proof of Authority \+ validator characteristics

> In **Proof of Authority**, validators stake their reputation rather than cryptocurrency.

> **Proof of Authority** networks require validators to have verified identities.

**Discussing use cases**

When explaining why certain blockchains use PoA for specific purposes.

Structure: \[Use case\] benefits from Proof of Authority \+ reason

> Supply chain applications benefit from **Proof of Authority** because speed and known participants matter more than decentralization.

> **Proof of Authority** works well for private blockchains where all parties are trusted business partners.

