import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import userSlice from "./Slices/userSlice";
import currentUserSlice from "./Slices/currentUserSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    currentUser: currentUserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
