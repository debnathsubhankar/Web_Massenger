import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { set, get, ref, child, getDatabase } from "firebase/database";

// firebase data send and recived
export const sendData = createAsyncThunk("firebase/sendData", async (data) => {
  const database = getDatabase;
  await set(ref(database, "data/"), data);
  return data;
});

export const fatchData = createAsyncThunk("firebase/fatchData", async () => {
  const database = getDatabase;
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `data/`));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    throw new Error("No data found");
  }
});

export const fatchUsers = createAsyncThunk("user/fatchusers", async () => {
  const database = getDatabase();
  const dbRef = ref(database, "users");
  const snapshot = await get(dbRef);
  const users = snapshot.exists() ? snapshot.val() : {};
  return Object.values(users);
});

export const fatchCurrentUser = createAsyncThunk(
  "user/fatchCurrentUser",
  async () => {
    const auth = getAuth();
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve({ uid: user.uid, email: user.email });
        } else {
          reject(new Error("No user logged in"));
        }
      });
    });
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    state: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fatchData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fatchData.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fatchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fatchUsers.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fatchCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(fatchCurrentUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
