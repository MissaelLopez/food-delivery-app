import { View, Text, TouchableOpacity, Image } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import Stars from "./Stars";

export const RestaurantCard = ({ restaurant, navigation }) => {
  const handlePress = () => {
    navigation.navigate("RestaurantDetail", { restaurantId: restaurant.id });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.foodCard}>
      <View style={styles.foodCardContent}>
        <Image source={{ uri: restaurant.logo }} style={styles.foodCardImage} />
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {restaurant.name}
        </Text>
        <Text style={{ fontSize: 14, marginVertical: 5 }}>
          {restaurant.city}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
