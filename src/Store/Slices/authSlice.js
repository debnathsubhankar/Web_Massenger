import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc, getFirestore } from "firebase/firestore";

import { toast } from "react-toastify";

// for firebase login
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials, { getState }) => {
    const { email, password } = credentials;
    const auth = getAuth(); // Get Firebase auth object from state
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;
    return user;
  }
);

// for firebase logout

export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async (_, { getState }) => {
    const auth = getAuth(); // Get Firebase auth object from state
    await signOut();
  }
);

// for signUP

export const signupAsync = createAsyncThunk(
  "auth/signup",
  async ({ fName, lName, regEmail, resPassword }, { rejectWithValue }) => {
    const auth = getAuth(); // Get Firebase auth object from state
    const db = getFirestore();
    const response = await createUserWithEmailAndPassword(
      auth,
      regEmail,
      resPassword
    );
    const user = response.user;
    await setDoc(doc(db, "users", user.uid), {
      fName,
      lName,
      regEmail,
      email: regEmail,
      uid: user.uid,
    });
    toast.success("You are successfully Sign up");
    return user;
  }
);

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

// const chatSlice = createSlice({
//   name: "chat",
//   initialState: {
//     data: null,
//     state: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(sendData.fulfilled, (state, action) => {
//         state.data = action.payload;
//       })
//       .addCase(fatchData.fulfilled, (state, action) => {
//         state.data = action.payload;
//       })
//       .addCase(fatchData.rejected, (state, action) => {
//         state.error = action.error.message;
//       });
//   },
// });

export default authSlice.reducer;
