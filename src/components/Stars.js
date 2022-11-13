import { View, Text } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import { FontAwesome } from "react-native-vector-icons";

const Stars = ({ number }) => {
  if (number === 0) {
    return (
      <View style={styles.starsContainer}>
        <FontAwesome name="star-o" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
      </View>
    );
  }

  if (number === 1) {
    return (
      <View style={styles.starsContainer}>
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
      </View>
    );
  }

  if (number === 2) {
    return (
      <View style={styles.starsContainer}>
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
      </View>
    );
  }

  if (number === 3) {
    return (
      <View style={styles.starsContainer}>
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
      </View>
    );
  }

  if (number === 4) {
    return (
      <View style={styles.starsContainer}>
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star-o" color="#f16667" size={14} />
      </View>
    );
  }

  if (number === 5) {
    return (
      <View style={styles.starsContainer}>
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star" color="#f16667" size={14} />
        <FontAwesome name="star" color="#f16667" size={14} />
      </View>
    );
  }
};

export default Stars;
