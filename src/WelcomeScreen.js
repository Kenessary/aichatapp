import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { welcomeStyles } from "./styles/WelcomScreen.styles";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={welcomeStyles.container}>
      <StatusBar style="light" />
      <Image source={require("../assets/AI2.png")} style={welcomeStyles.img} />
      <Text style={welcomeStyles.title}>Добро пожаловать!</Text>
      <TouchableOpacity
        style={welcomeStyles.button}
        onPress={() => navigation.navigate("Chat")}
      >
        <Text style={welcomeStyles.buttonText}>Перейти в чат</Text>
        <AntDesign name="right" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
