import { configureStore } from "@reduxjs/toolkit";
import { logUsers } from "./Slices/UserSlices";

const store = configureStore({
  reducer: {
    users: logUsers.reducer,
  },
});

export default store;
