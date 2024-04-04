import { createSlice } from "@reduxjs/toolkit";
import firebase from "../Index.js";
import "firebase/auth";

const logUsers = createSlice({
  name: "logUser",
  initialState: [],
  reducers: {
    addUser(state, action) {},
  },
});

export { logUsers };
