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
        lessonIds: [""],
        learnMore: "https://www.cyfrin.io/glossary/gas"
    },
    {
        term: "Smart Contract",
        definition: "A program stored on the blockchain that runs when predefined conditions are met.",
        analogy: "Think of it as a vending machine that automatically dispenses snacks when you insert money.",
        lessonIds: [""],
        learnMore: "https://www.cyfrin.io/glossary/smart-contract"
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
        lessonIds: ["blockchain-basics"],
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
        lessonIds: ["blockchain-basics"],
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
        term: "Private Key",
        definition: "A secret cryptographic key that proves ownership and allows control of blockchain assets.",
        analogy: "This is your master password—whoever holds it controls the funds or identity tied to that key.",
        lessonIds: ["blockchain-basics"],
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
    }
].sort((a, b) => a.term.localeCompare(b.term));

// Helper function to get terms for a lesson:
export function getTermsByLesson(lessonId: string): GlossaryTerm[] {
    return glossaryTerms.filter(term =>
        term.lessonIds?.includes(lessonId)
    );
}
