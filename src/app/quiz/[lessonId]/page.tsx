import Quiz from '@/components/Quiz';
import { loadQuiz } from '@/lib/loadQuiz';

interface QuizPageProps {
    params: { lessonId: string };
}

export default async function QuizPage({
    params,
}: {
    params: Promise<{ lessonId: string }>;
}) {
    const { lessonId } = await params; // ✅ await directly
    const quizData = await loadQuiz(lessonId);

    if (!quizData) {
        return <p className="p-8">No quiz found for "{lessonId}"</p>;
    }

    return (
        <div className="min-h-screen bg-gray-700 text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-lg border border-gray-700 p-8">
                <Quiz quiz={quizData} courseId="default-course" lessonId={lessonId} />
            </div>
        </div>
    );
}
