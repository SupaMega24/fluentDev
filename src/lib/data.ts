

export const courses = [
    {
        id: "web3-fundamentals",
        title: "Web3 Fundamentals",
        description:
            "For learners who want to understand blockchain and decentralized technologies in plain, accessible English.",
        image: "/courses/web3-fundamentals.jpg",
        duration: "10 hours",
        level: "Beginner",
        lessons: [
            { id: "blockchain-basics", title: "Blockchain Basics: Essential Concepts of Web3" },
            { id: "types-of-blockchains", title: "Types of Blockchains: Public, Private & Consortium" },
            { id: "consensus-mechanisms", title: "Consensus Mechanisms: How Blockchains Reach Agreement" },
            { id: "smart-contracts", title: "Smart Contracts: Code that Executes Itself" },
            { id: "cryptocurrency", title: "Cryptocurrency: Digital Money Explained" },
        ],
    },
    {
        id: "english-for-web3",
        title: "English for Web3 Professionals",
        description:
            "Improve your English communication while mastering blockchain concepts",
        image: "/courses/ethereum.png",
        duration: "10 hours",
        level: "Intermediate",
        lessons: [],
    },
    {
        id: "web3-essentials",
        title: "Web3 Essentials",
        description: "Master liquidity pools, yield farming, and DEXs",
        image: "/courses/defi.png",
        duration: "10 hours",
        level: "Intermediate",
        lessons: [],
    },
];

export const getCourse = (id: string) => courses.find(course => course.id === id);