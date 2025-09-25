---
title: "What are Blocks in Blockchain?"
description: "Learn about blockchain blocks and how it works."
---


## What are blocks in blockchain?


A block is like a digital container that stores data on a [blockchain](https://fluentdev.vercel.app/glossary/blockchain). Most of the time, this data is a collection of [transactions](https://fluentdev.vercel.app/glossary/transaction), but blocks can also hold other information, depending on the blockchain. Think of it as a page in a shared notebook. Once the page is full, it is sealed and added to the notebook in permanent order. Everyone in the network has a copy of this notebook, which keeps the record open and trustworthy.


Imagine a blockchain as an endlessly growing tower of Lego bricks. Each brick is a block. You can keep adding new bricks on top forever, as long as you follow the rules for how they connect. Some bricks are special, like the very first one at the bottom, and occasionally a brick doesn’t fit and gets set aside. But overall, the tower keeps getting taller with every new addition.


## How are blocks made?


Blocks are created when transactions are grouped together and validated. Here's how it works:


- Transactions are collected into a block.  


- The block is verified by the network:


  - On blockchains that use Proof-of-Work [(PoW)](https://fluentdev.vercel.app/glossary/proof-of-work), miners compete to solve complex puzzles.
   The winner earns the right to add the next block.  


  - On Proof-of-Stake [(PoS)](https://fluentdev.vercel.app/glossary/proof-of-stake) chains, validators stake ETH for the right to propose and approve new blocks.  


- Each new block is added to the blockchain with:  


  - A cryptographic [hash](https://fluentdev.vercel.app/glossary/hash) of its own data  


  - The hash of the previous block stored in its header


- Blocks are linked together:  


  - Each block points to the one before it, forming a secure chain.


  - If anyone tries to change an earlier block, the hashes no longer match, and the network immediately detects the tampering.


This process locks each block into the chain permanently, making the blockchain tamper-resistant and trustworthy.


## Structure of a block


A block usually has two main parts:


- **Block header** – holds metadata like the timestamp, the block number, and the hash of the previous block.


- **Block body** – holds the list of transactions or other recorded data.


The block header is like the title page of a chapter, giving essential information. The block body is the actual content, showing what was written at that point in time.


## Three types of blocks


Not all blocks serve the same purpose. The three main types are:


- **Genesis block** – the very first block of a blockchain. It is unique because it has no block before it.


- **Valid blocks** – the standard blocks that contain transactions and are properly verified by the network.


- **Orphan blocks** – blocks that were created but not included in the main chain, often because two blocks were mined at nearly the same time and the network only chose one to continue the chain.


## How many blocks can be in a chain?


In theory, there is no maximum number of blocks in a blockchain. As long as the network keeps running, new blocks will keep being added. For example, Bitcoin has already added hundreds of thousands of blocks since 2009, and the count continues to rise. The only limit is how quickly new blocks are produced, which depends on the chain’s block time.


## Using 'block' in English


### Block


The word **block** is a noun. In blockchain, it refers to a package of transaction data.


> Each **block** contains a set of verified transactions.


### Blockchain block


The phrase **blockchain block** is a noun phrase. It specifies that the block belongs to a blockchain.


> A **blockchain block** includes a header, a timestamp, and a hash of the previous block.


### Block header


The phrase **block header** is a noun phrase. It refers to the metadata section of a block, containing identifying information.


> The **block header** secures the link between blocks in the chain.


### Block size


The phrase **block size** is a noun phrase. It refers to the amount of data that a block can hold.


> Bitcoin’s **block size** is limited to 1 megabyte, which affects how many transactions fit into a block.


### Block height


The phrase **block height** is a noun phrase. It refers to the position of a block in the blockchain, starting from the genesis block.


> The network recently reached a **block height** of one million.


### Genesis block


The phrase **genesis block** is a noun phrase. It refers to the very first block of a blockchain.


> Bitcoin’s **genesis block** was mined by Satoshi Nakamoto in 2009.


### Block explorer


The phrase **block explorer** is a noun phrase. It refers to an online tool that allows users to view blocks, transactions, and wallet addresses.


> You can use a **block explorer** to verify if your transaction has been confirmed.


### Block reward


The phrase **block reward** is a noun phrase. It refers to the incentive given to miners or validators for creating a new block.


> Each mined block provides a **block reward** of newly issued coins plus transaction fees.


### Block time


The phrase **block time** is a noun phrase. It refers to the average amount of time it takes for a new block to be added to the chain.


> Ethereum’s average **block time** is around 12 seconds.