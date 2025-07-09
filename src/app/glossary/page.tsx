'use client';

import { useState } from 'react';
import { glossaryTerms, GlossaryTerm } from '@/lib/glossary';
import ScrollToTop from '@/components/ScrolToTop';

export default function GlossaryPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);

    const filteredTerms = glossaryTerms.filter((item) =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-gray-900 text-white px-4 py-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Glossary</h1>
                <p className="text-lg text-gray-300 text-center mb-8">
                    Click on the cards below to explore key web3 and blockchain terms explained in plain English. Each term includes a definition, a simple analogy to enhance understanding, and a link to resources to learn more about the concept.
                </p>

                <div className="mb-10 max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Search terms..."
                        className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredTerms.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-2xl shadow-md cursor-pointer 
                         transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            onClick={() => setSelectedTerm(item)}
                        >
                            <h2 className="text-2xl font-semibold mb-2 text-blue-400">{item.term}</h2>
                            <p className="text-base text-gray-200 mb-2">{item.definition}</p>
                            {item.analogy && (
                                <p className="text-sm italic text-gray-400 mb-2">Analogy: {item.analogy}</p>
                            )}
                            {item.learnMore && (
                                <a
                                    href={item.learnMore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-500 hover:underline"
                                >
                                    Learn more →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {selectedTerm && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-8">
                    <div className="bg-white text-black p-12 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
                        <button
                            onClick={() => setSelectedTerm(null)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
                        >
                            ✕
                        </button>
                        <h2 className="text-3xl font-bold mb-4">{selectedTerm.term}</h2>
                        <p className="mb-4 text-lg">{selectedTerm.definition}</p>
                        {selectedTerm.analogy && (
                            <p className="italic text-gray-700 mb-4 text-lg">Analogy: {selectedTerm.analogy}</p>
                        )}
                        {selectedTerm.learnMore && (
                            <a
                                href={selectedTerm.learnMore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 underline text-lg"
                            >
                                Learn more
                            </a>
                        )}
                    </div>
                </div>
            )}
            <ScrollToTop />
        </main>
    );
}