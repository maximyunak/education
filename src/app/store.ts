import { configureStore } from '@reduxjs/toolkit';
import { testsApi } from 'entities/Tests';
import { CreateTestSlice } from 'features/CreateTest';
import { SearchFilterSlice } from 'features/SearchFilter';

export const setupStore = () => {
  return configureStore({
    reducer: {
      SearchFilter: SearchFilterSlice,
      createTest: CreateTestSlice,
      [testsApi.reducerPath]: testsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(testsApi.middleware),
  });
};

export type RootState = ReturnType<typeof setupStore>['getState'];

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
