import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default async function AboutPage() {
    // Path to your about.md file
    const filePath = path.join(process.cwd(), 'content', 'info', 'about.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Parse frontmatter & markdown content
    const { content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark()
        .use(html)
        .process(content);
    const contentHtml = processedContent.toString();

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <section className="container mx-auto px-4 py-16 max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">About fleuentDev</h1>
                {/* Render the markdown content as HTML */}
                <div
                    className="prose prose-invert max-w-none text-base md:text-lg"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </section>
        </main>
    );
}
