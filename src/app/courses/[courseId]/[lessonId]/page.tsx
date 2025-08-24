import { Metadata } from 'next';
import LessonClientWrapper from '@/components/LessonClientWrapper';
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
//import { TableOfContents } from '@/components/TOC';


const GlossaryCards = dynamic(() => import('@/components/GlossaryCards'));

// This is the new function for dynamic metadata generation
export async function generateMetadata({ params,
}: {
    params: Promise<{ courseId: string; lessonId: string; }>;
}): Promise<Metadata> {

    const { courseId, lessonId } = await params;

    // Use the same logic as your component to find the lesson data
    const course = getCourse(courseId);
    const lesson = course?.lessons.find((l) => l.id === lessonId);

    if (!lesson) {
        return {};
    }

    const folders = ['web3-fundamentals', 'english-for-web3', 'defi-essentials'];
    let mdContent;
    for (const folder of folders) {
        const mdPath = path.join(process.cwd(), 'content', 'lessons', folder, `${lessonId}.md`);
        try {
            mdContent = await fs.readFile(mdPath, 'utf8');
            break;
        } catch (error) {
            continue;
        }
    }

    if (!mdContent) {
        return {};
    }

    // Extract frontmatter (title, description, image) from the markdown file
    const { data } = matter(mdContent);
    const { title, description, image } = data;

    const absoluteUrl = `https://fluentdev.com/courses/${courseId}/${lessonId}`;

    return {
        title: `${title} | FluentDev`,
        description: description,
        openGraph: {
            title: title,
            description: description,
            url: absoluteUrl,
            siteName: 'FluentDev',
            images: [
                {
                    url: `https://fluentdev.com${image}`,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [`https://fluentdev.com${image}`],
        },
    };
}


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


    let modifiedHtml = '';

    try {
        const folders = ['web3-fundamentals', 'english-for-web3', 'defi-essentials'];
        let mdContent;
        let foundPath;

        // Try each folder until we find the file
        for (const folder of folders) {
            const mdPath = path.join(process.cwd(), 'content', 'lessons', folder, `${lessonId}.md`);
            try {
                console.log("Trying path:", mdPath);
                mdContent = await fs.readFile(mdPath, 'utf8');
                foundPath = mdPath;
                console.log("Found markdown at:", foundPath);
                break; // File found, exit loop
            } catch (error) {
                // File not found in this folder, continue to next
                continue;
            }
        }

        // If no file was found in any folder
        if (!mdContent) {
            console.log(`Lesson ${lessonId} not found in any folder`);
            return <ComingSoon />;
        }

        const { content } = matter(mdContent);

        const processed = await remark().use(html).process(content);
        const processedHtml = processed.toString();

        const tocResult = processTableOfContents(processedHtml, {
            h2: true,
            h3: true,
            h4: false,
        });

        modifiedHtml = tocResult.modifiedHtml;



    } catch (error) {
        console.error("Error processing lesson:", error);
        return <ComingSoon />;
    }

    const terms = getTermsByLesson(lessonId);

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <section className="container mx-auto px-4 py-16">

                {/* Table of Contents */}
                {/* <div className="max-w-3xl mx-auto mb-12 p-4 border border-gray-700 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
                    <TableOfContents items={tableOfContents} />
                </div> */}


                <div className="max-w-3xl mx-auto my-12">
                    <h1 className="text-3xl md:text-4xl font-bold">{lesson.title}</h1>
                </div>

                {/* Lesson Content */}
                <div className="max-w-3xl mx-auto">
                    <article
                        className="prose prose-invert prose-lg"
                        dangerouslySetInnerHTML={{ __html: modifiedHtml }}
                    />

                </div>

                {/* Glossary Terms Section */}
                {terms.length > 0 && (
                    <div className="max-w-3xl mx-auto my-12">
                        <GlossaryCards terms={terms} lessonId={lessonId} />
                    </div>
                )}

                {/* Reading assignment modal */}
                <div className="max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">📘 Challenge Yourself</h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Ready to go hands-on? Complete the reading assignment to reinforce this lesson's concepts. Then, take the short quiz to test your technical fluency.
                    </p>
                    <LessonClientWrapper lessonId={lessonId} />
                </div>

                {/* Lesson Quiz */}
                <div className="max-w-3xl mx-auto">
                    {quiz && <Quiz quiz={quiz} courseId={courseId}
                        lessonId={lessonId} />}

                </div>
            </section>
            <ScrollToTop />

        </main>
    );
}



