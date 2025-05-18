import ComingSoon from '@/components/ComingSoon';
import { getCourse } from '@/lib/data';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Quiz from '@/components/Quiz';
import { loadQuiz } from '@/lib/loadQuiz';
import { getTermsByLesson } from '@/lib/glossary';
import dynamic from 'next/dynamic';
import ScrollToTop from '@/components/ScrolToTop';
import { processTableOfContents } from '@/lib/lessonTOC';
import { TableOfContents } from '@/components/TOC';


const GlossaryCards = dynamic(() => import('@/components/GlossaryCards'));

export default async function LessonPage({
    params,
}: {
    params: Promise<{ courseId: string; lessonId: string; }>;
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
    let modifiedHtml = '';
    let tableOfContents = [];
    try {
        const mdPath = path.join(process.cwd(), 'content', 'lessons', `${lessonId}.md`);
        console.log("Markdown path:", mdPath);
        const mdContent = await fs.readFile(mdPath, 'utf8');
        const { content } = matter(mdContent);

        const processed = await remark().use(html).process(content);
        const processedHtml = processed.toString();

        const tocResult = processTableOfContents(processedHtml, {
            h2: true,
            h3: true,
            h4: false,
        });

        modifiedHtml = tocResult.modifiedHtml;
        tableOfContents = tocResult.tableOfContents;

        htmlContent = processedHtml;


    } catch {
        return <ComingSoon />;
    }

    const terms = getTermsByLesson(lessonId);


    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <section className="container mx-auto px-4 py-16">

                {/* Table of Contents */}
                <div className="max-w-3xl mx-auto mb-12 p-4 border border-gray-700 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
                    <TableOfContents items={tableOfContents} />
                </div>


                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold">{lesson.title}</h1>
                </div>

                {/* Glossary Terms Section */}
                {terms.length > 0 && (
                    <div className="max-w-3xl mx-auto mb-12">
                        <GlossaryCards terms={terms} lessonId={lessonId} />
                    </div>
                )}

                {/* Lesson Content */}
                <div className="max-w-3xl mx-auto">
                    <article
                        className="prose prose-invert prose-lg"
                        dangerouslySetInnerHTML={{ __html: modifiedHtml }}
                    />

                </div>

                {/* Lesson Quiz */}
                <div className="max-w-3xl mx-auto">
                    {quiz && <Quiz quiz={quiz} />}

                </div>
            </section>
            <ScrollToTop />
        </main>
    );
}



