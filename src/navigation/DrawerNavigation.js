import { useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CustomDrawer } from "../components";
import { Home } from "../screens";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);

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
            name="Platillos"
            component={Home}
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
          <Drawer.Screen
            name="Restaurants"
            component={Home}
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
        </>
      )}
      {user.type === "restaurant" && (
        <>
          <Drawer.Screen
            name="Mis Platillos"
            component={Home}
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
    </Drawer.Navigator>
  );
};
