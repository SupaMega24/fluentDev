---
title: "What Are Stablecoins? USDC, USDT, and DAI Explained"
description: "Learn how stablecoins like USDC, USDT, and DAI maintain a stable $1 value on the blockchain through reserves and collateralization, bridging traditional finance and crypto."
---

## The Decentralized Bean

Before we dive in to the technical explainer, check out this story about **The Decentralized Bean** to get a clear and simply example of how stablecoins can benefit a buisness. 

👉 [The Merchant's Dilemma: A Story About Stablecoins](https://www.patreon.com/posts/merchants-story-144434475)

The story also highlights how USDC, USDT, and DAI differ in how they are backed. 

## What are stablecoins?

While [Maria's coffee shop](https://www.patreon.com/posts/merchants-story-144434475) illustrates the problem stablecoins solve, let's explore how these digital assets actually maintain their value and why they've become essential infrastructure in the crypto ecosystem.

A **stablecoin** is a [cryptocurrency](https://fluentdev.vercel.app/glossary/cryptocurrency) designed to maintain a stable value relative to a reference asset, typically the US dollar. Unlike **Bitcoin** or **Ether**, which can swing wildly in price, stablecoins aim to stay at a consistent 1:1 ratio with their peg. One [USDC](https://fluentdev.vercel.app/glossary/usdc) should always equal one US dollar, one EURC should equal one Euro, and so on.

Stablecoins solve a fundamental problem in cryptocurrency: volatility. While [blockchain](https://fluentdev.vercel.app/glossary/blockchain) technology offers benefits like fast settlement, low fees, and global accessibility, price instability makes traditional cryptocurrencies impractical for everyday transactions, business operations, and financial contracts. Stablecoins provide the stability of fiat currency with the advantages of blockchain technology.

They've become critical infrastructure for the crypto ecosystem. Traders use them as a safe haven during market downturns. DeFi protocols use them for lending and borrowing. Businesses use them for payments and treasury management. International workers use them for remittances. Stablecoins are the on-ramp, off-ramp, and highway of crypto commerce.

> Stablecoins are cryptocurrencies that are designed to always be worth $1 (or another fixed amount). They combine the best of both worlds. The speed and efficiency of blockchain with the predictable value of traditional money. This makes them useful for everything from buying coffee to building complex financial applications.

## How do stablecoins work?

The key challenge for any stablecoin is maintaining its peg, keeping the value stable despite market forces. Different stablecoins use different mechanisms to achieve this. Let's look at the two main approaches.

### Fiat-backed stablecoins: USDC and USDT

Fiat-backed stablecoins are the most straightforward type. They work like digital claim tickets for real currency held in reserve.

**USDC (USD Coin)** is issued by [Circle](https://www.circle.com/transparency), a regulated financial company. For every USDC token in circulation, Circle holds one US dollar in reserve, typically in bank accounts or short-term US Treasury bonds. When someone wants to create new USDC, they deposit dollars with Circle. Circle then mints an equivalent amount of USDC tokens and sends them to the user's [wallet](https://fluentdev.vercel.app/glossary/wallet). When someone wants to redeem their USDC, they send the tokens back to Circle, which destroys (burns) them and returns the corresponding dollars.

Circle publishes regular attestation reports from accounting firms verifying that the reserves match the circulating supply. This transparency helps maintain trust that each USDC is truly backed by a real dollar.

**USDT (Tether)** operates similarly but with some key differences. Issued by [Tether](https://tether.to/en/transparency/?tab=usdt), USDT is the oldest and most widely used stablecoin by trading volume. Like USDC, it's backed by reserves. However, Tether has faced more scrutiny about the exact composition and verification of those reserves. Despite controversies, USDT remains dominant in crypto markets, particularly for trading pairs on exchanges.

The strength of fiat-backed stablecoins is their simplicity and direct backing. The weakness is centralization. You must trust the issuing company to actually hold the reserves and honor redemptions.

### Crypto-collateralized stablecoins: DAI

**DAI** takes a completely different approach. Instead of being backed by dollars in a bank, DAI is backed by cryptocurrency locked in [smart contracts](https://fluentdev.vercel.app/glossary/smart-contract). It's issued by the [MakerDAO](https://makerdao.com/en/) protocol, a decentralized autonomous organization.

Here's how it works: Users lock up crypto assets (primarily ETH) as collateral in MakerDAO's smart contracts. Because crypto is volatile, the system requires over-collateralization. This is typically around 150% or more. So to generate $100 worth of DAI, you might need to lock up $150 worth of ETH.

Why would someone do this? It provides liquidity without selling. If you own ETH and believe it will increase in value long-term, but you need money now, you can lock your ETH and borrow DAI against it. You get stable currency to use while maintaining exposure to your ETH investment.

The system maintains DAI's $1 peg through several mechanisms. If your collateral drops too much in value (say your $150 of ETH falls to $120), the system automatically liquidates some of your collateral to ensure DAI remains backed. There's also a "stability fee" (essentially interest) that encourages people to pay back their DAI and reclaim their collateral, reducing supply when DAI trades above $1.

Everything happens [on-chain](https://fluentdev.vercel.app/glossary/on-chain) through smart contracts that anyone can audit. No company controls the reserves. The collateral is held transparently in smart contracts, and the rules are enforced by code rather than trusted intermediaries.

The strength of crypto-collateralized stablecoins is [decentralization](https://fluentdev.vercel.app/glossary/decentralization) and transparency. The weakness is complexity and capital inefficiency. You need to lock up more value than you get out.

> Stablecoins stay stable through backing. Fiat-backed stablecoins like USDC and USDT work like a coat check. You deposit real dollars, get tokens, and can redeem them later for dollars. A company holds the reserves and manages the process. Crypto-backed stablecoins like DAI work differently. You lock up cryptocurrency (more than the stablecoins you create) in a smart contract, which automatically enforces the rules and liquidates collateral if needed. No company is required; it's all managed by transparent smart contracts.

