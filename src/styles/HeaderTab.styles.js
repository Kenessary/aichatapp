import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingBottom: 12,
    marginBottom: 5,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#242F4A",
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 35,
    height: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    marginLeft: 5,
  },
  btn: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#3D4354",
    flexDirection: "row",
    alignItems: "center",
  },
  btnText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7E838E",
    marginRight: 5,
  },
});
