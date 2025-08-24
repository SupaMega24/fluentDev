import { notFound } from "next/navigation";
import { glossaryTerms, GlossaryTerm } from "@/lib/glossary/glossary";
import Link from "next/link";
import { getLessonPath } from "@/lib/data";

// Helper to find term by slug
function getTermBySlug(slug: string): GlossaryTerm | undefined {
    return glossaryTerms.find(
        (term) => term.term.toLowerCase().replace(/\s+/g, "-") === slug
    );
}

// Generate static params for SSG
export async function generateStaticParams() {
    return glossaryTerms
        // .filter((term) => term.learnMore) // only terms with learnMore link
        .map((term) => ({
            slug: term.term.toLowerCase().replace(/\s+/g, "-"),
        }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params; // await params
    const term = getTermBySlug(slug);

    if (!term) return {};
    return {
        title: `${term.term} in Web3 Explained | FluentDev Glossary`,
        description: term.definition,
        openGraph: {
            title: `${term.term} in Web3 Explained | FluentDev Glossary`,
            description: term.definition,
            url: `https://fluentdev.vercel.app/glossary/${term}`,
            siteName: "FluentDev",
            type: "article",
        },
    };
}

export default async function GlossaryTermPage({ params }: PageProps) {
    const { slug } = await params; // await params
    const term = getTermBySlug(slug);

    if (!term) notFound();

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <section className="container mx-auto px-4 py-16">
                <Link href="/glossary" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
                    ← Back to Glossary
                </Link>

                <h1 className="text-4xl font-bold mb-4">{term.term}</h1>
                <p className="text-xl text-gray-300 mb-6">{term.definition}</p>

                {term.analogy && (
                    <div className="mb-6 p-4 bg-gray-800 rounded">
                        <h2 className="text-2xl font-semibold mb-2">To put it in plain English</h2>
                        <p className="text-gray-300">{term.analogy}</p>
                    </div>
                )}

                {term.lessonIds && term.lessonIds.length > 0 && (
                    <div className="mb-6">
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

                {term.learnMore && (
                    <div className="mt-8">
                        <Link
                            href={term.learnMore}
                            className="text-blue-400 hover:text-blue-300 font-semibold"
                        >
                            Learn more about {term.term} →
                        </Link>
                    </div>
                )}
            </section>
        </main>
    );
}
