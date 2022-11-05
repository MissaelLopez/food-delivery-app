import { createSlice } from "@reduxjs/toolkit";

export const foodSlice = createSlice({
  name: "food",
  initialState: {
    foods: [],
    isLoading: false,
  },
  reducers: {
    startLoadingFood: (state) => {
      state.isLoading = true;
    },
    setFoods: (state, action) => {
      state.isLoading = false;
      state.foods = action.payload.foods;
    },
  },
});

export const { startLoadingFood, setFoods } = foodSlice.actions;
