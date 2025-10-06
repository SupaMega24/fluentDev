---
title: "What is a Public Key in Blockchain?"
description: "Learn what a public key is, how it works in blockchain, its role in securing transactions, and how it differs from a wallet address."
---

## What is a public key?

A **public key** is a [cryptographic](https://fluentdev.vercel.app/glossary/cryptography) code that acts like a digital address. It allows others to send you encrypted information or verify your [digital signatures](https://fluentdev.vercel.app/glossary/signature). Public keys are part of **asymmetric encryption**, where two different but mathematically linked keys are used. These two are known as  public key and a [private key](https://fluentdev.vercel.app/glossary/private-key).  

While the private key must be kept secret, the public key can be shared openly. It’s what others use to verify that a message, [transaction](https://fluentdev.vercel.app/glossary/transaction), or signature truly came from you. In [blockchain](https://fluentdev.vercel.app/glossary/blockchain) networks, public keys are used to create [wallet](https://fluentdev.vercel.app/glossary/wallet) addresses and confirm digital signatures that secure transactions.

> Think of your public key like your email address. Anyone can use it to send you a message. But only you, with your private key (your password), can open that message or prove it came from you.

## How does a public key work?

Public keys work through **public key cryptography**, also known as **asymmetric encryption**. Most blockchains rely on **elliptic curve cryptography (ECC)**, which uses the mathematics of elliptic curves to create secure key pairs that are small in size but extremely difficult to break.

Here’s how it works:

1. A pair of keys, public and private, are generated using ECC.  
2. The public key is mathematically derived from the private key but cannot be reversed.  
3. When someone sends encrypted data or verifies a digital signature, they use your public key.  
4. Only your private key can decrypt or generate valid signatures linked to that public key.

This system enables both **encryption** (protecting data) and **authentication** (proving identity) without ever revealing your private key.

> Your public key is like a locked mailbox. Anyone can drop a letter inside (encrypt a message), but only you have the key to open it.

## Role of public key in blockchain

In blockchains, public keys are essential for maintaining **trust and security** without a central authority. 

- When you send a transaction, it’s **digitally signed** with your private key.  
- Other [nodes](https://fluentdev.vercel.app/glossary/nodes) use your **public key** to verify that the transaction is authentic and hasn’t been altered.  
- The public key also helps generate your **wallet address**, a shorter and more user-friendly version of your public key.  

This process ensures that every action on the blockchain can be verified — but not forged — making the system secure and transparent.

> Your public key is your blockchain ID card. It proves you’re the one making a transaction, without revealing your personal information.

## Public key vs wallet address

A **wallet address** is a simplified, hashed version of your **public key**. While they’re closely related, they serve different purposes:  

| Term               | Function                                                                   | Visibility                     | Example                                      |
| ------------------ | -------------------------------------------------------------------------- | ------------------------------ | -------------------------------------------- |
| **Public Key**     | Used to verify digital signatures and encrypt messages                     | Usually not displayed directly | A long alphanumeric string derived using ECC |
| **Wallet Address** | Derived (hashed) from the public key and used for sending/receiving crypto | Publicly shared                | A shorter address like `0x742d35Cc...`       |

Using a wallet address instead of a full public key adds privacy and reduces the risk of certain attacks, since the public key itself isn’t directly exposed until needed for verification.

> Your wallet address is like your nickname — it points to your public key, but hides the long technical details behind it.

## Using “public key” in English

Here are some common ways the term “public key” appears in blockchain and cybersecurity contexts:

> Each wallet is generated from a unique **public-private key pair**.  

> The **public key** is shared so others can verify digital signatures. 
 
> Transactions are authenticated using **public key cryptography**. 

> A **public key** is derived from the private key using elliptic curve cryptography (ECC). 

> A **public key infrastructure (PKI)** manages digital certificates and key distribution for secure communication.


