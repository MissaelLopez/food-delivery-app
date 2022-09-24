import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
  },
});

export const { increment } = restaurantSlice.actions;
