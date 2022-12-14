import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isLoading: false,
  },
  reducers: {
    startLoadingUser: (state) => {
      state.isLoading = true;
    },
    setAuthUser: (state, action) => {
      const { email, id, user, token, type } = action.payload;
      state.isLoading = false;
      state.user = { email, id, user, token, type };
    },
  },
});

export const { startLoadingUser, setAuthUser } = userSlice.actions;
