import { View, Text } from "react-native";
import { ComponentsStyles as styles } from "../styles";

export const Badge = (props) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{props.text}</Text>
    </View>
  );
};
