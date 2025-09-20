import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
  },
  otp: "",
  isAuthenticated: false,
  isLoading: false,
  error: null,
  otpRender: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    logout: (state) => {
      state.user = {
        name: "",
        email: "",
        password: "",
      };
      state.otp = "";
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
    },
    setOtpRender: (state, action) => {
      state.otpRender = action.payload;
    },
    resetAuth: (state) => {
      return initialState;
    },
  },
});

export const {
  setUserData,
  setOtp,
  setLoading,
  setError,
  clearError,
  loginSuccess,
  logout,
  resetAuth,
  setOtpRender,
} = authSlice.actions;

export default authSlice.reducer;
