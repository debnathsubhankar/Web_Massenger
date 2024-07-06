import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import userSlice from "./Slices/userSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
