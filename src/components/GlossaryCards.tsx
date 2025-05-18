'use client';

import { useState } from 'react';
import { GlossaryTerm } from '@/lib/glossary';
import { getLessonTitle } from '@/lib/getLessonTitle';

// This component is responsible for displaying the glossary terms in a card format.

export default function GlossaryCards({ terms, lessonId }: { terms: GlossaryTerm[]; lessonId: string }) {
    const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);

    const title = getLessonTitle(lessonId).toLowerCase();



    return (
        <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">🧠 Terms to Know</h2>
            <p className="text-lg text-gray-300 mb-4">
                Before diving deeper into <strong className="text-blue-400">{title}</strong>,
                it is important to get familiar with the foundational
                terms of the lesson. These definitions and real-world analogies will help you
                build a mental model of how things work. By understanding these terms, you will be
                better equipped to grasp the concepts and technologies discussed in the lesson.
            </p>
            <p className="text-lg text-gray-300 mb-8">
                Each term has been selected to support your understanding of <strong>{title}</strong> at both a conceptual and practical level.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {terms.map((term) => (
                    <div
                        key={term.term}
                        onClick={() => setSelectedTerm(term)}
                        className="cursor-pointer bg-gray-800 hover:bg-gray-700 p-4 rounded-xl shadow-md transition
                            flex items-center justify-center text-center min-h-[80px]"
                    >
                        <h3 className="text-xl font-bold text-white">{term.term}</h3>
                    </div>
                ))}
            </div>

            {selectedTerm && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-8">
                    <div className="bg-white text-black p-8 rounded-xl shadow-2xl max-w-2xl w-full relative">
                        <button
                            onClick={() => setSelectedTerm(null)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
                        >
                            ✕
                        </button>
                        <h2 className="text-3xl font-bold mb-4">{selectedTerm.term}</h2>
                        <p className="mb-4 text-lg">{selectedTerm.definition}</p>
                        {selectedTerm.analogy && (
                            <p className="italic text-gray-700 text-lg">
                                Analogy: {selectedTerm.analogy}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
// This component is responsible for displaying the glossary terms in a card format.