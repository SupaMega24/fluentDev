import Link from "next/link";
import Image from "next/image";
import { courses } from "@/lib/data";

export const metadata = {
    title: "FluentDev Courses | Learn English for Web3",
    description:
        "Explore all our English courses for Web3 professionals and developers. Learn blockchain concepts and improve your communication skills with our practical lessons.",
    openGraph: {
        title: "All Courses - FluentDev",
        description:
            "Find the right English and Web3 course for you. From blockchain basics to advanced communication for developers.",
        url: "https://fluentdev.vercel.app/courses",
        siteName: "FluentDev",
        images: [
            {
                url: "/coursesOpenGraph.png",
                width: 1200,
                height: 630,
                alt: "A graphic showing different English and Web3 courses",
            },
        ],
        type: "website",
    },
};

export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Courses for Web3 Professionals and Learners</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Explore our curated English courses designed specifically for Web3 developers and professionals.
                        We help you master blockchain principles and advanced communication skills, whether you&apos;re a beginner
                        or looking to enhance your expertise.
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
                                        {course.skill}
                                    </span>
                                </div>
                                <p className="text-gray-300 mb-4">{course.description}</p>
                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>⏱️ {course.duration}</span>
                                    <span className="text-blue-400 group-hover:text-blue-300">
                                        Start learning {course.title} →
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