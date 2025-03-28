import React from "react";
import { Animated, Text, StyleSheet } from "react-native";

const TypingAnimatedText = ({ animationValue }) => {
  return (
    <Animated.Text
      style={[
        styles.typingText,
        {
          opacity: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.3, 1],
          }),
        },
      ]}
    >
      ИИ печатает...
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  typingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default TypingAnimatedText;
