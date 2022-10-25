import { View, Text } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import { OrderCard } from "./OrderCard";

export const ContainerCards = ({ navigation }) => {
  return (
    <View style={styles.containerCards}>
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
      <OrderCard navigation={navigation} />
    </View>
  );
};
