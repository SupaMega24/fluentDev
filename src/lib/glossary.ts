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
        analogy: "Gas is like the fuel your car needs to run — without it, the blockchain can't process your transactions.",
        lessonIds: ["explaining-technical-processes"],
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
        analogy: "Like a ticket number that must be in order—no skipping or reusing.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "EVM",
        definition: "The computer that runs all smart contracts and processes transactions on Ethereum.",
        analogy: "Like the engine of Ethereum—it's what actually does the work when you send a transaction.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "Finality",
        definition: "When a transaction is permanently confirmed and cannot be reversed or changed.",
        analogy: "Like when concrete fully dries—once it's final, you can't change it anymore.",
        lessonIds: ["explaining-technical-processes"],
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
        definition: "Ethereum Improvement Proposal—a formal suggestion for updating Ethereum’s protocol.",
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
        lessonIds: ["blockchain-basics"],
        learnMore: ""
    },
    {
        term: "Cryptography",
        definition: "The practice of using mathematical techniques to secure data and communications from unauthorized access.",
        analogy: "Seals information with a secret code—only those with the right key can read or verify it.",
        lessonIds: ["blockchain-basics", "explaining-technical-processes"],
        learnMore: ""
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
        definition: "The current data stored on the blockchain, such as balances, contract values, and user actions.",
        analogy: "Like the memory of a game showing each player’s score and position right now.",
        lessonIds: [],
        learnMore: ""
    },
    {
        term: "ETH",
        definition: "Ethereum’s native cryptocurrency, used for payments and transaction fees.",
        analogy: "Like digital fuel or money used to power actions on the Ethereum network.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "Hash Function",
        definition: "A function that transforms any input into a fixed-length string of characters, uniquely representing the original data.",
        analogy: "Works like a fingerprint for data—unique, tamper-evident, and impossible to reverse.",
        lessonIds: ["blockchain-basics"],
        learnMore: ""
    },
    {
        term: "Blocks",
        definition: "Units of data that hold a batch of transactions and are linked to form the blockchain.",
        analogy: "Each block is a page in a ledger book, permanently glued to the page before it.",
        lessonIds: ["blockchain-basics"],
        learnMore: ""
    },
    {
        term: "Distributed Ledger Technology (DLT)",
        definition: "A system where identical copies of a ledger are maintained across multiple computers (nodes) and updated collectively.",
        analogy: "Imagine a shared online spreadsheet that thousands of people update together—but no one can secretly change past entries.",
        lessonIds: ["blockchain-basics"],
        learnMore: ""
    },
    {
        term: "Nodes",
        definition: "Individual computers that participate in maintaining and verifying the blockchain network.",
        analogy: "Like librarians around the world, each keeping a synced copy of the same record book.",
        lessonIds: ["blockchain-basics"],
        learnMore: ""
    },
    {
        term: "Consensus Mechanism",
        definition: "A protocol that allows a decentralized network of nodes to agree on a single version of truth.",
        analogy: "It’s a democratic process where a majority of participants must approve any new page before it’s added to the book.",
        lessonIds: ["blockchain-basics", "explaining-technical-processes"],
        learnMore: ""
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
        analogy: "Like carving something into stone—it’s public and permanent.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "Layer-2",
        definition: "A blockchain built on top of Ethereum to handle transactions faster and cheaper.",
        analogy: "Like building a second floor on a busy shop to serve more people without crowding the main floor.",
        lessonIds: ["explaining-technical-processes"],
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
        lessonIds: [],
        learnMore: ""
    },
    {
        term: "Public Key",
        definition: "A cryptographic key that allows others to send encrypted information or verify a digital signature.",
        analogy: "Think of it as your public address—anyone can send you mail, but only you can open it with your private key.",
        lessonIds: ["blockchain-basics"],
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
        analogy: "Like a queue outside a nightclub—transactions wait their turn to get in.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "Private Key",
        definition: "A secret cryptographic key that proves ownership and allows control of blockchain assets.",
        analogy: "This is your master password—whoever holds it controls the funds or identity tied to that key.",
        lessonIds: ["blockchain-basics", "explaining-technical-processes"],
        learnMore: ""
    },
    {
        term: "Wallet",
        definition: "A tool—software, hardware, or paper—that stores and manages your public/private key pair and interacts with the blockchain.",
        analogy: "It doesn’t hold money directly—it holds the keys to access it.",
        lessonIds: ["blockchain-basics"],
        learnMore: ""
    },
    {
        term: "Token",
        definition: "A digital unit of value or utility issued on a blockchain, often used to represent currency, rights, or access.",
        analogy: "Like arcade tokens—they have value in a specific environment and let you use certain machines or services.",
        lessonIds: ["blockchain-basics"],
        learnMore: ""
    },
    {
        term: "Decentralization",
        definition: "A system design where control and decision-making are distributed across many participants rather than held by a central authority.",
        analogy: "Like a community garden where everyone contributes and no single person is in charge of all decisions.",
        lessonIds: ["blockchain-basics"],
        learnMore: ""
    },
    {
        term: "Proof of Work",
        definition: "A consensus mechanism where participants compete to solve complex puzzles to validate transactions.",
        analogy: "Like a race where miners solve math problems, and the first to finish gets to write the next ledger page.",
        lessonIds: ["blockchain-basics"],
        learnMore: ""
    },
    {
        term: "Proof of Stake",
        definition: "A consensus mechanism where validators stake cryptocurrency as collateral and are pseudo-randomly selected to create blocks.",
        analogy: "Like a weighted lottery where you must buy tickets (stake) to enter, then winners are randomly chosen to validate.",
        lessonIds: ["blockchain-basics"],
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
        analogy: "Like sending a message or payment—once sent, it can’t be undone and is recorded for everyone to see.",
        lessonIds: ["explaining-technical-processes"],
        learnMore: ""
    },

].sort((a, b) => a.term.localeCompare(b.term));

// Helper function to get terms for a lesson:
export function getTermsByLesson(lessonId: string): GlossaryTerm[] {
    return glossaryTerms.filter(term =>
        term.lessonIds?.includes(lessonId)
    );
}
