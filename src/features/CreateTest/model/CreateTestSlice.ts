import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion, QuestionVariant, TestType } from './TestType';

export interface CreateTestSlice extends TestType {
  page: number;
}

const initialState: CreateTestSlice = {
  title: '',
  description: '',
  page: 1,
  max_attempts: 3,
  passing_score: 0,
  theme: '',
  duration: 0,
  questions: [
    {
      questionTitle: 'Вопрос без названия',
      type: QuestionVariant.SINGLE,
      points: 3,
      answers: [
        { answerTitle: 'Вариант ответа', is_correct: true },
        { answerTitle: 'Вариант ответа', is_correct: false },
      ],
    },
    {
      questionTitle: 'Вопрос без названия',
      type: QuestionVariant.MULTIPLE,
      points: 3,
      answers: [
        { answerTitle: 'Вариант ответа', is_correct: true },
        { answerTitle: 'Вариант ответа', is_correct: false },
      ],
    },
  ],
};

const CreateTestSlice = createSlice({
  name: 'createTask',
  initialState,
  reducers: {
    setField(state: CreateTestSlice, action: PayloadAction<{ name: string; value: string }>) {
      const { name, value } = action.payload;
      name === 'title' ? (state.title = value) : (state.description = value);
    },
    addQuestion: (state) => {
      state.questions.push({
        questionTitle: 'Вопрос без названия',
        type: QuestionVariant.SINGLE,
        points: 3,
        answers: [
          { answerTitle: 'Вариант ответа', is_correct: true },
          { answerTitle: 'Вариант ответа', is_correct: false },
        ],
      });
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
    },
    addAnswer: (state, action: PayloadAction<number>) => {
      state.questions[action.payload].answers.push({
        answerTitle: 'Вариант ответа',
        is_correct: false,
      });
    },
    editAnswer: (
      state,
      action: PayloadAction<{
        answerId: number;
        questionId: number;
        answerTitle?: string;
        is_correct?: boolean;
      }>,
    ) => {
      const { answerId, questionId, answerTitle, is_correct } = action.payload;

      const question = state.questions[questionId];
      const answer = question.answers[answerId];

      if (answerTitle !== undefined) answer.answerTitle = answerTitle;
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
    },
    removeAnswer: (state, action: PayloadAction<{ questionId: number; answerId: number }>) => {
      const { questionId, answerId } = action.payload;
      state.questions[questionId].answers.splice(answerId, 1);
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
} = CreateTestSlice.actions;

export default CreateTestSlice.reducer;
