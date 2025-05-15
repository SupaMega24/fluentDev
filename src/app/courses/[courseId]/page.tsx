import ComingSoon from '@/components/ComingSoon';
import Image from 'next/image';
import Link from 'next/link';
import { getCourse } from "@/lib/data";


export default async function CoursePage({
    params,
}: {
    params: { courseId: string }
}) {

    const courseId = params.courseId;
    const course = getCourse(courseId);

    if (!course || course.lessons.length === 0) {
        return <ComingSoon />;
    }

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <section className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <div className="relative h-96 rounded-xl overflow-hidden border border-gray-700">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                        <p className="text-xl text-gray-300 mb-8">{course.description}</p>

                        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-xl font-bold mb-4">Course Content</h2>
                            <ul className="space-y-3">
                                {course.lessons.map((lesson, index) => (
                                    <li key={lesson.id} className="flex items-center gap-4">
                                        <span className="text-gray-400 w-8">{index + 1}</span>
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