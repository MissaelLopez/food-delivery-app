import { View, Text } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import { OrderCard } from "./OrderCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../store/slices/orders/thunks";

export const ContainerCards = ({ navigation, orders }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(user.user));
  }, []);

  return orders.length ? (
    <View style={styles.containerCards}>
      {orders &&
        orders.map((order, i) => (
          <OrderCard key={i} order={order} navigation={navigation} />
        ))}
    </View>
  ) : (
    <Text>Sin resultados</Text>
  );
};
