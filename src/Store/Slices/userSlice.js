import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { collection, getFirestore, getDocs } from "firebase/firestore";

export const fatchUsers = createAsyncThunk(
  "user/fatchUser",
  async (_, { getState, rejectWithValue }) => {
    try {
      const db = getFirestore();
      const auth = getAuth();
      const currentUser = auth.currentUser;
      const usersCollection = collection(db, "users");
      const snapshot = await getDocs(usersCollection);

      const users = [];
      snapshot.forEach((doc) => {
        if (doc.id !== currentUser.uid) {
          users.push({ uid: doc.id, ...doc.data() });
        }
      });
      return users;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const initialState = {
  currentUser: null,
  users: [],
  state: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fatchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fatchUsers.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
