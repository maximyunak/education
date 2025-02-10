import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion, QuestionVariant, TestType } from './TestType';

export interface CreateTestSlice extends TestType {
  page: number;
}

const calculateTotalPoints = (questions: IQuestion[]): number => {
  return questions.reduce((sum, question) => sum + Number(question.points), 0);
};

const initialState: CreateTestSlice = {
  title: '',
  description: '',
  page: 1,
  max_attempts: 3,
  passing_score: 0,
  theme_id: 4,
  duration: 0,
  questions: [
    {
      text: 'Вопрос без названия',
      type: QuestionVariant.SINGLE,
      points: 2,
      answers: [
        { text: 'Вариант ответа', is_correct: true },
        { text: 'Вариант ответа', is_correct: false },
      ],
    },
    {
      text: 'Вопрос без названия',
      type: QuestionVariant.MULTIPLE,
      points: 3,
      answers: [
        { text: 'Вариант ответа', is_correct: true },
        { text: 'Вариант ответа', is_correct: false },
      ],
    },
  ],
};

initialState.passing_score = Math.ceil(calculateTotalPoints(initialState.questions) / 2);

const CreateTestSlice = createSlice({
  name: 'createTask',
  initialState,
  reducers: {
    setField(state, action: PayloadAction<{ name: string; value: string | number }>) {
      const { name, value } = action.payload;

      switch (name) {
        case 'title':
          state.title = value as string;
          break;
        case 'description':
          state.description = value as string;
          break;
        case 'page':
          state.page = value as number;
          break;
        case 'max_attempts':
          state.max_attempts = value as number;
          break;
        case 'duration':
          state.duration = value as number;
          break;
        case 'passing_score':
          state.passing_score = value as number;
          break;
        default:
          console.error(`Unknown key: ${name}`);
      }
    },
    addQuestion: (state) => {
      state.questions.push({
        text: 'Вопрос без названия',
        type: QuestionVariant.SINGLE,
        points: 3,
        answers: [
          { text: 'Вариант ответа', is_correct: true },
          { text: 'Вариант ответа', is_correct: false },
        ],
      });
      state.passing_score = Math.ceil(calculateTotalPoints(state.questions) / 2);
    },
    editQuestion: (state, action: PayloadAction<Partial<IQuestion> & { id: number }>) => {
      const { id, ...updated } = action.payload;
      const question = state.questions[id];

      if (updated.type === QuestionVariant.SINGLE) {
        let hasCorrectAnswer = false;

        question.answers.forEach((answer) => {
          if (hasCorrectAnswer) {
            answer.is_correct = false;
          } else if (answer.is_correct) {
            hasCorrectAnswer = true;
          }
        });
      }
      Object.assign(question, updated);
      if (updated.points !== undefined) {
        state.passing_score = Math.ceil(calculateTotalPoints(state.questions) / 2);
      }
    },
    addAnswer: (state, action: PayloadAction<number>) => {
      state.questions[action.payload].answers.push({
        text: 'Вариант ответа',
        is_correct: false,
      });
    },
    editAnswer: (
      state,
      action: PayloadAction<{
        answerId: number;
        questionId: number;
        text?: string;
        is_correct?: boolean;
      }>,
    ) => {
      const { answerId, questionId, text, is_correct } = action.payload;

      const question = state.questions[questionId];
      const answer = question.answers[answerId];

      if (text !== undefined) answer.text = text;
      if (is_correct !== undefined) {
        if (question.type === QuestionVariant.SINGLE) {
          question.answers.forEach((a) => (a.is_correct = false));
        }
        answer.is_correct = is_correct;
      }
    },
    removeQuestion: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.questions.splice(id, 1);
      state.passing_score = Math.ceil(calculateTotalPoints(state.questions) / 2);
    },
    removeAnswer: (state, action: PayloadAction<{ questionId: number; answerId: number }>) => {
      const { questionId, answerId } = action.payload;
      state.questions[questionId].answers.splice(answerId, 1);
    },
    clearSlice: (state) => {
      state = {
        title: '',
        description: '',
        page: 1,
        max_attempts: 3,
        passing_score: 0,
        theme_id: 4,
        duration: 0,
        questions: [
          {
            text: 'Вопрос без названия',
            type: QuestionVariant.SINGLE,
            points: 2,
            answers: [
              { text: 'Вариант ответа', is_correct: true },
              { text: 'Вариант ответа', is_correct: false },
            ],
          },
          {
            text: 'Вопрос без названия',
            type: QuestionVariant.MULTIPLE,
            points: 3,
            answers: [
              { text: 'Вариант ответа', is_correct: true },
              { text: 'Вариант ответа', is_correct: false },
            ],
          },
        ],
      };
    },
  },
});

export const {
  setField,
  addQuestion,
  editQuestion,
  addAnswer,
  editAnswer,
  removeQuestion,
  removeAnswer,
  clearSlice,
} = CreateTestSlice.actions;

export default CreateTestSlice.reducer;
