import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { VideoFilterSlice } from 'features/VideoFilter';

const rootReducer = combineReducers({
  videoFilter: VideoFilterSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
