import { View, Text, TouchableOpacity } from "react-native";
import { ComponentsStyles as styles } from "../styles";

export const Link = (props) => {
  return (
    <TouchableOpacity style={styles.link} onPress={props.onPress}>
      <Text style={styles.linkText}>{props.text}</Text>
    </TouchableOpacity>
  );
};
