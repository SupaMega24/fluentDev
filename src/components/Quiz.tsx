'use client';

import { useState } from 'react';
import type { Question } from '@/lib/types';
import { config } from "@/config";




type QuizData = {
    questions: Question[];
};

export default function Quiz({
    quiz,
    courseId,
    lessonId,
}: {
    quiz: QuizData | null;
    courseId: string;
    lessonId: string;
}) {
    const currentUrl = `${config.baseUrl}/courses/${courseId}/${lessonId}`;

    const [answers, setAnswers] = useState<Record<number, number | null>>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showResultModal, setShowResultModal] = useState(false);


    if (!quiz) return null;

    const currentQuestion = quiz.questions[currentIndex];
    const totalQuestions = quiz.questions.length;

    const handleSubmit = () => {

        const correctAnswers = quiz.questions.reduce((count, question) => {
            return count + (answers[question.id] === question.answer ? 1 : 0);
        }, 0);

        setScore(correctAnswers);
        setSubmitted(true);
        setShowResultModal(true);
    };

    const handleAnswerSelect = (questionId: number, optionIndex: number) => {
        if (!submitted) {
            setAnswers({ ...answers, [questionId]: optionIndex });
        }
    };

    const tweetText = encodeURIComponent(
        `🎓 I just scored ${score}/${totalQuestions} on a Web3 quiz from fluentDev!\n\nTest your knowledge on blockchain, smart contracts, and more:\n`
    );


    return (
        <div className="mt-12 border-t border-gray-700 pt-8">
            <h2 className="text-2xl font-bold mb-6">🎓 Quiz: Test Your Blockchain Knowledge</h2>
            <p className="text-lg text-gray-300 mb-6">
                Ready to put your skills to the test? Take this short quiz to test your
                understanding of the lesson's core concepts. Solidify your knowledge before
                moving on to the next topic in your learning path.
            </p>

            {/* Progress Bar */}
            <div className="mb-6 h-4 bg-gray-700 rounded overflow-hidden">
                <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                ></div>
            </div>

            {/* 🆕 Single Question Display */}
            <div
                key={currentQuestion.id}
                className={`bg-gray-800/50 p-5 rounded-lg transition-all ${submitted
                    ? answers[currentQuestion.id] === currentQuestion.answer
                        ? "border-l-4 border-l-green-500"
                        : "border-l-4 border-l-red-500"
                    : ""
                    }`}
            >
                <h3 className="text-lg font-medium mb-3">
                    {currentIndex + 1}. {currentQuestion.question}
                </h3>

                <div className="space-y-2">
                    {currentQuestion.options.map((option, i) => (
                        <label
                            key={i}
                            className={`flex items-center space-x-3 p-3 rounded cursor-pointer transition-colors ${submitted
                                ? i === currentQuestion.answer
                                    ? "bg-green-900/30"
                                    : answers[currentQuestion.id] === i
                                        ? "bg-red-900/30"
                                        : "opacity-70"
                                : answers[currentQuestion.id] === i
                                    ? "bg-gray-700"
                                    : "hover:bg-gray-700/50"
                                }`}
                        >
                            <input
                                type="radio"
                                name={`q-${currentQuestion.id}`}
                                checked={answers[currentQuestion.id] === i}
                                onChange={() => handleAnswerSelect(currentQuestion.id, i)}
                                className="h-4 w-4"
                                disabled={submitted}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>

                {submitted && (
                    <p
                        className={`mt-3 text-sm ${answers[currentQuestion.id] === currentQuestion.answer
                            ? "text-green-400"
                            : "text-red-400"
                            }`}
                    >
                        {currentQuestion.explanation}
                    </p>
                )}
            </div>

            {/* 🆕 Navigation Controls */}
            <div className="flex justify-between mt-6">
                <button
                    onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                    disabled={currentIndex === 0}
                    className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
                >
                    Previous
                </button>
                {currentIndex < totalQuestions - 1 ? (
                    <button
                        onClick={() => setCurrentIndex((i) => Math.min(totalQuestions - 1, i + 1))}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
                    >
                        Next
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={Object.keys(answers).length !== totalQuestions}
                        className={`px-6 py-2 rounded-lg font-medium ${Object.keys(answers).length === totalQuestions
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-gray-600 cursor-not-allowed"
                            }`}
                    >
                        Submit Answers
                    </button>
                )}
            </div>

            {/* Final Score Display */}
            {submitted && (
                <div className="mt-6 p-4 bg-gray-800 rounded-lg text-center">
                    <p className="text-xl text-gray-200">
                        Score: <span className="font-bold text-white">{score}/{totalQuestions}</span> —{" "}
                        {score === totalQuestions
                            ? "Perfect! 🎉"
                            : score > totalQuestions / 2
                                ? "Good job! 👍"
                                : "Keep practicing! 💪"}
                    </p>

                    {/* Social Sharing */}
                    <div className="mt-4 flex justify-center gap-4">
                        <a
                            href={`https://twitter.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(currentUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                        >
                            Share on X
                        </a>

                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded"
                        >
                            Share on LinkedIn
                        </a>
                    </div>

                </div>
            )}

            {/* 🆕 Quiz Result Modal */}
            {showResultModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-lg w-full relative border border-gray-700 text-center">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowResultModal(false)}
                            className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl"
                        >
                            &times;
                        </button>

                        {/* Score Summary */}
                        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
                        <p className="text-xl text-gray-200 mb-2">
                            Score: <span className="font-bold text-white">{score}/{totalQuestions}</span> —{" "}
                            {score === totalQuestions
                                ? "Perfect! 🎉"
                                : score > totalQuestions / 2
                                    ? "Good job! 👍"
                                    : "Keep practicing! 💪"}
                        </p>

                        {/* Share Buttons */}
                        <div className="mt-4 flex justify-center gap-4">
                            <a
                                href={`https://twitter.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(currentUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                            >
                                Share on X
                            </a>

                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded"
                            >
                                Share on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
