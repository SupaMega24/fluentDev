// app/courses/[courseId]/[lessonId]/page.tsx
import { notFound } from 'next/navigation';
import { getCourse } from '@/lib/data';

export default async function LessonPage({
    params
}: {
    params: { courseId: string; lessonId: string }
}) {
    const courseId = await Promise.resolve(params.courseId);
    const lessonId = await Promise.resolve(params.lessonId);
    const course = getCourse(courseId);
    const lesson = course?.lessons.find(l => l.id === lessonId);

    if (!lesson) return notFound();

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <section className="container mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold mb-6">{lesson.title}</h1>
                {/* Add your lesson content here */}
                <div className="prose prose-invert max-w-none">
                    {/* Temporary placeholder */}
                    <p className="text-xl text-gray-300">
                        Lesson content will be displayed here.
                        Add to your data structure when ready.
                    </p>
                </div>
            </section>
        </main>
    );
}

