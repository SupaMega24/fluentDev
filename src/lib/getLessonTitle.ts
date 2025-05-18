// utils/getLessonTitle.ts
import { courses } from './data';

export function getLessonTitle(lessonId: string): string {
    for (const course of courses) {
        const lesson = course.lessons.find(lesson => lesson.id === lessonId);
        if (lesson) return lesson.topic || lesson.title;
    }
    return 'This Lesson';
}
