import ComingSoon from '@/components/ComingSoon';
import Link from 'next/link';
import { getCourse } from "@/lib/data";


export default async function CoursePage({
    params,
}: {
    params: Promise<{ courseId: string }>
}) {


    const { courseId } = await params;
    const course = getCourse(courseId);

    if (!course || course.lessons.length === 0) {
        return <ComingSoon />;
    }

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <section className="container mx-auto px-4 py-16">

                <div className="flex flex-col justify-center md:flex-row gap-8">


                    <div className="md:w-2/3">
                        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">{course.title}</h1>
                        <p className="text-xl text-gray-300 mb-8">{course.description}</p>

                        <div className="bg-gray-600 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-xl font-bold mb-4">Course Content</h2>
                            <ul className="space-y-3">
                                {course.lessons.map((lesson, index) => (
                                    <li key={lesson.id} className="flex items-center gap-4 text-lg">
                                        <span className="w-8">{index + 1}</span>
                                        <Link
                                            href={`/courses/${course.id}/${lesson.id}`}
                                            className="hover:text-blue-400 transition-colors"
                                        >
                                            {lesson.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}