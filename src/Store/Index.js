import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
