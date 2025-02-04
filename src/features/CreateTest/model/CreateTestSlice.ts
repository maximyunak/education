import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestionVariant, TestType } from './TestType';

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
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    // Set the task description
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
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
  },
});

export const { setTitle, setDescription, addQuestion } = CreateTestSlice.actions;

export default CreateTestSlice.reducer;
