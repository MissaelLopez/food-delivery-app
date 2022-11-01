import { configureStore } from "@reduxjs/toolkit";
import { foodSlice } from "./slices/food";
import { orderSlice } from "./slices/orders";
import { userSlice } from "./slices/user";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    food: foodSlice.reducer,
    orders: orderSlice.reducer,
  },
});
