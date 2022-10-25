import { View, Text, TouchableOpacity, Image } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import { Badge } from "./Badge";

export const OrderCard = ({ navigation }) => {
  const bgi = {
    uri: "https://static.diariovasco.com/www/multimedia/202205/18/media/cortadas/burger-RtwN88WBAR2yhwDHASHLf2L-1248x770@Diario%20Vasco.jpg",
  };

  const handlePress = () => {
    navigation.navigate("Food");
  };

  return (
    <TouchableOpacity style={styles.orderCard} onPress={handlePress}>
      <View style={styles.orderCardContent}>
        <Image source={bgi} style={styles.orderCardImage} />
        <View>
          <Text style={{ fontWeight: "bold", marginBottom: 2 }}>
            Hamburguesa Especial
          </Text>
          <Text style={{ marginBottom: 2 }}>Missael Lopez</Text>
          <Text style={{ color: "#f16667", marginBottom: 2 }}>
            Sep 20, 11:25
          </Text>
        </View>
        <Badge text="Nuevo" />
      </View>
    </TouchableOpacity>
  );
};
