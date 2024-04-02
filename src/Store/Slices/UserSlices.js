import { createSlice } from "@reduxjs/toolkit";

const logUsers = createSlice({
  name: "logUser",
  initialState: [],
  reducers: {
    addUser(state, action) {},
  },
});

export { logUsers };
