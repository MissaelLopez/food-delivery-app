import { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Image, Alert } from "react-native";
import { LoginStyles as styles } from "../styles";
import { Subtitle, Title, InputLabel, Button, Link } from "../components";
import { postAPI } from "../api/axiosInstance";
import { setAuthUser } from "../store/slices/user/userSlice";

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = (to) => {
    navigation.navigate(to);
  };

  const onLogin = async () => {
    for (const [key, value] of Object.entries(user)) {
      if (user[key] === "") {
        Alert.alert(`El campo ${key} no puede estar vacio`);
        return false;
      }
    }

    try {
      const { data, status } = await postAPI.post("/auth", {
        email: user.email,
        password: user.password,
      });

      console.log(data);

      if (status === 200) {
        const userData = {
          email: user.email,
          id: data.user,
          token: data.token,
          type: data.type,
        };

        dispatch(setAuthUser(userData));
        navigation.navigate("App");
      }
    } catch (error) {
      Alert.alert(error.response.data.msg);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon.png")} style={styles.logo} />
      <Title text="Inicia Sesión" />
      <Subtitle text="Bienvenido" />
      <View style={styles.form}>
        <InputLabel
          label="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          value={user.email}
          onChangeText={(email) => setUser({ ...user, email })}
        />
      </View>
      <View style={styles.form}>
        <InputLabel
          label="Contraseña"
          autoCapitalize="none"
          placeholder="Contraseña"
          secureTextEntry={true}
          value={user.password}
          onChangeText={(password) => setUser({ ...user, password })}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Iniciar sesión" onPress={onLogin} />
        <View style={styles.link}>
          <Subtitle text="¿No tienes una cuenta? " />
          <Link text="Registrate" onPress={() => navigate("Register")} />
        </View>
      </View>
    </View>
  );
};
