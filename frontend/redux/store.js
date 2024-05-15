import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { apiSlice } from "./services/apiSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer,
    },
    middleware: (getDefaultMiddeleware) =>
      getDefaultMiddeleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });
