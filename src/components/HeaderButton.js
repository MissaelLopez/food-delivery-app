import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";

export const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "transparent",
        alignItems: "center",
        width: 30,
        alignSelf: "flex-end",
        marginHorizontal: 10,
      }}
      onPress={props.onPress}
    >
      <AntDesign name="pluscircle" size={24} color="#f16667" />
    </TouchableOpacity>
  );
};
