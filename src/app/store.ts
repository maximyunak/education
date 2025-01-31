import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { CreateTestSlice } from 'features/CreateTest';
import { VideoFilterSlice } from 'features/SearchFilter';

const rootReducer = combineReducers({
  videoFilter: VideoFilterSlice,
  createTest: CreateTestSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
