import { View, Text } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import { RestaurantCard } from "./RestaurantCard";

const ContainerRestaurantsCards = ({ restaurants, navigation }) => {
  return restaurants && restaurants.length ? (
    <View style={styles.containerCards}>
      {restaurants &&
        restaurants.map((restaurant, i) => (
          <RestaurantCard
            key={i}
            restaurant={restaurant}
            navigation={navigation}
          />
        ))}
    </View>
  ) : (
    <Text>Sin resultados</Text>
  );
};

export default ContainerRestaurantsCards;
