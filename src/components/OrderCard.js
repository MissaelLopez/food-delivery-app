import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import { Badge } from "./Badge";

export const OrderCard = ({ navigation, order }) => {
  const [names, setNames] = useState("");
  const [foods, setFoods] = useState(Object.values(order.foods));

  const handlePress = () => {
    navigation.navigate("OrderDetail", { order: order });
  };

  useEffect(() => {
    let name = "";

    name += foods.map((food) => {
      return ` ${food.name}`;
    });
    setNames(name);
  }, []);

  return (
    <TouchableOpacity style={styles.orderCard} onPress={handlePress}>
      <View style={styles.orderCardContent}>
        <Image
          source={{
            uri:
              foods.length === 1
                ? foods[0].picture
                : "https://img.freepik.com/vector-premium/hamburguesa-bolsa-papel-burger-aislado-blanco_385450-165.jpg?w=360",
          }}
          style={styles.orderCardImage}
        />
        <View>
          <Text style={{ fontWeight: "bold", marginBottom: 2 }}>{names}</Text>
          <Text style={{ marginBottom: 2 }}> {order.client}</Text>
          <Text style={{ color: "#f16667", marginBottom: 2 }}>
            {" "}
            {order.date}
          </Text>
        </View>
        <Badge text={order.status} />
      </View>
    </TouchableOpacity>
  );
};
