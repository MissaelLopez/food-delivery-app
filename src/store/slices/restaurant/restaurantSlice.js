import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurants: [],
    restaurant: {},
    isLoading: false,
  },
  reducers: {
    startLoadingRestaurants: (state) => {
      state.isLoading = true;
    },
    setRestaurants: (state, action) => {
      state.isLoading = false;
      state.restaurants = action.payload.restaurants;
    },
    setRestaurant: (state, action) => {
      state.isLoading = false;
      state.restaurant = action.payload.restaurant;
    },
  },
});

export const { setRestaurants, startLoadingRestaurants, setRestaurant } =
  restaurantSlice.actions;
