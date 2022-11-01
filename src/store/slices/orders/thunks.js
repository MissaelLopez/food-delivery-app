import { onValue, ref } from "firebase/database";
import { db } from "../../../../config";
import { setOrders, startLoadingOrders } from "./orderSlice";

export const getOrders = (restaurantId) => {
  return async (dispatch) => {
    dispatch(startLoadingOrders());

    const starCountRef = ref(db, `restaurants/${restaurantId}/orders`);
    onValue(starCountRef, (snapshot) => {
      const orders = snapshot.val();
      const arr = Object.values(orders);
      dispatch(setOrders({ orders: arr }));
    });
  };
};
