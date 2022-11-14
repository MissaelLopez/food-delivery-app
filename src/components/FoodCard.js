import { View, Text, TouchableOpacity, Image } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import { Badge } from "./Badge";
import Stars from "./Stars";

const FoodCard = ({ food, navigation }) => {
  const handlePress = () => {
    navigation.navigate("FoodDetail", { foodId: food.id });
  };

  const avgStars = () => {
    let sum = 0;
    let elms = 0;
    food.ratings.map((elm, i) => {
      sum += elm.stars;
      elms = i;
    });

    const avg = sum / elms;

    return <Stars number={avg} />;
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.foodCard}>
      <View style={styles.foodCardContent}>
        <Image source={{ uri: food.picture }} style={styles.foodCardImage} />
        <Text style={{ fontWeight: "bold", fontSize: 14 }}>{food.name}</Text>
        <Badge text={food.category} />
        <Text style={{ fontSize: 14, marginVertical: 5 }}>
          {food.description}
        </Text>
        {avgStars()}
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>${food.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
