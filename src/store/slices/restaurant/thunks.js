import { onValue, ref } from "firebase/database";
import { db } from "../../../../config";
import {
  startLoadingRestaurants,
  setRestaurants,
  setRestaurant,
} from "./restaurantSlice";

export const getRestaurants = () => {
  return async (dispatch) => {
    dispatch(startLoadingRestaurants());

    const starCountRef = ref(db, `db/restaurants`);
    onValue(starCountRef, (snapshot) => {
      const restaurants = snapshot.val();
      const array = Object.values(restaurants);
      dispatch(setRestaurants({ restaurants: array }));
    });
  };
};

export const getRestaurant = (restaurantId) => {
  return async (dispatch) => {
    dispatch(startLoadingRestaurants());

    const starCountRef = ref(db, `db/restaurants/${restaurantId}`);
    onValue(starCountRef, (snapshot) => {
      const restaurant = snapshot.val();
      dispatch(setRestaurant({ restaurant }));
    });
  };
};
