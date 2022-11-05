import { onValue, ref, set } from "firebase/database";
import { db } from "../../../../config";
import { setFoods, startLoadingFood } from "./foodSlice";

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
