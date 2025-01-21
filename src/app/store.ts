import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { RegistrationReducer } from 'features/Registration';

const rootReducer = combineReducers({
  registration: RegistrationReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
