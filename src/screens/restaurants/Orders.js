import { View, ScrollView, SafeAreaView } from "react-native";
import { ContainerCards, Loader } from "../../components";
import {
  ScreenStyles as styles,
  ComponentsStyles as componentsStyles,
} from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../store/slices/orders/thunks";

export const Orders = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  const { orders, isLoading } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(user.user));
  }, []);

  return !isLoading ? (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ContainerCards orders={orders} navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Loader />
  );
};
