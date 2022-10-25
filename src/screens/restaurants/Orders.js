import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { ContainerCards } from "../../components";
import { ScreenStyles as styles } from "../../styles";

export const Orders = ({ navigation }) => {
  const { foods } = useSelector((state) => state.food);

  return (
    <ScrollView>
      <View style={styles.container}>
        {!foods.length ? (
          <ContainerCards navigation={navigation} />
        ) : (
          <Text>No hay Pedidos</Text>
        )}
      </View>
    </ScrollView>
  );
};
