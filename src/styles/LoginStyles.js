import { StyleSheet } from "react-native";

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 40,
  },
  logo: {
    marginVertical: 20,
    width: 100,
    height: 100,
  },
  form: {
    width: "100%",
    marginVertical: 20,
    paddingHorizontal: 30,
    alignSelf: "flex-start",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 30,
    marginVertical: 40,
  },
  link: {
    alignSelf: "center",
    flexDirection: "row",
    paddingVertical: 5,
  },
});
