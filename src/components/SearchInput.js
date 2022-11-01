import { useState } from "react";
import { View, TextInput } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export const SearchInput = (props) => {
  const [text, setText] = useState("");
  
  return (
    <View
      style={{
        margin: 20,
        flexDirection: "row",
        borderColor: "#C6C6C6",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
      }}
    >
      <Feather
        name="search"
        size={20}
        color="#C6C6C6"
        style={{ marginRight: 5, marginTop: 5 }}
      />
      <TextInput
        placeholder="Buscar..."
        onChangeText={() => props.handleChange((text) => setText(text))}
      />
    </View>
  );
};
