
export const getLessonPath = (lessonId: string): string | null => {
    for (const course of courses) {
        const lesson = course.lessons.find(l => l.id === lessonId);
        if (lesson) {
            return `/courses/${course.id}/${lesson.id}`;
        }
    }
    return null; // not found
};

export const courses = [
    {
        id: "web3-fundamentals",
        title: "Web3 Fundamentals",
        description:
            "Designed for learners seeking a solid foundation, this course provides a clear guide to Web3 fundamentals. You will master essential blockchain basics and understand complex decentralized technologies like smart contracts and cryptocurrency. Learn the language of Web3 and build your technical vocabulary in plain, accessible English.",
        image: "/courses/web3-fundamentals.jpg",
        duration: "10 hours",
        skill: "Vocabulary",
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
                id: "consensus-algorithms",
                title: "Consensus Algorithms: How Blockchains Reach Agreement",
                topic: "Consensus Algorithms"
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
            "Built for Web3 professionals and intermediate English learners, this course combines essential blockchain concepts with advanced technical English. You will improve your grammar, expand your vocabulary, and develop the communication skills needed to write proposals, deliver presentations, and thrive in global tech teams.",
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
                title: "Describing Smart Contract Functionality",
                topic: "Describing Smart Contract Functionality"
            },
            {
                id: "describing-risks-and-safety-of-cryptocurrency",
                title: "Describing Risks and Safety of Cryptocurrency: Conditionals",
                topic: "Describing Risks and Safety of Cryptocurrency"
            },

        ],
    },
    // {
    //     id: "defi-essentials",
    //     title: "DeFi Essentials",
    //     description:
    //         "Learn the fundamentals of DeFi with our beginner's guide. This course covers everything from smart decentralized exchanges (DEXs) and liquidity pools to lending, borrowing, and yield farming. Master the blockchain technology behind decentralized finance and speak confidently about the future of money.",
    //     image: "/courses/web3-essentials.jpg",
    //     duration: "10 weeks",
    //     skill: "Vocabulary",
    //     lessons: [
    //         {
    //             id: "defi-primatives",
    //             title: "DeFi Primitives: Building Blocks of Decentralized Finance",
    //             topic: "DeFi Primitives"
    //         },

    //     ],
    // },
];

export const getCourse = (id: string) => courses.find(course => course.id === id);