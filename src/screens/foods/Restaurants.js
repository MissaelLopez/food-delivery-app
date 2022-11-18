import { useEffect } from "react";
import { View, TextInput, SafeAreaView, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../store/slices/restaurant/thunks";
import {
  ScreenStyles as styles,
  ComponentsStyles as componentsStyles,
} from "../../styles";
import { Feather } from "react-native-vector-icons";
import { Loader } from "../../components";
import ContainerRestaurantsCards from "../../components/ContainerRestaurantsCards";

export const Restaurants = ({ navigation }) => {
  const { restaurants, isLoading } = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return !isLoading ? (
    <>
      <View style={componentsStyles.searchInput}>
        <Feather
          name="search"
          size={20}
          color="#c6c6c6"
          style={{ marginRight: 5, marginTop: 5 }}
        />
        <TextInput
          placeholder="Buscar..."
          autoCapitalize="none"
          onChangeText={(text) => handleChange(text)}
        />
      </View>
      <SafeAreaView style={{ marginBottom: 100 }}>
        <ScrollView>
          <View style={styles.container}>
            {/* <ContainerFoodCards
              foods={filterFoods || foods}
              navigation={navigation}
            /> */}
            <ContainerRestaurantsCards
              restaurants={restaurants}
              navigation={navigation}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  ) : (
    <Loader />
  );
};
