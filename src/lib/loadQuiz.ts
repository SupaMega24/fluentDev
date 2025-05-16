import fs from 'fs/promises';
import path from 'path';
import type { Question } from './types';

type QuizData = {
    questions: Question[];
};

export async function loadQuiz(lessonId: string): Promise<QuizData | null> {
    try {
        const filePath = path.join(process.cwd(), 'content', 'quizzes', `${lessonId}.json`);
        const fileContents = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContents);
    } catch (error: any) {
        if (error.code !== 'ENOENT') {
            console.error(`Failed to load quiz for lesson "${lessonId}":`, error);
        }
        return null;
    }

}
