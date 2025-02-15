export interface QuestionError {
  id: number;
  textError?: string;
  answersError?: AnswerError[];
}

export interface AnswerError {
  textError: string;
  answerId: number;
}
