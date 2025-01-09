import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import $api from 'shared/api/baseUrl';
import { loginThunk } from '../api/LoginThunk';

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginState {
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  userData: LoginData;
}

const initialState: LoginState = {
  isLoading: false,
  error: null,
  isAuthenticated: false,
  userData: {
    email: '',
    password: '',
  },
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginData: (state, action: PayloadAction<Partial<LoginData>>) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    resetLogin: (state) => {
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = false;
      state.userData = initialState.userData;
    },
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userData = initialState.userData;
      localStorage.removeItem('token');
      delete $api.defaults.headers.common.Authorization;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setLoginData, resetLogin, clearError, logout } = loginSlice.actions;
export default loginSlice.reducer;
