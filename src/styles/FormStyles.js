import { StyleSheet } from "react-native";

export const FormStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    paddingTop: 8,
    fontSize: 20,
    paddingBottom: 7,
  },
  foodPicture: {
    height: 150,
    width: 150,
    borderRadius: 100,
    backgroundColor: "#f16667",
    marginBottom: 10,
  },
  buttonPicture: {
    backgroundColor: "#f16667",
    padding: 5,
    marginTop: 15,
    borderRadius: 100,
    width: "45%",
    shadowColor: "black",
    elevation: 5,
  },
  textButton: {
    textAlign: "center",
    color: "white",
  },
  select: {
    backgroundColor: "transparent",
    color: "#936037",
    borderRadius: 4,
    paddingHorizontal: 0,
    height: 40,
  },
  selectText: {
    color: "#936037",
    textAlign: "left",
    fontSize: 14,
  },
  inputBoxCont: {
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#936037",
    borderRadius: 100,
    width: "90%",
    marginTop: 15,
    paddingHorizontal: 15,
    height: 50,
    marginRight: "4%",
    marginLeft: "4%",
  },
});
