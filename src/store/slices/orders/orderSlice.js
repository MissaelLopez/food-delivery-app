import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    isLoading: false,
  },
  reducers: {
    startLoadingOrders: (state) => {
      state.isLoading = true;
    },
    setOrders: (state, action) => {
      state.orders = action.payload.orders;
      state.isLoading = false;
    },
  },
});

export const { startLoadingOrders, setOrders } = orderSlice.actions;
