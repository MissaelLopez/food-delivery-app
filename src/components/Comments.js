import { View, Text, Image } from "react-native";
import { ComponentsStyles as styles } from "../styles";
import Stars from "./Stars";

export const Comments = ({ rating }) => {
  const renderStars = () => {
    return <Stars number={rating.stars} />;
  };

  return (
    <View style={styles.commentsContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png",
          }}
        />
        <Text>{rating.client}</Text>
        <Text style={{ marginHorizontal: 5, fontSize: 12 }}>{rating.date}</Text>
      </View>
      {renderStars()}
      <Text>{rating.comment}</Text>
    </View>
  );
};
