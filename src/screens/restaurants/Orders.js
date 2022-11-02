import { View, ScrollView, SafeAreaView, TextInput } from "react-native";
import { ContainerCards, Loader } from "../../components";
import {
  ScreenStyles as styles,
  ComponentsStyles as componentsStyles,
} from "../../styles";
import Feather from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Orders = ({ navigation }) => {
  const { orders, isLoading } = useSelector((state) => state.orders);
  const [filterOrders, setFilterOrders] = useState(orders);

  const formatText = (word) => {
    const tmp = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return tmp.toLowerCase();
  };

  const handleChange = (text) => {
    const foods = orders.map((order) => {
      return order.foods;
    });

    const searchText = formatText(text);
    const tmpArray = [];
    const limit = foods.length;

    /* setFilterOrders(tmpArray); */
  };

  return !isLoading ? (
    <SafeAreaView>
      <ScrollView>
        <View style={componentsStyles.searchInput}>
          <Feather
            name="search"
            size={20}
            color="#c6c6c6"
            style={{ marginRight: 5, marginTop: 5 }}
          />
          <TextInput
            placeholder="Buscar..."
            onChangeText={(text) => handleChange(text)}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.container}>
          <ContainerCards orders={orders} navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Loader />
  );
};
