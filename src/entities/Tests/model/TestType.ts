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
  max_attempts: number | '';
  passing_score: number;
  theme_id: number;
  duration: number;
  questions: IQuestion[];
}

export interface TestPreviewType {
  id: number;
  title: string;
  description: string;
  duration: number;
  theme_id: number;
  author: string;
  questions_count: number;
  updated_at: string;
  popularity_count: number;
}
