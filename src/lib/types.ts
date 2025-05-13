export interface Question {
    id: number;
    question: string;
    options: string[];
    answer: number; // index of correct option
    explanation: string;
}

export interface Quiz {
    questions: Question[];
}