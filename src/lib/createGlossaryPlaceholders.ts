// lib/createGlossaryPlaceholders.ts
import fs from "fs/promises";
import path from "path";
import { glossaryTerms, GlossaryTerm } from "../lib/glossary/glossary";

const glossaryDir = path.join(process.cwd(), "content", "glossary");

async function createPlaceholders() {
    try {
        // Ensure the glossary directory exists
        await fs.mkdir(glossaryDir, { recursive: true });

        for (const term of glossaryTerms) {
            const slug = term.term.toLowerCase().replace(/\s+/g, "-");
            const filePath = path.join(glossaryDir, `${slug}.md`);

            try {
                await fs.access(filePath); // Check if file exists
                console.log(`Skipped existing file: ${slug}.md`);
            } catch {
                // File does not exist → create placeholder
                const content = `---
title: ${term.term}
description: Placeholder for ${term.term}
---

`;
                await fs.writeFile(filePath, content, "utf8");
                console.log(`Created placeholder: ${slug}.md`);
            }
        }

        console.log("Done creating placeholders!");
    } catch (err) {
        console.error("Error creating placeholders:", err);
    }
}

// Run the script
createPlaceholders();

