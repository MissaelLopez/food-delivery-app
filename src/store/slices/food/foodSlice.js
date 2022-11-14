import { createSlice } from "@reduxjs/toolkit";

export const foodSlice = createSlice({
  name: "food",
  initialState: {
    foods: [],
    food: {},
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
    setFood: (state, action) => {
      state.food = action.payload.food;
      state.isLoading = false;
    },
  },
});

export const { startLoadingFood, setFoods, setFood } = foodSlice.actions;
