import { View, Text, TouchableOpacity, Image } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import { Badge } from "./Badge";

const FoodCard = ({ food, navigation }) => {
  return (
    <TouchableOpacity style={styles.foodCard}>
      <View style={styles.foodCardContent}>
        <Image source={{ uri: food.picture }} style={styles.foodCardImage} />
        <Text style={{ fontWeight: "bold", fontSize: 14 }}>{food.name}</Text>
        <Badge text={food.category} />
        <Text style={{ fontSize: 14, marginVertical: 5 }}>
          {food.description}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>${food.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
