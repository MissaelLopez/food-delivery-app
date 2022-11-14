import { View, Text } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import { OrderCard } from "./OrderCard";

export const ContainerCards = ({ navigation, orders }) => {
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
