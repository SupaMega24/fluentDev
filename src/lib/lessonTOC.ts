import { parse } from 'node-html-parser';
import slugify from 'slugify';

export interface TableOfContentsItem {
    id: string;
    text: string;
    level: number;
}

export function processTableOfContents(
    rawHtml: string,
    headerConfig: { [key: string]: boolean } = {
        h1: true,
        h2: true,
        h3: true,
    }
): { modifiedHtml: string; tableOfContents: TableOfContentsItem[] } {
    const root = parse(rawHtml);
    const headers = root.querySelectorAll("h1, h2, h3, h4, h5, h6");

    const tableOfContents: TableOfContentsItem[] = [];
    const usedIds = new Set<string>();

    headers.forEach((header) => {
        const level = parseInt(header.tagName.charAt(1));
        if (headerConfig[`h${level}`]) {
            const text = header.rawText || '';
            const id = slugify(text, { lower: true, strict: true });

            let uniqueId = id;
            let counter = 1;
            while (usedIds.has(uniqueId)) {
                uniqueId = `${id}-${counter++}`;
            }
            usedIds.add(uniqueId);

            header.setAttribute('id', uniqueId);
            tableOfContents.push({ id: uniqueId, text, level });
        }
    });

    return {
        modifiedHtml: root.toString(),
        tableOfContents,
    };
}
