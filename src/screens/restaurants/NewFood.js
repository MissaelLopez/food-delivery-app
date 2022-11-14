import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { FormStyles as styles } from "../../styles";
import { InputForm } from "../../components/InputForm";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesome } from "react-native-vector-icons";
import validator from "validator";
import { onValue, ref, set } from "firebase/database";
import { db } from "../../../config";
import { getFoods } from "../../store/slices/food/thunks";

export const NewFood = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [food, setFood] = useState({
    id: Math.floor(Date.now() / 1000),
    name: "",
    description: "",
    price: "",
    category: "",
    picture:
      "https://youngwomenshealth.org/wp-content/uploads/2014/02/fast-food.jpg",
    status: "Disponible",
  });

  const openImagePickerAsync = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permission.granted === false) {
      Alert.alert("Se requiere permisos");
      return;
    }

    const picker = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (picker.cancelled === true) {
      return;
    }

    setFood({ ...food, picture: picker.uri });
  };

  const handlePress = () => {
    if (validator.isEmpty(food.name)) {
      return Alert.alert("El campo del nombre no puede ir vacio");
    }

    if (validator.isEmpty(food.description)) {
      return Alert.alert("El campo de la descripcion no puede ir vacio");
    }

    if (validator.isEmpty(food.price)) {
      return Alert.alert("El campo del precio no puede ir vacio");
    }

    if (!validator.isInt(food.price)) {
      return Alert.alert("El precio debe ser un numero");
    }

    if (validator.isEmpty(food.category)) {
      return Alert.alert("Debes seleccionar una categoria para el platillo");
    }

    set(ref(db, `db/restaurants/${user.user}/foods/${food.id}`), food)
      .then(() => {
        Alert.alert("Platillo guardado satisfactoriamente");
        dispatch(getFoods(user.user));
        navigation.navigate("Platillos");
      })
      .catch((error) => {
        Alert.alert("Ha ocurrido un error");
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Registra un nuevo platillo</Text>

        <Image source={{ uri: food.picture }} style={styles.foodPicture} />
        <TouchableOpacity
          style={styles.buttonPicture}
          onPress={openImagePickerAsync}
        >
          <Text style={styles.textButton}>Seleccionar Imagen</Text>
        </TouchableOpacity>
        <InputForm
          onChangeText={(name) => setFood({ ...food, name })}
          value={food.name}
          icon="fastfood"
          placeholder="Nombre del platillo"
        />
        <InputForm
          onChangeText={(description) => setFood({ ...food, description })}
          value={food.description}
          icon="description"
          placeholder="Descripcion del platillo"
        />
        <InputForm
          onChangeText={(price) => setFood({ ...food, price })}
          value={food.price}
          icon="attach-money"
          placeholder="Precio del platillo"
          keyboardType="numeric"
        />
        <View style={styles.inputBoxCont}>
          <FontAwesome name="tag" size={24} color="#f16667" />
          <SelectDropdown
            data={["Desayuno", "Comida", "Cena", "Antojitos", "Bebidas"]}
            onSelect={(selected) => {
              setFood({ ...food, category: selected });
            }}
            defaultButtonText="Categoria"
            buttonStyle={styles.select}
            buttonTextStyle={styles.selectText}
          />
        </View>
        <TouchableOpacity style={styles.buttonPicture} onPress={handlePress}>
          <Text style={styles.textButton}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
