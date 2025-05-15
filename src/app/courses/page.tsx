import Link from "next/link";
import Image from "next/image";
import { courses } from "@/lib/data";


export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Learn blockchain principles and improve your English skills with our curated courses.
                        Whether you&apos;re a beginner or looking to enhance your knowledge, we have something for everyone.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <Link
                            href={`/courses/${course.id}`}
                            key={course.id}
                            className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="text-xl font-bold">{course.title}</h2>
                                    <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded">
                                        {course.level}
                                    </span>
                                </div>
                                <p className="text-gray-300 mb-4">{course.description}</p>
                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>⏱️ {course.duration}</span>
                                    <span className="text-blue-400 group-hover:text-blue-300">
                                        Start Learning →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}