'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GlossaryTerm } from '@/lib/glossary/glossary';

interface Props {
    terms: GlossaryTerm[];
}

export default function SearchableGlossary({ terms }: Props) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTerms = terms.filter((item) =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
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
                    <Link
                        key={index}
                        href={`/glossary/${item.term.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                        <div className="bg-gray-800 p-6 rounded-2xl shadow-md cursor-pointer 
                            transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <h2 className="text-2xl font-semibold mb-2 text-blue-400">{item.term}</h2>
                            <p className="text-base text-gray-200 mb-2">{item.definition}</p>
                            {item.analogy && (
                                <p className="text-sm italic text-gray-400 mb-2">Analogy: {item.analogy}</p>
                            )}
                            {item.learnMore && (
                                <span className="text-sm text-blue-500 hover:underline">
                                    Learn more →
                                </span>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
