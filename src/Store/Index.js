import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import dataAuth from "./Slices/dataAuth";

const store = configureStore({
  reducer: {
    auth: authSlice,
    data: dataAuth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
