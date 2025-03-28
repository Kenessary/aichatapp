import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#1B202D",
    width: "100%",
    alignItems: "center",
  },
  chatList: {
    width: "95%",
    marginBottom: 15,
  },
  messageWrapper: {
    padding: 12,
    borderRadius: 15,
    marginVertical: 7,
    maxWidth: "80%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#7A8194",
    color: "white",
    borderTopRightRadius: 0,
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#373E4E",
    color: "white",
    borderTopLeftRadius: 0,
  },
  messageText: {
    color: "white",
  },
  typingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  inputContainer: {
    width: "94%",
    flexDirection: "row",
    padding: 5,
    borderRadius: 50,
    backgroundColor: "#3D4354",
    bottom: 5,
  },
  input: {
    flex: 1,
    color: "white",
    paddingHorizontal: 8,
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#1B202D",
    padding: 10,
    borderRadius: 20,
  },
});
