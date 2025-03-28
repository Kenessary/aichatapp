import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  LayoutAnimation,
  UIManager,
  Platform,
  Animated,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderTab from "./components/HeaderTab";
import { sendMessage } from "./services/chatService";
import TypingAnimatedText from "./components/TypingAnimatedText";
import { styles } from "./styles/Chat.styles";
import { StatusBar } from "expo-status-bar";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef(null);
  const typingAnimation = useRef(new Animated.Value(0)).current;

  const scrollToBottom = () => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  useEffect(() => {
    if (messages.length > 0) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      scrollToBottom();
    }
  }, [messages]);

  useEffect(() => {
    if (loading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(typingAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(typingAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      typingAnimation.setValue(0);
    }
  }, [loading]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <HeaderTab setMessages={setMessages} />
      <FlatList
        showsVerticalScrollIndicator={false}
        ref={flatListRef}
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        style={styles.chatList}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageWrapper,
              item.role === "user" ? styles.userMessage : styles.botMessage,
            ]}
          >
            {item.content === "typing..." ? (
              <TypingAnimatedText animationValue={typingAnimation} />
            ) : (
              <Text style={styles.messageText}>{item.content}</Text>
            )}
          </View>
        )}
        onContentSizeChange={scrollToBottom}
        onLayout={scrollToBottom}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Задайте вопрос..."
          placeholderTextColor={"#7E838E"}
          cursorColor={"grey"}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            sendMessage({
              inputText,
              messages,
              setMessages,
              setLoading,
              scrollToBottom,
            });
            setInputText("");
            Keyboard.dismiss();
          }}
        >
          <Ionicons name="send" size={15} color="#7E838E" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
