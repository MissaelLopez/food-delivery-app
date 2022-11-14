import { useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Comments, Loader } from "../../components";
import { getFood } from "../../store/slices/food";
import { ComponentsStyles as styles } from "../../styles";

export const FoodDetail = (props) => {
  const { user } = useSelector((state) => state.user);
  const { food, isLoading } = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const foodId = props.route.params.foodId;

  useEffect(() => {
    dispatch(getFood(user.user, foodId));
  }, []);

  return !isLoading ? (
    <ScrollView>
      <View style={styles.containerFoodPicture}>
        <Image source={{ uri: food.picture }} style={styles.foodPicture} />
      </View>
      <Text style={styles.foodName}>{food.name}</Text>
      <Text style={styles.foodDescription}>{food.description}</Text>
      <ScrollView
        style={{
          alignSelf: "center",
          width: "90%",
          height: 220,
          backgroundColor: "#fff",
          marginTop: 10,
        }}
      >
        <View>
          {food.ratings &&
            food.ratings.map((elm, i) => <Comments key={i} rating={elm} />)}
        </View>
      </ScrollView>
    </ScrollView>
  ) : (
    <Loader />
  );
};
