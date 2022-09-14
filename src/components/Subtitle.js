import { Text } from "react-native";
import { ComponentsStyles as styles } from "../styles";

export const Subtitle = (props) => {
  return <Text style={styles.subtitle}>{props.text}</Text>;
};
