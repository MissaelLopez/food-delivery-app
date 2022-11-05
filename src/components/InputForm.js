import { View, Text, TextInput } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import { MaterialIcons } from "react-native-vector-icons";

export const InputForm = (props) => {
  return (
    <View style={styles.inputBoxCont}>
      <MaterialIcons name={props.icon} size={24} color="#f16667" />
      <TextInput {...props} style={styles.inputBox} />
    </View>
  );
};
