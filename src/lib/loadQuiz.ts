
import fs from 'fs/promises';
import path from 'path';
import type { Question } from './types';

type QuizData = {
    questions: Question[];
};

function isNodeErrorWithCode(error: unknown): error is NodeJS.ErrnoException {
    return (
        error instanceof Error &&
        typeof (error as NodeJS.ErrnoException).code === 'string'
    );
}

export async function loadQuiz(lessonId: string): Promise<QuizData | null> {
    try {
        const filePath = path.join(process.cwd(), 'content', 'quizzes', `${lessonId}.json`);
        const fileContents = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContents);
    } catch (error: unknown) {
        if (isNodeErrorWithCode(error) && error.code === 'ENOENT') {
            // Quiz file doesn't exist — not an error, just return null silently
            return null;
        }

        console.error(`Failed to load quiz for lesson "${lessonId}":`, error);
        return null;
    }

}
