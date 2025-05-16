export type GlossaryTerm = {
    term: string;
    definition: string;
    analogy?: string;
    learnMore?: string;
};

export const glossaryTerms: GlossaryTerm[] = [
    {
        term: "Gas",
        definition: "A unit that measures the amount of computational effort required to execute operations.",
        analogy: "Gas is like the fuel your car needs to run — without it, the blockchain can't process your transactions.",
        learnMore: "https://www.cyfrin.io/glossary/gas"
    },
    {
        term: "Smart Contract",
        definition: "A program stored on the blockchain that runs when predefined conditions are met.",
        analogy: "Think of it as a vending machine that automatically dispenses snacks when you insert money.",
        learnMore: "https://www.cyfrin.io/glossary/smart-contract"
    }
].sort((a, b) => a.term.localeCompare(b.term));