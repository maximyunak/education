export interface TestType {
  title: string;
  desc: string;
  testCategory: string;
  testDuration: number;
  questions: (QuestionOneOf | QuestionSomeOf)[];
}

interface IQuestionBase {
  questionTitle: string;
  questionType: QuestionType;
  answers: [];
}

interface QuestionOneOf extends IQuestionBase {
  questionType: 'oneof';
  currectAnswer: number;
}

interface QuestionSomeOf extends IQuestionBase {
  questionType: 'someof';
  currectAnswer: number[];
}

type QuestionType = 'oneof' | 'someof';
