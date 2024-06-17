import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
      });
  },
});

export default dataSlice.reducer;
