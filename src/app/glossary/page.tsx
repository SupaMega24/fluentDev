import { glossaryTerms } from '@/lib/glossary/glossary';
import SearchableGlossary from '@/components/SearchableGlossary';
import ScrollToTop from '@/components/ScrolToTop';

export const metadata = {
    title: "Blockchain Glossary for Web3 Developers and Professionals | FluentDev",
    description:
        "Learn key blockchain and Web3 concepts with fluentDev's glossary. Perfect for DeFi professionals and English language learners, this guide explains terms in clear, simple English.",

    openGraph: {
        title: "Blockchain Glossary for Web3 Developers and Professionals | FluentDev",
        description: "Explore FluentDev's blockchain glossary designed for Web3 developers, DeFi professionals, and English language learners. Learn essential terms like gas, smart contracts, signatures, NFTs, and more in clear, simple English.",
        url: "https://fluentdev.vercel.app/glossary",
        siteName: "FluentDev",
        images: [
            {
                url: "/blockchain-glossary.png",
                width: 1200,
                height: 630,
                alt: "fluentDev Web3 & Blockchain Glossary",
            },
        ],
        type: "website",
    },
};

export default function GlossaryPage() {
    return (
        <main className="min-h-screen bg-gray-900 text-white px-4 py-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Blockchain Glossary for Web3 Developers and Professionals</h1>

                <p className="text-lg text-gray-300 mb-8">
                    Explore FluentDev's blockchain glossary designed for Web3 developers, DeFi professionals,
                    and English language learners. Learn essential terms like gas, smart contracts, signatures,
                    NFTs, and more in clear, simple English to help you master blockchain concepts quickly and confidently.
                </p>

                <p className="text-lg text-gray-300 mb-8">
                    Click on the cards below to explore key Web3 and blockchain terms explained in plain English.
                    Each term has its own page with a definition, analogy, deeper explanation, and resources to learn more.
                    Additionally, you can use the search bar to quickly find specific terms or filter the glossary.
                </p>

                {/* Client-side search + term filtering */}
                <SearchableGlossary terms={glossaryTerms} />
            </div>
            <ScrollToTop />
        </main>
    );
}
