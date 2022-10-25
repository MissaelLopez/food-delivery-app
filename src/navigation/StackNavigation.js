import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register } from "../screens";
import { Food } from "../screens/foods";
import { DrawerNavigation } from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen component={DrawerNavigation} name="App" />
      <Stack.Screen
        component={Food}
        name="Food"
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
