'use client';

import { useState } from 'react';
import type { Question } from '@/lib/types';

type QuizData = {
    questions: Question[];
};

export default function Quiz({ quiz }: { quiz: QuizData | null }) {
    if (!quiz) return null;
    const [answers, setAnswers] = useState<Record<number, number | null>>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState<number | null>(null);

    const handleSubmit = () => {

        const correctAnswers = quiz.questions.reduce((count, question) => {
            return count + (answers[question.id] === question.answer ? 1 : 0);
        }, 0);

        setScore(correctAnswers);
        setSubmitted(true);
    };

    return (
        <div className="mt-12 border-t border-gray-700 pt-8">
            <h2 className="text-2xl font-bold mb-6">Knowledge Check</h2>

            <div className="space-y-6">
                {quiz.questions.map((q) => (
                    <div key={q.id} className={`bg-gray-800/50 p-5 rounded-lg transition-all ${submitted ? 'border-l-4' : ''
                        } ${submitted && answers[q.id] === q.answer
                            ? 'border-l-green-500'
                            : submitted
                                ? 'border-l-red-500'
                                : ''
                        }`}>
                        <h3 className="text-lg font-medium mb-3">{q.question}</h3>

                        <div className="space-y-2">
                            {q.options.map((option, i) => (
                                <label
                                    key={i}
                                    className={`flex items-center space-x-3 p-3 rounded cursor-pointer transition-colors ${submitted
                                        ? i === q.answer
                                            ? 'bg-green-900/30'
                                            : answers[q.id] === i
                                                ? 'bg-red-900/30'
                                                : 'opacity-70'
                                        : answers[q.id] === i
                                            ? 'bg-gray-700'
                                            : 'hover:bg-gray-700/50'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name={`q-${q.id}`}
                                        checked={answers[q.id] === i}
                                        onChange={() => !submitted && setAnswers({ ...answers, [q.id]: i })}
                                        className="h-4 w-4"
                                        disabled={submitted}
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>

                        {submitted && (
                            <p className={`mt-3 text-sm ${answers[q.id] === q.answer ? 'text-green-400' : 'text-red-400'
                                }`}>
                                {q.explanation}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {!submitted ? (
                <button
                    onClick={handleSubmit}
                    disabled={Object.keys(answers).length !== quiz.questions.length}
                    className={`mt-6 px-6 py-3 rounded-lg font-medium ${Object.keys(answers).length === quiz.questions.length
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-600 cursor-not-allowed'
                        }`}
                >
                    Submit Answers
                </button>
            ) : (
                <div className="mt-6 p-4 bg-gray-800 rounded-lg text-center">
                    <p className="text-lg">
                        Score: <span className="font-bold">{score}/{quiz.questions.length}</span>
                    </p>
                    <p className="mt-2 text-sm text-gray-400">
                        {(score ?? 0) === quiz.questions.length
                            ? "Perfect! 🎉"
                            : (score ?? 0) > quiz.questions.length / 2
                                ? "Good job! 👍"
                                : "Keep practicing! 💪"}
                    </p>
                </div>
            )}
        </div>
    );
}
