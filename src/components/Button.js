import { Text, TouchableOpacity } from "react-native";
import { ComponentsStyles as styles } from "../styles";

export const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.textButton}>{props.text}</Text>
    </TouchableOpacity>
  );
};
