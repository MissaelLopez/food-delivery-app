import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";

export const CustomDrawer = (props) => {
  const { user } = useSelector((state) => state.user);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#fff" }}
      >
        <View style={{ padding: 20, marginBottom: 20 }}>
          <Image
            source={require("../assets/icon.png")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text style={{ color: "#000", fontSize: 18 }}>{user.email}</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
