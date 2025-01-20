import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registrationThunk } from '../api/RegistrationThunk';

export interface RegistrationData {
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  phone: string;
  password: string;
}

export interface RegistrationState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
  userData: RegistrationData;
}

const initialState: RegistrationState = {
  isLoading: false,
  error: null,
  success: false,
  userData: {
    first_name: '',
    last_name: '',
    middle_name: '',
    email: '',
    phone: '',
    password: '',
  },
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<Partial<RegistrationData>>) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    resetRegistration: (state) => {
      state.isLoading = false;
      state.error = null;
      state.success = false;
      state.userData = initialState.userData;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registrationThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(registrationThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUserData, resetRegistration, clearError } = registrationSlice.actions;
export default registrationSlice.reducer;
