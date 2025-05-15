import ComingSoon from '@/components/ComingSoon';
import { getCourse } from '@/lib/data';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Quiz from '@/components/Quiz';

export default async function LessonPage({
    params,
}: {
    params: { courseId: string; lessonId: string };
}) {
    const courseId = params.courseId;
    const lessonId = params.lessonId;
    const course = getCourse(courseId);

    if (!course) {
        return <ComingSoon />;
    }

    const lesson = course.lessons.find((l) => l.id === lessonId);

    if (!lesson) {
        return <ComingSoon />;
    }

    let htmlContent = '';
    try {
        const mdPath = path.join(process.cwd(), 'content', 'lessons', `${lessonId}.md`);
        console.log("Markdown path:", mdPath);
        const mdContent = await fs.readFile(mdPath, 'utf8');
        const { content } = matter(mdContent);

        const processed = await remark().use(html).process(content);
        htmlContent = processed.toString();
        console.log("HTML output:", htmlContent);
    } catch {
        return <ComingSoon />;
    }

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold">{lesson.title}</h1>
                </div>
                <div className="max-w-3xl mx-auto">
                    <article
                        className="prose prose-invert prose-lg"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                </div>
                <div className="max-w-3xl mx-auto">
                    <Quiz lessonId={lessonId} />
                </div>
            </section>
        </main>
    );
}



