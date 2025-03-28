import { StyleSheet } from "react-native";

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B202D",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#3D4354",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  img: {
    width: 200,
    height: 200,
  },
});
