import { Text } from "react-native";
import { ComponentsStyles as styles } from "../styles";

export const Title = (props) => {
  return <Text style={styles.title}>{props.text}</Text>;
};
