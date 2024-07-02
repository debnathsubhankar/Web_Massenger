import {
  createActionCreatorInvariantMiddleware,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import { getAuth } from "firebase/auth";
import { getFirestore, getDoc, doc } from "firebase/firestore";
export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      const db = getFirestore();

      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists) {
          return { uid: currentUser.uid, ...userDoc.data() };
        } else {
          throw new Error("user data not found");
        }
      } else {
        throw new Error("no current user login");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = "sucesseded";
        state.data = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default currentUserSlice.reducer;
