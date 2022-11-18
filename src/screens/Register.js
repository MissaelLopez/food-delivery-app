import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAPI } from "../api/axiosInstance";
import { View, Image, ScrollView, Alert } from "react-native";
import { LoginStyles as styles } from "../styles";
import { Subtitle, Title, InputLabel, Button, Link } from "../components";
import { setAuthUser } from "../store/slices/user/userSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";

export const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = (to) => {
    navigation.navigate(to);
  };

  const onLogin = async () => {
    try {
      const { data, status } = await postAPI.post("/auth", {
        email: userData.email,
        password: userData.password,
      });

      if (status === 200) {
        const user = {
          email: userData.email,
          id: data.user,
          token: data.token,
          type: data.type,
        };

        dispatch(setAuthUser(user));
        navigate("App");
      }
    } catch (error) {
      console.log(error);
      Alert.alert(error.response.data.msg);
    }
  };

  const onRegister = async () => {
    for (const [key, value] of Object.entries(userData)) {
      if (userData[key] === "") {
        Alert.alert(`El campo ${key} no puede estar vacio`);
        return false;
      }
    }

    try {
      createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredentials) => {
          const user = userCredentials.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      const { data, status } = await postAPI.post("/clients", {
        name: userData.name,
        lastname: userData.lastname,
        phone: userData.phone,
        email: userData.email,
        password: userData.password,
      });

      if (status === 201) {
        onLogin();
      }
    } catch (error) {
      Alert.alert(error.response.data.msg);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
        <Title text="Registrate" />
        <Subtitle text="Bienvenido" />
        <View style={styles.form}>
          <InputLabel
            label="Nombre(s)"
            placeholder="Nombre(s)"
            value={userData.name}
            onChangeText={(name) => setUserData({ ...userData, name })}
          />
        </View>
        <View style={styles.form}>
          <InputLabel
            label="Apellido(s)"
            placeholder="Apellido(s)"
            value={userData.lastname}
            onChangeText={(lastname) => setUserData({ ...userData, lastname })}
          />
        </View>
        <View style={styles.form}>
          <InputLabel
            label="Teléfono"
            keyboardType="numeric"
            autoCapitalize="none"
            placeholder="Número de teléfono"
            value={userData.phone}
            onChangeText={(phone) => setUserData({ ...userData, phone })}
          />
        </View>
        <View style={styles.form}>
          <InputLabel
            label="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Email"
            value={userData.email}
            onChangeText={(email) => setUserData({ ...userData, email })}
          />
        </View>
        <View style={styles.form}>
          <InputLabel
            label="Contraseña"
            autoCapitalize="none"
            placeholder="Contraseña"
            secureTextEntry={true}
            value={userData.password}
            onChangeText={(password) => setUserData({ ...userData, password })}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Registrarse" onPress={onRegister} />
          <View style={styles.link}>
            <Subtitle text="¿Ya tienes una cuenta? " />
            <Link text="Inicia Sesión" onPress={() => navigate("Login")} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
