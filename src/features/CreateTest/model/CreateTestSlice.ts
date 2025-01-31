import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TestType } from './TestType';

export interface CreateTestSlice extends TestType {
  page: number;
}

const initialState: CreateTestSlice = {
  title: '',
  desc: '',
  page: 1,
  testCategory: '',
  testDuration: 0,
  questions: [],
};

const CreateTestSlice = createSlice({
  name: 'createTask',
  initialState,
  reducers: {},
});

export const {} = CreateTestSlice.actions;

export default CreateTestSlice.reducer;
