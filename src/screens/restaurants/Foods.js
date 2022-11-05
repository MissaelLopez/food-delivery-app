import { useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { ContainerCards, ContainerFoodCards, Loader } from "../../components";
import { getFoods } from "../../store/slices/food/thunks";
import {
  ScreenStyles as styles,
  ComponentsStyles as componentsStyles,
} from "../../styles";
import { Feather } from "react-native-vector-icons";
import { useState } from "react";

export const Foods = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  const { foods, isLoading } = useSelector((state) => state.food);
  const [filterFoods, setFilterFoods] = useState([]);
  const dispatch = useDispatch();

  const formatText = (word) => {
    const tmp = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return tmp.toLowerCase();
  };

  const handleChange = (text) => {
    if (text !== "") {
      const searchText = formatText(text);
      let tmpArray = [];
      const limit = foods.length;

      for (let i = 0; i < limit; i++) {
        const names = formatText(foods[i].name);
        const patt = new RegExp(searchText);
        const res = patt.test(names);

        if (res) {
          tmpArray.push(foods[i]);
        }
      }

      setFilterFoods(tmpArray);
    } else {
      setFilterFoods(foods);
    }
  };

  useEffect(() => {
    dispatch(getFoods(user.user));
    setFilterFoods(foods);
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
            <ContainerFoodCards
              foods={filterFoods || foods}
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
