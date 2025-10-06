export type GlossaryTerm = {
    term: string;
    definition: string;
    analogy?: string;
    learnMore?: string;
    lessonIds?: string[];
};


export const glossaryTerms: GlossaryTerm[] = [
    {
        term: "Gas",
        definition: "A unit that measures the amount of computational effort required to execute operations.",
        analogy: "Gas is like the fuel your car needs to run. Without it, the blockchain can't process your transactions.",
        lessonIds: ["explaining-technical-processes", "smart-contracts", "describing-smart-contract-functionality"],
        learnMore: ""
    },
    {
        term: "Signature",
        definition: "A cryptographic proof that an account authorized a transaction without revealing the private key.",
        analogy: "Like a unique stamp that proves ‘I agreed to this’ without showing your password.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "Nonce",
        definition: "A number that counts how many transactions an account has sent, preventing replay.",
        analogy: "Like a ticket number that must be in order, no skipping or reusing.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "EVM",
        definition: "Ethereum Virtual Machine. The computer that runs all smart contracts and processes transactions on Ethereum.",
        analogy: "Like the engine of Ethereum, it's what actually does the work when you send a transaction.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "Finality",
        definition: "When a transaction is permanently confirmed and cannot be reversed or changed.",
        analogy: "Like when concrete fully dries. Once it's final, you can't change it anymore.",
        lessonIds: ["explaining-technical-processes", "consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "Base Fee",
        definition: "The minimum gas price that all transactions must pay, burned by the network.",
        analogy: "Like a mandatory entry fee to use the Ethereum highway.",
        lessonIds: [],
        learnMore: ""
    },
    {
        term: "Priority Fee",
        definition: "An optional extra fee to incentivize validators to process your transaction faster.",
        analogy: "Like tipping a delivery driver to speed things up.",
        lessonIds: [],
        learnMore: ""
    },
    {
        term: "blob",
        definition: "A large data package used in Ethereum to store extra information more efficiently, introduced in EIP-4844.",
        analogy: "Like a suitcase you attach to a car to carry more stuff without slowing it down.",
        lessonIds: [],
        learnMore: ""
    },
    {
        term: "EIP",
        definition: "Ethereum Improvement Proposal is a formal suggestion for updating Ethereum’s protocol.",
        analogy: "Like submitting a proposal to improve the rules of a club everyone follows.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "Smart Contract",
        definition: "A self-executing program stored on the blockchain that runs when predefined conditions are met.",
        analogy: "Think of it as a vending machine that automatically dispenses snacks when you insert money.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "Blockchain",
        definition: "A type of distributed ledger where data is stored in blocks that are linked together and secured using cryptography.",
        analogy: "Think of it as a digital chain of sealed boxes, each containing a record of transactions, permanently linked to form a timeline.",
        lessonIds: ["blockchain-basics", "smart-contracts"],
        learnMore: "https://fluentdev.vercel.app/glossary/blockchain"
    },
    {
        term: "Cryptography",
        definition: "The practice of using mathematical techniques to secure data and communications from unauthorized access.",
        analogy: "Seals information with a secret code, only those with the right key can read or verify it.",
        lessonIds: ["blockchain-basics", "explaining-technical-processes", "cryptocurrency"],
        learnMore: "https://fluentdev.vercel.app/glossary/cryptography"
    },
    {
        term: "Externally-owned Account (EOA)",
        definition: "A regular Ethereum account controlled by a private key, allows users to send transactions.",
        analogy: "Like a bank account you manage with your password (private key).",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "State",
        definition: "The current data stored on the blockchain, such as balances, contract values, and the results of user actions.",
        analogy: "Like the memory of a game showing each player’s score and position right now.",
        lessonIds: ["describing-smart-contract-functionality"],
        learnMore: ""
    },
    {
        term: "ETH",
        definition: "Ethereum’s native cryptocurrency, used for payments and transaction fees.",
        analogy: "Like digital fuel or money used to power actions on the Ethereum network.",
        lessonIds: ["explaining-technical-processes", "consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "Hash Function",
        definition: "A function that transforms any input into a fixed-length string of characters, uniquely representing the original data.",
        analogy: "Works like a fingerprint for data: unique, tamper-evident, and impossible to reverse.",
        lessonIds: ["blockchain-basics"],
        learnMore: "https://fluentdev.vercel.app/glossary/hash-function"
    },
    {
        term: "Blocks",
        definition: "Units of data that hold a batch of transactions and are linked to form the blockchain.",
        analogy: "Each block is a page in a ledger book, permanently glued to the page before it.",
        lessonIds: ["blockchain-basics"],
        learnMore: "https://fluentdev.vercel.app/glossary/blocks"
    },
    {
        term: "Distributed Ledger Technology",
        definition: "A system where identical copies of a ledger are maintained across multiple computers (nodes) and updated collectively.",
        analogy: "Imagine a shared online spreadsheet that thousands of people update together, but no one can secretly change past entries.",
        lessonIds: ["blockchain-basics"],
        learnMore: "https://fluentdev.vercel.app/glossary/distributed-ledger-technology"
    },
    {
        term: "Nodes",
        definition: "Individual computers that participate in maintaining and verifying the blockchain network.",
        analogy: "Like librarians around the world, each keeping a synced copy of the same record book.",
        lessonIds: ["blockchain-basics", "describing-smart-contract-functionality"],
        learnMore: "https://fluentdev.vercel.app/glossary/nodes"
    },
    {
        term: "Consensus Mechanism",
        definition: "A protocol that allows a decentralized network of nodes to agree on a single version of truth.",
        analogy: "It’s a democratic process where a majority of participants must approve any new page before it’s added to the book.",
        lessonIds: ["blockchain-basics", "explaining-technical-processes"],
        learnMore: "https://fluentdev.vercel.app/glossary/consensus-mechanism"
    },
    {
        term: "Validators",
        definition: "Network participants who verify and add transactions to the blockchain under proof-of-stake.",
        analogy: "Like referees in a game who check that all the rules are followed.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "On-chain",
        definition: "Data or activity that is recorded directly on the blockchain.",
        analogy: "Like carving something into stone; it’s public and permanent.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "Layer-2",
        definition: "A blockchain or protocol that processes transactions off the main blockchain (Layer 1) while inheriting its security properties.",
        analogy: "Like building a second floor on a busy shop to serve more people without crowding the main floor.",
        lessonIds: ["explaining-technical-processes", "comparing-and-contrasting-protocols"],
        learnMore: ""
    },
    {
        term: "Rollup",
        definition: "A layer-2 solution that bundles many transactions and posts a summary to Ethereum for security.",
        analogy: "Like sending a group report to the teacher instead of turning in 100 individual papers.",
        lessonIds: [],
        learnMore: ""
    },
    {
        term: "Account Abstraction",
        definition: "A design upgrade that lets smart contracts act like wallets, allowing custom rules for transactions.",
        analogy: "Like programming your wallet to auto-pay bills or require multi-signatures.",
        lessonIds: [],
        learnMore: ""
    },
    {
        term: "Scalability",
        definition: "The blockchain’s ability to handle more users and transactions efficiently.",
        analogy: "Like widening a highway so more cars can drive without traffic jams.",
        lessonIds: ["consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "Public Key",
        definition: "A cryptographic key that allows others to send encrypted information or verify a digital signature.",
        analogy: "Think of it as your public address. Anyone can send you mail, but only you can open it with your private key.",
        lessonIds: ["blockchain-basics", "cryptocurrency"],
        learnMore: ""
    },
    {
        term: "ECDSA",
        definition: "Stands for Elliptic Curve Digital Signature Algorithm, the cryptographic method Ethereum uses for account keys and transaction signatures.",
        analogy: "Like a complex math lock used to prove who owns what without sharing secrets.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "Mempools",
        definition: "The waiting area where unconfirmed transactions sit before being added to the blockchain.",
        analogy: "Like a queue outside a nightclub. Transactions wait their turn to get in.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "Private Key",
        definition: "A secret cryptographic key that proves ownership and allows control of blockchain assets.",
        analogy: "This is your master password. Whoever holds it controls the funds or identity tied to that key.",
        lessonIds: ["blockchain-basics", "explaining-technical-processes", "cryptocurrency"],
        learnMore: ""
    },
    {
        term: "Wallet",
        definition: "A tool (software, hardware, or paper) that stores and manages your public/private key pair and interacts with the blockchain.",
        analogy: "It doesn’t hold money directly, it holds the keys to access it.",
        lessonIds: ["blockchain-basics", "comparing-and-contrasting-protocols"],
        learnMore: ""
    },
    {
        term: "Token",
        definition: "A digital unit of value or utility issued on a blockchain, often used to represent currency, rights, or access.",
        analogy: "Like arcade tokens. They have value in a specific environment and let you use certain machines or services.",
        lessonIds: ["blockchain-basics"],
        learnMore: ""
    },
    {
        term: "Decentralization",
        definition: "A system design where control and decision-making are distributed across many participants rather than held by a central authority.",
        analogy: "Like a community garden where everyone contributes and no single person is in charge of all decisions.",
        lessonIds: ["blockchain-basics", "types-of-blockchains"],
        learnMore: "https://fluentdev.vercel.app/glossary/decentralization"
    },
    {
        term: "Proof of Work",
        definition: "A consensus mechanism where participants compete to solve complex puzzles to validate transactions.",
        analogy: "Like a race where miners solve math problems, and the first to finish gets to write the next ledger page.",
        lessonIds: ["blockchain-basics", "types-of-blockchains"],
        learnMore: ""
    },
    {
        term: "Proof of Stake",
        definition: "A consensus mechanism where validators stake cryptocurrency as collateral and are pseudo-randomly selected to create blocks.",
        analogy: "Like a weighted lottery where you must buy tickets (stake) to enter, then winners are randomly chosen to validate.",
        lessonIds: ["blockchain-basics", "types-of-blockchains"],
        learnMore: ""
    },
    {
        term: "Proof of Authority",
        definition: "A consensus mechanism where only pre-approved, trusted validators can validate transactions and create blocks.",
        analogy: "Like a private club where only verified members can vote - faster but less decentralized.",
        lessonIds: ["blockchain-basics"],
        learnMore: ""
    },
    {
        term: "Transaction",
        definition: "An action initiated by an account on the blockchain, such as transferring ETH or calling a smart contract.",
        analogy: "Like sending a message or payment. Once sent, it can’t be undone and is recorded for everyone to see.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "Public blockchain",
        definition: "A blockchain network that is open to anyone for participation and viewing. No permission is required to read, write, or validate data.",
        analogy: "Think of a city square where anyone can show up, speak, and observe. Open and visible to all.",
        lessonIds: ["types-of-blockchains"],
        learnMore: ""
    },
    {
        term: "Private blockchain",
        definition: "A permissioned blockchain controlled by a single organization, with restricted access and centralized governance.",
        analogy: "Access works like an employee ID badge system. Only pre-approved users can participate or see the records.",
        lessonIds: ["types-of-blockchains"],
        learnMore: ""
    },
    {
        term: "Consortium blockchain",
        definition: "A blockchain shared and governed by a group of organizations, allowing collaboration without full decentralization.",
        analogy: "Imagine a project managed jointly by several companies, where decisions require input from all stakeholders.",
        lessonIds: ["types-of-blockchains"],
        learnMore: ""
    },
    {
        term: "Permissionless",
        definition: "A system that allows anyone to join and interact without needing approval or access rights.",
        analogy: "Similar to a public Wi-Fi hotspot, anyone with the right tools can connect and participate.",
        lessonIds: ["types-of-blockchains"],
        learnMore: ""
    },
    {
        term: "Permissioned",
        definition: "A system that requires explicit access rights to read, write, or validate data.",
        analogy: "Comparable to a locked building, only those with the right keys or clearance can enter or operate inside.",
        lessonIds: ["types-of-blockchains"],
        learnMore: ""
    },
    {
        term: "Consensus",
        definition: "The process by which blockchain nodes agree on the state of the ledger, ensuring everyone shares the same record of transactions.",
        analogy: "It’s the digital equivalent of getting everyone in a room to agree on what just happened, then writing it down permanently.",
        lessonIds: ["types-of-blockchains"],
        learnMore: ""
    },
    {
        term: "PBFT",
        definition: "Practical Byzantine Fault Tolerance. A consensus algorithm used in permissioned networks to reach agreement even if some nodes act maliciously.",
        analogy: "Functions like a jury decision where a majority can still reach a verdict, even if one or two members are disruptive.",
        lessonIds: ["types-of-blockchains"],
        learnMore: ""
    },
    {
        term: "DAO",
        definition: "A Decentralized Autonomous Organization. It is a community-led entity with no central authority, where decisions are made by members through token-based voting.",
        analogy: "Think of it as a digital co-op run by code, where members vote on proposals to guide the organization’s direction.",
        lessonIds: ["types-of-blockchains"],
        learnMore: ""
    },
    {
        term: "DeFi",
        definition: "Short for Decentralized Finance. It refers to blockchain-based financial applications that operate without traditional banks or intermediaries.",
        analogy: "It’s like rebuilding financial services (loans, exchanges, savings) using open-source software instead of relying on banks.",
        lessonIds: ["types-of-blockchains", "smart-contracts", "comparing-and-contrasting-protocols"],
        learnMore: ""
    },
    {
        term: "Sybil resistance",
        definition: "Techniques that prevent one participant from creating many fake identities to gain disproportionate influence over a blockchain network.",
        analogy: "Similar to checking photo IDs at the door so one person can’t sneak in under multiple disguises.",
        lessonIds: ["types-of-blockchains", "consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "NFT",
        definition: "Non-Fungible Token. A unique digital asset stored on a blockchain, often used to represent art, music, collectibles, or in-game items.",
        analogy: "Think of an NFT as a digital certificate of authenticity/ No two are exactly the same, even if they look similar.",
        lessonIds: ["types-of-blockchains", "smart-contracts", "cryptocurrency"],
        learnMore: ""
    },
    {
        term: "Governance",
        definition: "The system of rules and decision-making processes that determines how a blockchain evolves over time.",
        analogy: "Think of it as a rulebook that outlines who can make changes, how updates happen, and who has voting power.",
        lessonIds: ["types-of-blockchains"],
        learnMore: ""
    },
    {
        term: "Canonical",
        definition: "The version of the blockchain that is considered the official and accepted history by all nodes.",
        analogy: "Everyone agrees it's the final draft of the story, even if earlier versions existed.",
        lessonIds: ["consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "Throughput",
        definition: "The number of transactions a blockchain can process in a given amount of time, usually measured in transactions per second (TPS).",
        analogy: "Think of it as the lane capacity of a highway. The more lanes, the more traffic it can handle at once.",
        lessonIds: ["consensus-algorithms", "comparing-and-contrasting-protocols"],
        learnMore: ""
    },
    {
        term: "Hash",
        definition: "A fixed-length string generated by running data through a cryptographic function, used to verify integrity and order.",
        analogy: "Acts as a digital fingerprint. Any change to the input completely changes the result.",
        lessonIds: ["consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "Staking",
        definition: "Locking up cryptocurrency to participate in consensus and earn rewards, while risking penalties for dishonest behavior.",
        analogy: "It’s a security deposit for being honest. Break the rules, and part of your funds are taken.",
        lessonIds: ["consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "SOL",
        definition: "The native cryptocurrency of the Solana blockchain, used for staking, transaction fees, and governance.",
        analogy: "Acts as the fuel powering the Solana ecosystem.",
        lessonIds: ["consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "Slashing",
        definition: "A penalty mechanism that removes part or all of a validator’s staked tokens for malicious or faulty behavior.",
        analogy: "A way to financially punish validators for cheating or going offline when they’re needed.",
        lessonIds: ["consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "Epoch",
        definition: "A set period in a blockchain's timeline used to organize validator actions like voting or rotating roles.",
        analogy: "Functions like a school term. Validators have assignments, deadlines, and performance reviews.",
        lessonIds: ["consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "Timestamp",
        definition: "A recorded time marker used to order blockchain events or verify when a block or transaction occurred.",
        analogy: "Serves as a digital clock-in sheet that proves when something happened.",
        lessonIds: ["consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "GHOST",
        definition: "Greediest Heaviest Observed SubTree. Ethereum chain selection rule favoring the branch with the most validator votes (weight).",
        analogy: "Rather than choosing the longest road, the protocol chooses the one with the most people driving on it.",
        lessonIds: ["consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "Deterministic",
        definition: "A process whose outcome is guaranteed and predictable based on set rules, without randomness or probability.",
        analogy: "There’s only one correct answer every time, just like running a formula in a spreadsheet.",
        lessonIds: ["consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "Casper FFG",
        definition: "A finality gadget used in Ethereum’s Proof of Stake to finalize blocks through validator votes and checkpoints.",
        analogy: "Works like locking in a score after a round in a game—once enough players agree, it can’t be undone.",
        lessonIds: ["consensus-algorithms"],
        learnMore: ""
    },
    {
        term: "Atomicity",
        definition: "The guarantee that a smart contract’s execution either completes fully or not at all, with no partial changes.",
        analogy: "It’s like a light switch. You can’t leave it half-on. Either the whole operation succeeds or the system reverts everything.",
        lessonIds: ["smart-contracts"],
        learnMore: ""
    },
    {
        term: "Trustless",
        definition: "A system where participants don’t need to trust each other or a third party, because the rules are enforced by code.",
        analogy: "It’s like using a vending machine. You get what you paid for automatically, without needing to trust the owner.",
        lessonIds: ["smart-contracts"],
        learnMore: ""
    },
    {
        term: "Composability",
        definition: "The ability of smart contracts to interact with and build upon each other like modular components.",
        analogy: "Smart contracts behave like Lego bricks. You can snap them together to build more complex systems.",
        lessonIds: ["smart-contracts", "comparing-and-contrasting-protocols"],
        learnMore: ""
    },
    {
        term: "Gas Fee",
        definition: "The payment required to perform operations on a blockchain, used to compensate validators and limit computation.",
        analogy: "It’s like paying for postage. You must cover the cost to send data through the blockchain.",
        lessonIds: ["smart-contracts"],
        learnMore: ""
    },
    {
        term: "Immutable",
        definition: "A property of smart contracts that prevents them from being altered after deployment.",
        analogy: "Publishing a smart contract is like etching something in stone. You can’t edit it once it’s live.",
        lessonIds: ["smart-contracts", "describing-smart-contract-functionality"],
        learnMore: ""
    },
    {
        term: "Proxy Contract",
        definition: "A design pattern where a smart contract delegates calls to another contract, allowing for upgradability.",
        analogy: "Think of it as a receptionist who forwards all calls to a manager behind the scenes. You interact with one, but the real work happens elsewhere.",
        lessonIds: ["smart-contracts"],
        learnMore: ""
    },
    {
        term: "DEX",
        definition: "Short for Decentralized Exchange, a platform where users can swap tokens directly via smart contracts without intermediaries.",
        analogy: "A DEX is like a self-service currency exchange kiosk. You trade assets without needing a bank or broker.",
        lessonIds: ["smart-contracts"],
        learnMore: ""
    },
    {
        term: "Solidity",
        definition: "The most widely used programming language for writing smart contracts on Ethereum and EVM-compatible chains.",
        analogy: "Solidity is to Ethereum what JavaScript is to the web. It's the language that powers most of the apps.",
        lessonIds: ["smart-contracts"],
        learnMore: ""
    },
    {
        term: "Function",
        definition: "A block of code in a smart contract that performs a specific task when called.",
        analogy: "Functions are like buttons in an app. Press one, and something specific happens behind the scenes.",
        lessonIds: ["smart-contracts", "describing-smart-contract-functionality"],
        learnMore: ""
    },
    {
        term: "dApp",
        definition: "Short for decentralized application, a dApp is a program that runs on a blockchain using smart contracts instead of centralized servers.",
        analogy: "A dApp is like a web app, but instead of using a company’s backend, it runs entirely on public infrastructure and is controlled by users, not corporations.",
        lessonIds: ["smart-contracts", "comparing-and-contrasting-protocols"],
        learnMore: ""
    },
    {
        term: "Oracle",
        definition: "A service that provides external data to a smart contract, allowing it to interact with the outside world.",
        analogy: "Oracles act like a messenger. They deliver real-world information, like prices or weather, to blockchain contracts that can’t see beyond their own network.",
        lessonIds: ["smart-contracts"],
        learnMore: ""
    },
    {
        term: "cryptocurrency",
        definition: "A digital form of money that uses cryptography and blockchain technology instead of central banks to manage transactions and supply.",
        analogy: "Think of it as programmable money that travels across the internet without needing a bank.",
        lessonIds: ["cryptocurrency"],
        learnMore: ""
    },
    {
        term: "mint",
        definition: "The process of creating new units of cryptocurrency or tokens and adding them to circulation, usually through a smart contract.",
        analogy: "Similar to issuing new coins, but controlled by code instead of a central mint.",
        lessonIds: ["cryptocurrency"],
        learnMore: ""
    },
    {
        term: "stablecoin",
        definition: "A type of cryptocurrency designed to keep a stable value, often pegged to a fiat currency like the US dollar.",
        analogy: "Acts as a digital version of a dollar, useful for trading or saving without price swings.",
        lessonIds: ["cryptocurrency"],
        learnMore: ""
    },
    {
        term: "USDC",
        definition: "A popular stablecoin backed 1:1 by U.S. dollars held in reserve, designed to maintain a consistent value of $1.",
        analogy: "Moves like cryptocurrency, but stays steady like cash in your wallet.",
        lessonIds: ["cryptocurrency"],
        learnMore: ""
    },
    {
        term: "DAI",
        definition: "A decentralized stablecoin backed by crypto assets like ETH, designed to stay close to $1 using smart contracts and overcollateralization.",
        analogy: "Operates like an algorithmic vault that keeps its value stable using crypto as collateral.",
        lessonIds: ["cryptocurrency"],
        learnMore: ""
    },
    {
        term: "protocol",
        definition: "A protocol is a set of rules that define how data is shared or transactions are executed on a blockchain.",
        analogy: "Think of a protocol like the rules of a board game—everyone needs to follow the same rules for the game to work.",
        lessonIds: ["comparing-and-contrasting-protocols"]
    },
    {
        term: "altcoin",
        definition: "Altcoin stands for 'alternative coin' and refers to any cryptocurrency other than Bitcoin.",
        analogy: "If Bitcoin is like the first smartphone, altcoins are all the other models that came after, offering different features.",
        lessonIds: ["comparing-and-contrasting-protocols"]
    },
    {
        term: "layer-1",
        definition: "Layer-1 refers to the base blockchain network, such as Ethereum or Solana, which processes and finalizes transactions on its own.",
        analogy: "Layer-1 is like the highway. It’s the main road all cars drive on, while Layer-2s are like side roads that help reduce traffic.",
        lessonIds: ["comparing-and-contrasting-protocols"]
    },
    {
        term: "testnet",
        definition: "A blockchain network used for testing new features, contracts, or applications without real assets.",
        analogy: "A safe playground where developers can experiment before going live.",
        lessonIds: ["expressing-opinions-and-uncertainty"],
        learnMore: ""
    },
    {
        term: "mainnet",
        definition: "The primary blockchain network where real transactions and assets are recorded and transferred.",
        analogy: "The official highway where real money and vehicles are in motion.",
        lessonIds: ["expressing-opinions-and-uncertainty"],
        learnMore: ""
    },
    {
        term: "attack vector",
        definition: "A method or pathway that a hacker can use to exploit a system or smart contract.",
        analogy: "A hidden door that attackers can find and sneak through.",
        lessonIds: ["expressing-opinions-and-uncertainty"],
        learnMore: ""
    },
    {
        term: "hard fork",
        definition: "A permanent and incompatible change to a blockchain’s rules that splits the network into two versions.",
        analogy: "A road that splits in two directions, forcing travelers to choose one and leave the other behind.",
        lessonIds: ["expressing-opinions-and-uncertainty"],
        learnMore: ""
    },
    {
        term: "soft fork",
        definition: "A backward-compatible upgrade to a blockchain protocol that tightens existing rules without splitting the chain.",
        analogy: "A software update that works with older systems but adds stricter controls.",
        lessonIds: ["expressing-opinions-and-uncertainty"],
        learnMore: ""
    },
    {
        term: "UI",
        definition: "Short for User Interface; the visual elements and layout that users interact with in an app or website.",
        analogy: "The dashboard and controls you see when driving a car, how you interact with the system.",
        lessonIds: ["expressing-opinions-and-uncertainty"],
        learnMore: ""
    },
    {
        term: "security audit",
        definition: "A professional review of a smart contract or system to detect bugs, vulnerabilities, or design flaws.",
        analogy: "A detailed inspection before a product is released to ensure it won’t break under pressure.",
        lessonIds: ["expressing-opinions-and-uncertainty"],
        learnMore: ""
    },
    {
        term: "vulnerabilities",
        definition: "Weak points in a smart contract or system that can be exploited by attackers.",
        analogy: "Cracks in the foundation that make a structure unsafe.",
        lessonIds: ["expressing-opinions-and-uncertainty"],
        learnMore: ""
    },
    {
        term: "contract logic",
        definition: "The programmed rules and conditions that determine how a smart contract behaves.",
        analogy: "The instruction manual that tells a vending machine when to release a snack.",
        lessonIds: ["expressing-opinions-and-uncertainty"],
        learnMore: ""
    },
    {
        term: "Multisig",
        definition: "A type of wallet or contract that requires multiple private key signatures to authorize a transaction.",
        analogy: "A shared vault that can only be opened when several trusted keyholders turn their keys together.",
        lessonIds: ["describing-smart-contract-functionality"],
        learnMore: ""
    },
    {
        term: "Oracle Network",
        definition: "A system that delivers real-world data to smart contracts so they can respond to external events.",
        analogy: "A relay team that brings reliable information from the outside world into the blockchain stadium.",
        lessonIds: ["describing-smart-contract-functionality"],
        learnMore: ""
    },
    {
        term: "Cryptographic Proofs",
        definition: "Mathematical evidence used to verify that a statement is true without revealing sensitive information.",
        analogy: "Showing you’ve solved a puzzle without giving away the solution itself.",
        lessonIds: ["describing-smart-contract-functionality"],
        learnMore: ""
    },
    {
        term: "Mapping",
        definition: "A data structure in smart contracts that links keys to corresponding values, similar to a dictionary.",
        analogy: "A locker system where each name is assigned a specific compartment with stored information.",
        lessonIds: ["describing-smart-contract-functionality"],
        learnMore: ""
    }

].sort((a, b) => a.term.localeCompare(b.term));

// Helper function to get terms for a lesson:
export function getTermsByLesson(lessonId: string): GlossaryTerm[] {
    return glossaryTerms.filter(term =>
        term.lessonIds?.includes(lessonId)
    );
}




