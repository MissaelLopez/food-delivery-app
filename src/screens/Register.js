import { View, Text, Image } from "react-native";
import { LoginStyles as styles } from "../styles";
import { Subtitle, Title } from "../components";
import InputLabel from "../components/InputLabel";
import Button from "../components/Button";
import Link from "../components/Link";

export const Register = ({ navigation }) => {
  const navigate = (to) => {
    navigation.navigate(to);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon.png")} style={styles.logo} />
      <Title text="Registrate" />
      <Subtitle text="Bienvenido" />
      <View style={styles.form}>
        <InputLabel
          label="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
        />
      </View>
      <View style={styles.form}>
        <InputLabel
          label="Contraseña"
          autoCapitalize="none"
          placeholder="Contraseña"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Iniciar sesión" />
        <View style={styles.link}>
          <Subtitle text="¿Ya tienes una cuenta? " />
          <Link text="Inicia Sesión" onPress={() => navigate("Login")} />
        </View>
      </View>
    </View>
  );
};
