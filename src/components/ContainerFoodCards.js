import { View, Text } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import FoodCard from "./FoodCard";

export const ContainerFoodCards = ({ foods, navigation }) => {
  return foods && foods.length ? (
    <View style={styles.containerCards}>
      {foods &&
        foods.map((food, i) => (
          <FoodCard key={i} food={food} navigation={navigation} />
        ))}
    </View>
  ) : (
    <Text>Sin resultados</Text>
  );
};
