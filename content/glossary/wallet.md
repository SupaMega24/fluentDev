---
title: "What is a Cryptocurrency Wallet?"
description: "Learn what a crypto wallet is, how it works, different types of wallets, their use cases, and examples of popular wallet options."
---

## What is a cryptocurrency wallet?

A **cryptocurrency wallet** is a digital tool that stores your [private keys](https://fluentdev.vercel.app/glossary/private-key) and allows you to interact with [blockchain](https://fluentdev.vercel.app/glossary/blockchain) networks. Despite the name, a crypto wallet doesn't actually store your [cryptocurrency](https://fluentdev.vercel.app/glossary/cryptocurrency). Your [tokens](https://fluentdev.vercel.app/glossary/token) (coins) exist as records on the blockchain. Instead, the wallet stores the [cryptographic](https://fluentdev.vercel.app/glossary/cryptography) keys that prove you own those coins and give you the ability to send them.

Think of it like this: your cryptocurrency is recorded in a giant public ledger that everyone can see. Your wallet holds the secret password ([private key](https://fluentdev.vercel.app/glossary/private-key)) that lets you access and move your portion of that ledger. Without the wallet, you can't prove ownership or make [transactions](https://fluentdev.vercel.app/glossary/transaction), even though the coins technically exist on the blockchain.

Wallets come in many forms such as apps on your phone, programs on your computer, physical hardware devices, or even paper printouts. But they all serve the same fundamental purpose: securely managing your private keys so you can send, receive, and manage your digital assets.

> A crypto wallet is like a keychain that holds all your digital keys. The money itself lives in a giant public vault (the blockchain) that everyone can see, but only your keys can unlock your specific section. The wallet is just the secure place where you keep those keys.

## How does a crypto wallet work?

Crypto wallets work by managing your **private keys** and [public keys](https://fluentdev.vercel.app/glossary/public-key) to interact with blockchain networks. When you "create a wallet," you're actually generating a new key pair using **elliptic curve cryptography (ECC)**.

Here's what happens when you use a wallet:

**Receiving cryptocurrency:**  
Your wallet generates a **wallet address** (derived from your public key) that you share with others. When someone sends you crypto, they create a transaction on the blockchain that says "this amount now belongs to whoever has the private key for this address." Your wallet monitors the blockchain and shows you the balance associated with your addresses.

**Sending cryptocurrency:**  
When you want to send crypto, your wallet creates a transaction with the recipient's address and the amount. Before broadcasting this to the network, your wallet uses your **private key** to create a [digital signature](https://fluentdev.vercel.app/glossary/signature) that proves you authorized this transaction. The blockchain network verifies this signature using your public key, confirms you have sufficient funds, and then records the transaction.

**Key management:**  
Most modern wallets use a **seed phrase** (12-24 words) to generate all your private keys. This seed phrase is the master backup. If you lose your device, you can restore all your keys and access your funds using just those words. The wallet software handles the complex cryptography in the background, so you only need to remember one seed phrase instead of managing dozens of individual private keys.

**Security:**  
The wallet's primary job is keeping your private keys secure. Different wallet types do this in different ways. Some store keys on your device, others on specialized hardware, and some let companies hold the keys for you. The security level depends entirely on how and where those private keys are stored.

> Your wallet is like a secure keyring with a photocopier. It keeps your secret keys safe, makes copies of your public "mailing address" to give to others, and signs your transactions with your secret signature so everyone knows they're legitimate. All the complicated math happens behind the scenes. You just click "send" or "receive."

## Types of crypto wallets

Crypto wallets can be categorized in several ways. These categories often overlap. For example, a wallet can be both hot and non-custodial. Here are the main types:

**Hot wallets:**  
Wallets connected to the internet. They're convenient for frequent transactions but more vulnerable to hacking. Examples include mobile apps, browser extensions, and web-based wallets.

**Cold wallets:**  
Wallets that stay offline and aren't connected to the internet. They're more secure because hackers can't access them remotely. Examples include hardware wallets and paper wallets.

**Hardware wallets:**  
Physical devices (like USB drives) that store your private keys offline. They're considered one of the most secure options because the keys never leave the device, even when you connect it to make transactions.

**Software wallets:**  
Applications on your computer or phone that store your keys digitally. They're more convenient but potentially vulnerable if your device gets malware or is hacked.

**Custodial wallets:**  
Services where a company (like an exchange) holds your private keys for you. You log in with a username and password, but you don't directly control the keys. The advantage is convenience; the disadvantage is you're trusting the company to secure your funds.

**Non-custodial wallets:**  
Wallets where you control your own private keys. You're fully responsible for security, but you have complete ownership. This is what "not your keys, not your crypto" refers to.

**How these overlap:**  
A single wallet can fit multiple categories. For example:

- MetaMask is hot (internet-connected), software (browser extension), and non-custodial (you control the keys)  
- Coinbase exchange wallet is hot (online), software (web-based), and custodial (Coinbase holds the keys)  
- Ledger is cold (offline storage), hardware (physical device), and non-custodial (you control the keys)

These categories answer different questions: Is it connected to the internet? (hot/cold) Is it a physical thing or software? (hardware/software) Who holds the keys? (custodial/non-custodial) Mix and match these attributes to understand what kind of wallet you're using.

## Wallet use cases

Different situations call for different types of wallets:

**Daily transactions:**  
Hot wallets like mobile apps are ideal for everyday spending like buying coffee, tipping creators, or making quick payments. You keep small amounts here, similar to cash in your physical wallet.

**Storing and trading NFTs:**  
Software wallets with browser extensions (like MetaMask) let you easily connect to non-fungible token ([NFT](https://fluentdev.vercel.app/glossary/nft)) marketplaces to buy, sell, and display your digital collectibles. Many NFT platforms integrate directly with these wallets.

**Participating in DeFi:**  
Decentralized finance ([DeFi](https://fluentdev.vercel.app/glossary/defi)) applications require non-custodial wallets that can connect to [smart contracts](https://fluentdev.vercel.app/glossary/smart-contract). Hot software wallets are commonly used for lending, borrowing, [staking](https://fluentdev.vercel.app/glossary/staking), and trading on decentralized exchanges ([DEXs](https://fluentdev.vercel.app/glossary/dex)).

**Playing blockchain games:**  
Gaming wallets need frequent transaction capability to interact with game assets, characters, and in-game economies. Hot wallets work best since you're constantly sending and receiving items.

**Attending virtual events and communities:**  
Many blockchain-based communities and virtual events use wallet addresses as proof of membership or tickets. A simple hot wallet lets you prove ownership and participate.

**Long-term storage (HODLing):**  
For large amounts you plan to hold long-term, cold hardware wallets provide maximum security. Think of them as your savings account. Not for daily use, but for protecting significant value.

> Use hot wallets for your spending money and daily activities. Use cold wallets for your savings. It's the same principle as carrying $50 in your pocket but keeping your life savings in a bank vault.

## Examples of crypto wallets

Here are five popular wallets representing different types:

**MetaMask**  
Hot, software (browser extension/mobile app), non-custodial  
→ Most popular wallet for Ethereum and connecting to dApps, NFT platforms, and DeFi

**Ledger Nano X**  
Cold, hardware (physical device), non-custodial  
→ Secure hardware wallet for long-term storage, supports multiple cryptocurrencies

**Trust Wallet**  
Hot, software (mobile app), non-custodial  
→ User-friendly mobile wallet with built-in dApp browser and wide crypto support

**Coinbase Wallet** (not Coinbase exchange)  
Hot, software (mobile app), non-custodial  
→ Simple wallet for beginners, separate from Coinbase exchange accounts

**Coinbase/Binance Exchange Wallets**  
Hot, software (web-based), custodial  
→ Convenient for trading but the exchange controls your keys; not recommended for long-term storage

## Using "wallet" in English

Here are common ways the term "wallet" appears in blockchain and cryptocurrency contexts:

**Connecting your wallet to access dApps**

When you want to use a decentralized application or NFT marketplace, you need to link your wallet so the site can interact with your address and request transaction approvals.

Structure: Connect your wallet \+ to access/use \[service\]

> Connect your **wallet** to access this dApp.  

> You need to connect your **wallet** to buy NFTs on OpenSea.

**Sharing your address to receive payments**

When someone needs to send you cryptocurrency, you give them your wallet address \- the public identifier derived from your public key.

Structure: What's your wallet address \+ so I can \[action\]

> What's your **wallet address** so I can send you payment? 

> Drop your **wallet address** and I'll send you the token.

**Securing your wallet backup**

Your seed phrase is the master backup that can restore all your keys. It must be stored safely offline.

Structure: Back up your wallet's seed phrase \+ storage instruction

> Make sure you back up your **wallet's seed phrase** and store it safely.  

> Write down your **wallet's seed phrase** on paper and keep it in a secure location.

**Choosing wallet types for security**

Different wallet types offer different security levels. Cold wallets provide maximum security for long-term holdings.

Structure: Use \[wallet type\] \+ for \[purpose\]

> I keep most of my crypto in a **cold wallet** for security.   

> Use a **hardware wallet** for storing large amounts long-term.

**Understanding wallet custody**

Non-custodial wallets mean you control your own private keys, following the principle "not your keys, not your crypto."

Structure: \[Wallet type\] gives you \+ control/responsibility

> With a **non-custodial wallet**, you have full control of your private keys. 

> A **custodial wallet** means the exchange holds your keys for you.
