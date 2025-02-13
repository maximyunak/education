export enum QuestionVariant {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}

export type AnswerType = {
  text: string;
  is_correct: boolean;
};

export interface IQuestion {
  text: string;
  type: QuestionVariant;
  points?: number | '';
  answers: AnswerType[];
}

export interface TestType {
  id?: number;
  title: string;
  description: string;
  max_attempts: number;
  passing_score: number;
  theme_id: number;
  duration: number;
  questions: IQuestion[];
}
