import ComingSoon from '@/components/ComingSoon';
import { getCourse } from '@/lib/data';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Quiz from '@/components/Quiz';
import { loadQuiz } from '@/lib/loadQuiz';

export default async function LessonPage({
    params,
}: {
    params: Promise<{ courseId: string; lessonId: string }>;
}) {

    const { courseId, lessonId, } = await params;
    const course = getCourse(courseId);

    if (!course) {
        return <ComingSoon />;
    }

    const lesson = course.lessons.find((l) => l.id === lessonId);

    if (!lesson) {
        return <ComingSoon />;
    }

    const quiz = await loadQuiz(lessonId);

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
                    {quiz && <Quiz quiz={quiz} />}

                </div>
            </section>
        </main>
    );
}



