import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeChatUser: null,
};

const activeChatSlice = createSlice({
  name: "activeChat",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.activeChatUser = action.payload;
    },
    clearActiveUser: (state) => {
      state.activeChatUser = null;
    },
  },
});

export const { setActiveUser, clearActiveUser } = activeChatSlice.actions;
export default activeChatSlice;
