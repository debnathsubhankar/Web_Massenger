import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import { auth } from "../../index";

// for firebase login
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials, { getState }) => {
    const { email, password } = credentials;
    const auth = getState().auth.auth; // Get Firebase auth object from state
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  }
);

// for firebase logout

export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async (_, { getState }) => {
    const auth = getState().auth.auth; // Get Firebase auth object from state
    await signOut();
  }
);

// for signUP

export const signupAsync = createAsyncThunk(
  "auth/signup",
  async (credentials, { getState }) => {
    const { fName, lName, regEmail, resPassword } = credentials;
    const auth = getState().auth.auth; // Get Firebase auth object from state
    const response = await createUserWithEmailAndPassword(
      auth,
      regEmail,
      resPassword
    );
    return response.user;
  }
);

// declear the intialState here
const initialState = {
  user: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
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
      .addCase(signupAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
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

export default authSlice.reducer;
