import { View } from "react-native";
import { useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons } from "react-native-vector-icons";
import { CustomDrawer, HeaderButton } from "../components";
import { AllFoods, Home, Orders, Restaurants } from "../screens";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);

  const handlePress = () => {
    navigation.navigate("newFood");
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabelStyle: { marginLeft: -25 },
        drawerActiveBackgroundColor: "#f16667",
        drawerActiveTintColor: "#fff",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      {user.type === "client" && (
        <>
          <Drawer.Screen
            name="Restaurants"
            component={Restaurants}
            options={{
              drawerIcon: ({ color }) => (
                <Ionicons
                  name="ios-restaurant-outline"
                  size={22}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Platillos"
            component={AllFoods}
            options={{
              drawerIcon: ({ color }) => (
                <Ionicons
                  name="ios-fast-food-outline"
                  size={22}
                  color={color}
                />
              ),
            }}
          />
        </>
      )}
      {user.type === "restaurant" && (
        <>
          <Drawer.Screen
            name="Pedidos"
            component={Orders}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialIcons name="delivery-dining" size={22} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Platillos"
            component={Foods}
            options={{
              title: "Mis Platillos",
              drawerIcon: ({ color }) => (
                <Ionicons
                  name="ios-fast-food-outline"
                  size={22}
                  color={color}
                />
              ),
              headerRight: () => (
                <View style={{ width: "50%" }}>
                  <HeaderButton onPress={handlePress} />
                </View>
              ),
            }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};
