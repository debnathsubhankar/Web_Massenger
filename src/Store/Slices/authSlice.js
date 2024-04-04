import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "../Index";
import "firebase/auth";

// for firebase login
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    const { email, password } = credentials;
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return response.user;
  }
);

// for firebase logout

export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  await firebase.auth().signOut();
});

// declear the intialState here
const initialState = {
  user: null,
  status: "idle",
  error: null,
};

const authSliceh = createSlice({
  name: "auth",
  initialState: [{ initialState }],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logoutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.status = "idle";
        state.user = null;
      });
  },
});

export default authSliceh.reducer;
