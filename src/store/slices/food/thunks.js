import { onValue, ref, set } from "firebase/database";
import { db } from "../../../../config";
import { setFood, setFoods, setRatings, startLoadingFood } from "./foodSlice";

export const getFoods = (restaurantId) => {
  return async (dispatch) => {
    dispatch(startLoadingFood());

    const starCountRef = ref(db, `db/restaurants/${restaurantId}/foods`);
    onValue(starCountRef, (snapshot) => {
      const foods = snapshot.val();
      const array = Object.values(foods);
      dispatch(setFoods({ foods: array }));
    });
  };
};

export const getFood = (restaurantId, foodId) => {
  return async (dispatch) => {
    dispatch(startLoadingFood());

    const starCountRef = ref(
      db,
      `db/restaurants/${restaurantId}/foods/${foodId}`
    );
    onValue(starCountRef, (snapshot) => {
      const food = snapshot.val();
      dispatch(setFood({ food }));
    });
  };
};
