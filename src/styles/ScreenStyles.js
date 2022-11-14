import { StyleSheet } from "react-native";

export const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  card: {
    shadowColor: "black",
    elevation: 5,
    backgroundColor: "white",
    padding: "5%",
    borderRadius: 10,
    marginVertical: "2.5%",
    marginHorizontal: "5%",
  },
  textInput: {
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    marginTop: 15,
    paddingHorizontal: 3,
    height: 40,
    marginRight: "4%",
    marginLeft: "4%",
  },
  subtitle: {
    paddingTop: 8,
    fontSize: 20,
    color: "#795A37",
    paddingBottom: 7,
  },
  subtitle2: {
    fontSize: 16,
    color: "#000",
    flex: 1,
    marginLeft: 5,
  },
  orderCardImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#f16667",
  },
});
