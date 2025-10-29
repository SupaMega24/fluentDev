---
title: "What is Proof of Stake in Blockchain?"
description: "Learn what proof of stake is, how it works in blockchain networks, its role in validating transactions, and how it differs from proof of work."
---

## What is proof of stake?

**Proof of stake (PoS)** is a [Sybil resistance](https://fluentdev.vercel.app/glossary/sybil-resistance) mechanism used by [blockchain](https://fluentdev.vercel.app/glossary/blockchain) networks to validate [transactions](https://fluentdev.vercel.app/glossary/transaction) and create new [blocks](https://fluentdev.vercel.app/glossary/blocks). Unlike proof of work ([PoW](https://fluentdev.vercel.app/glossary/proof-of-work)), which requires miners to solve complex computational puzzles, PoS selects [validators](https://fluentdev.vercel.app/glossary/validators) based on the amount of [cryptocurrency](https://fluentdev.vercel.app/glossary/cryptocurrency) they've committed to "stake" in the network. Validators lock up their coins as collateral, giving them the opportunity to validate transactions and earn rewards. If they act dishonestly, they risk losing their staked funds through a process called [slashing](https://fluentdev.vercel.app/glossary/slashing).

The key advantage of proof of stake is energy efficiency. Since validators don't need to compete using computational power, PoS blockchains consume dramatically less electricity than PoW networks. Ethereum's transition from proof of work to proof of stake in 2022 reduced its energy consumption by approximately 99%. PoS also enables faster transaction [finality](https://fluentdev.vercel.app/glossary/finality) and creates economic incentives for validators to act honestly, as their own capital is at risk.

> Proof of stake is like a security deposit system. Instead of using computing power to secure the network, people lock up their cryptocurrency as a guarantee of good behavior. The more you lock up, the more chances you get to validate transactions and earn rewards. If you cheat, you lose your deposit.

## How does PoS work?

In a PoS system, participants who want to become validators must first stake a minimum amount of the network's native cryptocurrency. For example, Ethereum requires validators to stake 32 [ETH](https://fluentdev.vercel.app/glossary/eth). Once staked, these validators enter a pool from which the [protocol](https://fluentdev.vercel.app/glossary/protocol) pseudo-randomly selects one to propose the next block. The selection probability is typically weighted by the amount staked. This means that validators with more at stake have higher chances of being chosen, though the exact mechanism varies by blockchain.

When selected, the validator proposes a new block containing pending transactions. Other validators then attest to the validity of this block. If the majority agrees the block is valid, it gets added to the blockchain.  The proposing validator receives a reward in the form of transaction fees and newly [minted](https://fluentdev.vercel.app/glossary/mint) coins. However, if a validator approves fraudulent transactions, goes offline repeatedly, or attempts to attack the network, they face penalties. The most severe penalty is slashing, where a portion or all of their staked cryptocurrency is destroyed.

The staking and penalty system creates strong economic incentives for honest behavior. Validators have "**skin in the game**". They've invested their own capital, which they'll lose if they act maliciously. This makes attacking the network extremely expensive, as bad actors would need to stake massive amounts of cryptocurrency, only to have it slashed when their dishonesty is detected.

> Think of proof of stake like a bidding system where your deposit determines your chances of being selected to do the work. The bigger your stake, the more likely you'll be chosen to validate the next batch of transactions. If you do the job correctly, you earn a reward. If you cheat or mess up, you lose some or all of your deposit. This system makes people play fair because they have their own money on the line.

## Using "proof of stake" in English

Here are common ways the term "proof of stake" appears in blockchain and cryptocurrency contexts:

### Comparing consensus mechanisms

When discussing different blockchain architectures, proof of stake is often contrasted with proof of work.

Structure: Blockchain/Network uses proof of stake + distinguishing feature

> Ethereum now uses **proof of stake**, which validates transactions through staked capital rather than computational power.

> Cardano was designed from the ground up as a **proof of stake** blockchain, prioritizing energy efficiency and scalability.

> Unlike Bitcoin's proof of work, **proof of stake** doesn't require expensive mining hardware to participate in consensus.

### Explaining staking requirements and validator participation

Understanding the entry requirements and process for becoming a validator is essential for network participants.

Structure: To participate in proof of stake + requirement/action

> To participate in Ethereum's **proof of stake** consensus, you need to stake 32 ETH and run validator software.

> **Proof of stake** allows anyone with the minimum stake to become a validator, democratizing network participation beyond industrial miners.

> In a **proof of stake** system, your influence over consensus is proportional to your staked holdings, not your computing power.

### Discussing environmental and economic benefits

Proof of stake's efficiency advantages are frequently highlighted in sustainability and scalability discussions.

Structure: Proof of stake advantage + comparison or impact

> **Proof of stake** dramatically reduces energy consumption compared to proof of work, making it a more sustainable option for blockchain networks.

> By replacing energy-intensive mining with **proof of stake**, Ethereum cut its carbon footprint by over 99%, addressing one of crypto's biggest criticisms.

> The economic security of **proof of stake** comes from validators risking their own capital, creating strong incentives against malicious behavior without wasting electricity.