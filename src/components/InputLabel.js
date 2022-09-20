import { View, Text, TextInput } from "react-native";
import { ComponentsStyles as styles } from "../styles";

export const InputLabel = (props) => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};
