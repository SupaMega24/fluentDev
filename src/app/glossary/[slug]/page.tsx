import { notFound } from "next/navigation";
import { glossaryTerms, GlossaryTerm } from "@/lib/glossary/glossary";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { getLessonPath } from "@/lib/data";
import ScrollToTop from '@/components/ScrolToTop';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Helper to find term by slug
function getTermBySlug(slug: string): GlossaryTerm | undefined {
    return glossaryTerms.find(
        (term) => term.term.toLowerCase().replace(/\s+/g, "-") === slug
    );
}

// Generate static params for SSG
export async function generateStaticParams() {
    return glossaryTerms.map((term) => ({
        slug: term.term.toLowerCase().replace(/\s+/g, "-"),
    }));
}

// Dynamic metadata
export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const term = getTermBySlug(slug);

    if (!term) return {};

    // Try to read markdown frontmatter
    const mdPath = path.join(process.cwd(), "content", "glossary", `${slug}.md`);
    let mdContent = "";
    try {
        mdContent = await fs.readFile(mdPath, "utf8");
    } catch (error) {
        console.error(error)
        // fallback: no MD file
    }

    interface FrontMatter {
        title?: string;
        description?: string;
    }

    // Parse the markdown
    let title: string;
    let description: string;

    if (mdContent) {
        const { data } = matter(mdContent) as { data: FrontMatter };
        title = data.title || `${term.term} in Web3 Explained | FluentDev`;
        description = data.description || term.definition;
    } else {
        title = `${term.term} in Web3 Explained | FluentDev`;
        description = term.definition;
    }

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://fluentdev.vercel.app/glossary/${slug}`,
            siteName: "FluentDev",
            type: "article",
        },
    };
}

export default async function GlossaryTermPage({ params }: PageProps) {
    const { slug } = await params;
    const term = getTermBySlug(slug);

    if (!term) notFound();

    // Load markdown content
    let mdHtml = "";
    const mdPath = path.join(process.cwd(), "content", "glossary", `${slug}.md`);
    try {
        const mdContent = await fs.readFile(mdPath, "utf8");
        const { content } = matter(mdContent);
        const processed = await remark().use(html).process(content);
        mdHtml = processed.toString();
    } catch (error) {
        console.error(error)
        // fallback: no long-form content
    }

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <section className="container mx-auto px-4 py-16 flex flex-col w-full max-w-3xl">
                <Link href="/glossary" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
                    ← Back to Glossary List
                </Link>

                <h1 className="text-4xl font-bold mb-4">{term.term}</h1>
                <p className="text-xl text-gray-300 mb-6">{term.definition}</p>

                {term.analogy && (
                    <div className="mb-6 p-4 bg-gray-800 rounded ">
                        <h2 className="text-2xl font-semibold mb-2">To put it in plain English</h2>
                        <p className="text-gray-300">{term.analogy}</p>
                    </div>
                )}

                {/* Long-form Markdown content */}
                {mdHtml && (
                    <div className="mt-8 max-w-3xl prose prose-invert" dangerouslySetInnerHTML={{ __html: mdHtml }} />
                )}

                {term.learnMore && (
                    <div className="mt-8">
                        <Link href={term.learnMore} className="text-blue-400 hover:text-blue-300 font-semibold">
                            Learn more about {term.term} →
                        </Link>
                    </div>
                )}

                {/* Related Lessons */}
                {term.lessonIds?.length && (
                    <div className="mb-6 max-w-3xl">
                        <h2 className="text-2xl font-semibold mb-2">Related Lessons</h2>
                        <ul className="list-disc list-inside text-gray-300">
                            {term.lessonIds.map((lessonId) => {
                                const path = getLessonPath(lessonId);
                                return path ? (
                                    <li key={lessonId}>
                                        <Link href={path} target="_blank" className="text-blue-400 hover:text-blue-300">
                                            {lessonId.replace(/-/g, " ")}
                                        </Link>
                                    </li>
                                ) : null;
                            })}
                        </ul>
                    </div>
                )}
            </section>
            <ScrollToTop />
        </main>
    );
}

