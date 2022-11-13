import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Comments, Loader } from "../../components";
import { getFood } from "../../store/slices/food";

export const FoodDetail = (props) => {
  const { user } = useSelector((state) => state.user);
  const { food, isLoading } = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const foodId = props.route.params.foodId;
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    dispatch(getFood(user.user, foodId));
    setRatings(food.ratings);
  }, []);

  return !isLoading ? (
    <ScrollView>
      <Text>{food.name}</Text>
      <ScrollView
        style={{ width: "100%", height: 220, backgroundColor: "#fff" }}
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
