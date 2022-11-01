import { StyleSheet } from "react-native";

export const ComponentsStyles = StyleSheet.create({
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  subtitle: {
    color: "#aaa",
    fontSize: 14,
  },
  label: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#f5f5f8",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#f16667",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 10,
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
  },
  linkText: {
    color: "#f16667",
  },
  containerCards: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  orderCard: {
    width: "100%",
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  orderCardContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  orderCardImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    resizeMode: "cover",
  },
  orderCardButtons: {
    flexDirection: "row",
    backgroundColor: "blue",
    width: "100%",
  },
  badge: {
    backgroundColor: "#f16667",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
  },
  searchInput: {
    margin: 20,
    flexDirection: "row",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
