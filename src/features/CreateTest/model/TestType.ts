export enum QuestionVariant {
  SINGLE = 'SINGLE',
  MULTIPLE = 'MULTIPLE',
}

export type AnswerType = {
  answerTitle: string;
  is_correct: boolean;
};

export interface IQuestion {
  questionTitle: string;
  type: QuestionVariant;
  points?: number;
  answers: AnswerType[];
}

export interface TestType {
  title: string;
  description: string;
  max_attempts: number;
  passing_score: number;
  theme: string;
  duration: number;
  questions: IQuestion[];
}
