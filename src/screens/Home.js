import { View, Text } from "react-native";
import { useSelector } from "react-redux";

export const Home = () => {
  const { foods } = useSelector((state) => state.food);

  return (
    <View>
      {foods.map((food) => (
        <>
          <Text>{food.name}</Text>
          <Text>{food.description}</Text>
          <Text>$ {food.price}</Text>
          <Text>------------------------------</Text>
        </>
      ))}
    </View>
  );
};
