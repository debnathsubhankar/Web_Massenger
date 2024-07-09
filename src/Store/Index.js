import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import userSlice from "./Slices/userSlice";
import activeChatSlice from "./Slices/activeChatUser";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    activeChat: activeChatSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
