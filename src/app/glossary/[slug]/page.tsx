import { notFound } from "next/navigation";
import { glossaryTerms, GlossaryTerm } from "@/lib/glossary/glossary";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm"; // Add this import
import { getLessonPath } from "@/lib/data";
import ScrollToTop from '@/components/ScrolToTop';
import { parse } from 'node-html-parser';
import slugify from 'slugify';

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
        const processed = await remark()
            .use(remarkGfm) // Add this line
            .use(html)
            .process(content);

        mdHtml = processed.toString();

        // Add target="_blank" to all links
        mdHtml = mdHtml.replace(/<a href="/g, '<a target="_blank" rel="noopener noreferrer" href="');
    } catch (error) {
        console.error(error)
        // fallback: no long-form content
    }

    let tableOfContents: { id: string; text: string; level: number }[] = [];
    if (mdHtml) {
        const root = parse(mdHtml);
        const headers = root.querySelectorAll("h1, h2, h3");
        const usedIds = new Set<string>();

        headers.forEach((header) => {
            const level = parseInt(header.tagName.charAt(1));
            const text = header.text;
            let id = slugify(text, { lower: true, strict: true });

            // Ensure unique IDs
            let uniqueId = id;
            let counter = 1;
            while (usedIds.has(uniqueId)) {
                uniqueId = `${id}-${counter++}`;
            }
            usedIds.add(uniqueId);

            header.setAttribute('id', uniqueId);
            tableOfContents.push({ id: uniqueId, text, level });
        });

        mdHtml = root.toString();
    }

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <section className="container mx-auto px-4 py-16 flex flex-col w-full max-w-3xl">
                <Link href="/glossary" className="text-blue-400 hover:text-blue-300 mb-6 inline-block text-xl">
                    ← Back to Glossary List
                </Link>

                <h1 className="text-4xl font-bold mb-4">{term.term}</h1>
                <p className="text-xl text-gray-200 mb-6">{term.definition}</p>

                {term.analogy && (
                    <div className="mb-6 p-4 bg-blue-600 rounded ">
                        <h2 className="text-2xl font-semibold mb-2">To put it in plain English</h2>
                        <p className="text-gray-200 text-lg">{term.analogy}</p>
                    </div>
                )}

                {/* Table of Contents */}
                {tableOfContents.length > 0 && (
                    <nav className="my-6 p-4 bg-gray-600 rounded">
                        <h2 className="text-3xl font-semibold mb-2">Table of Contents</h2>
                        <ul className="ml-4 text-lg">
                            {tableOfContents.map(item => (
                                <li key={item.id} style={{ marginLeft: (item.level - 1) * 16 }}>
                                    <a href={`#${item.id}`} className="hover:text-blue-400 hover:underline">{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                {/* Long-form Markdown content */}
                {mdHtml && (
                    <div
                        className="text-xl mt-8 max-w-3xl prose prose-invert text-gray-300
                                   prose-h1:text-4xl prose-h1:font-bold prose-h1:mt-8 prose-h1:mb-4
                                   prose-h2:text-3xl prose-h2:font-semibold prose-h2:mt-6 prose-h2:mb-3 prose-h2:text-blue-400
                                   prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                                   prose-p:text-lg prose-p:text-gray-200 prose-p:mb-4
                                   prose-strong:text-blue-400 prose-strong:font-semibold
                                   prose-a:text-blue-400 hover:prose-a:text-blue-300 
                                   prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:ml-10 prose-blockquote:italic prose-blockquote:text-gray-300                                   
                                   prose-li:mb-1 prose-li:text-lg
                                   "

                        dangerouslySetInnerHTML={{ __html: mdHtml }}
                    />
                )}

                {/* Related Lessons */}
                {term.lessonIds?.length && (
                    <div className="my-6 max-w-3xl">
                        <h2 className="text-2xl font-semibold mb-2">Related Lessons</h2>
                        <ul className="list-disc list-inside text-gray-300">
                            {term.lessonIds.map((lessonId) => {
                                const path = getLessonPath(lessonId);
                                return path ? (
                                    <li key={lessonId}>
                                        <Link href={path} target="_blank" className="text-xl text-blue-400 hover:text-blue-300">
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