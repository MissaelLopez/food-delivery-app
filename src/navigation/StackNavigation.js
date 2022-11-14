import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FoodDetail, Login, NewFood, Register } from "../screens";
import OrderDetail from "../screens/restaurants/OrderDetail";
import { DrawerNavigation } from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen component={DrawerNavigation} name="App" />
      <Stack.Screen
        component={OrderDetail}
        name="OrderDetail"
        options={{ headerShown: true, title: "Detalles del pedido" }}
      />
      <Stack.Screen
        component={NewFood}
        name="newFood"
        options={{
          headerTintColor: "#fff",
          headerShown: true,
          title: "Nuevo Platillo",
          headerStyle: {
            backgroundColor: "#f16667",
          },
        }}
      />
      <Stack.Screen
        component={FoodDetail}
        name="FoodDetail"
        options={{
          headerTintColor: "#fff",
          headerShown: true,
          title: "Detalles del platillo",
          headerStyle: {
            backgroundColor: "#f16667",
          },
        }}
      />
    </Stack.Navigator>
  );
};
