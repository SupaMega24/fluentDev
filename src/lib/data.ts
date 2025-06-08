

export const courses = [
    {
        id: "web3-fundamentals",
        title: "Web3 Fundamentals",
        description:
            "For learners who want to understand blockchain and decentralized technologies in plain, accessible English.",
        image: "/courses/web3-fundamentals.jpg",
        duration: "10 hours",
        skill: "Reading",
        lessons: [
            {
                id: "blockchain-basics",
                title: "Blockchain Basics: Essential Concepts of Web3",
                topic: "Blockchain Basics"
            },
            {
                id: "types-of-blockchains",
                title: "Types of Blockchains: Public, Private & Consortium",
                topic: "Types of Blockchains"
            },
            {
                id: "consensus-mechanisms",
                title: "Consensus Mechanisms: How Blockchains Reach Agreement",
                topic: "Consensus Mechanisms"
            },
            {
                id: "smart-contracts",
                title: "Smart Contracts: Code that Executes Itself",
                topic: "Smart Contracts"
            },
            {
                id: "cryptocurrency",
                title: "Cryptocurrency: Digital Money Explained",
                topic: "Cryptocurrency"
            },
        ],
    },
    {
        id: "english-for-web3-1",
        title: "English for Web3 Professionals 1",
        description:
            "Improve your English communication while mastering blockchain concepts",
        image: "/courses/english.jpg",
        duration: "10 hours",
        skill: "Language",
        lessons: [
            {
                id: "explaining-technical-processes",
                title: "Explaining Technical Processes: How Transactions Work",
                topic: "Explaining Technical Processes"
            },
            {
                id: "comparing-and-contrasting-protocols",
                title: "Comparing and Contrasting Protocols: Comparative, Superlative, and Connectors",
                topic: "Comparing and Contrasting"
            },
            {
                id: "expressing-opinions-and-uncertainty",
                title: "Expressing Opinions and Uncertainty: Modal Verbs",
                topic: "Expressing Opinions and Uncertainty"
            },
            {
                id: "describing-smart-contract-functionality",
                title: "Describing Smart Contract Functionality: Passive Voice and Relative Clauses",
                topic: "Describing Smart Contract Functionality"
            },
            {
                id: "describing-risks-and-safety-of-cryptocurrency",
                title: "Describing Risks and Safety of Cryptocurrency: Conditionals",
                topic: "Describing Risks and Safety of Cryptocurrency"
            },
        ],
    },
    {
        id: "web3-essentials",
        title: "Web3 Essentials",
        description: "Master liquidity pools, yield farming, and DEXs",
        image: "/courses/web3-essentials.jpg",
        duration: "10 hours",
        skill: "Reading",
        lessons: [
            // {
            //     id: "",
            //     title: "",
            //     topic: ""
            // },
            // {
            //     id: "",
            //     title: "",
            //     topic: ""
            // },
            // {
            //     id: "",
            //     title: "",
            //     topic: ""
            // },
            // {
            //     id: "",
            //     title: "",
            //     topic: ""
            // },
            // {
            //     id: "",
            //     title: "",
            //     topic: ""
            // },
        ],
    },
];

export const getCourse = (id: string) => courses.find(course => course.id === id);