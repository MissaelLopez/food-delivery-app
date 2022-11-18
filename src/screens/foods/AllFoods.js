import { View, Text } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "../../store/slices/restaurant/thunks";

export const AllFoods = () => {
  const { isLoading, restaurants } = useSelector((state) => state.restaurants);
  const [foods, setFoods] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
    getFoods();
  }, []);

  const getFoods = () => {
    const foods = [];
    restaurants.map((restaurant) => {
      const food = Object.values(restaurant.foods);
      foods.push(food);
    });
    setFoods(foods);
  };

  return (
    <View>
      <Text>Listar Platillos</Text>
      {foods &&
        foods.map((elm) => {
          elm && elm.map((food) => <Text>Hola</Text>);
        })}
    </View>
  );
};
