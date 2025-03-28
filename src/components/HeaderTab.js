import { Image, Text, TouchableOpacity, View } from "react-native";
import { headerStyles } from "../styles/HeaderTab.styles";
import { MaterialIcons } from "@expo/vector-icons";
import { clearChat } from "../services/chatService";

const HeaderTab = ({ setMessages }) => {
  const img = require("../../assets/AI2.png");
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.titleContainer}>
        <Image source={img} style={headerStyles.img} />
        <Text style={headerStyles.title}>AI Chat</Text>
      </View>
      <TouchableOpacity
        style={headerStyles.btn}
        onPress={() => clearChat(setMessages)}
      >
        <Text style={headerStyles.btnText}>Очистить чат</Text>
        <MaterialIcons name="delete" size={16} color="#7E838E" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTab;
