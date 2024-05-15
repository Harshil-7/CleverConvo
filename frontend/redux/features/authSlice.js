import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    finishIntialLoad: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setAuth, logout, finishIntialLoad } = authSlice.actions;
export default authSlice.reducer;
