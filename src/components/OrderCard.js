import { View, Text, TouchableOpacity, Image } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import { Badge } from "./Badge";

export const OrderCard = ({ navigation, order }) => {
  const handlePress = () => {
    navigation.navigate("OrderDetail");
  };

  return (
    <TouchableOpacity style={styles.orderCard} onPress={handlePress}>
      <View style={styles.orderCardContent}>
        <Image source={{ uri: order.picture }} style={styles.orderCardImage} />
        <View>
          <Text style={{ fontWeight: "bold", marginBottom: 2 }}>
            {order.name}
          </Text>
          <Text style={{ marginBottom: 2 }}>{order.client}</Text>
          <Text style={{ color: "#f16667", marginBottom: 2 }}>
            {order.date}
          </Text>
        </View>
        <Badge text={order.status} />
      </View>
    </TouchableOpacity>
  );
};
