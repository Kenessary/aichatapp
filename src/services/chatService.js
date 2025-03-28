import axios from "axios";
import { OPENAI_API_KEY } from "@env";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = OPENAI_API_KEY;

// Отправка сообщение
export const sendMessage = async ({
  inputText,
  messages,
  setMessages,
  setLoading,
  scrollToBottom,
}) => {
  if (!inputText.trim()) return;

  const userMessage = { role: "user", content: inputText };
  const updatedMessages = [...messages, userMessage];

  setMessages(updatedMessages);
  scrollToBottom();
  setLoading(true);

  setMessages([
    ...updatedMessages,
    { role: "assistant", content: "typing..." },
  ]);

  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Ты спец по машинам, отвечай дружелюбно.", // Системный промпт
          },
          ...updatedMessages, // Пользовательский промпт
        ],
      },
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );

    const botMessage = response.data.choices[0]?.message;
    setMessages((prevMessages) => [...prevMessages.slice(0, -1), botMessage]);
  } catch (error) {
    setMessages((prevMessages) => [
      ...prevMessages.slice(0, -1),
      { role: "assistant", content: "Ошибка запроса. Попробуйте ещё раз." },
    ]);
  }

  setLoading(false);
  scrollToBottom();
};

// Очистка чата
export const clearChat = (setMessages) => {
  setMessages([]);
};
