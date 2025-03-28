# ChatApp

Приложение чата **React Native**, созданное с помощью **Expo**. Это приложение позволяет пользователям отправлять и получать сообщения в режиме реального времени с помощью чистого и удобного пользовательского интерфейса. ИИ отвечает через API OpenAI.

## Используемые технологии

- **React Native** (через Expo) 
- **React Navigation** (для навигации) 
- **Styled Components** (для стилизации)
- **Axios** (для обработки запросов API)
- **Animated** (для анимации)
- **API OpenAI (openai.chat.completions, модель gpt-3.5-turbo)** (модель OpenAI)

## Установка и настройка

### **1 Клонировать репозиторий**
```sh
git clone https://github.com/Kenessary/aichatapp.git
cd aichatapp
```
### **2 Установка библиотек**
```sh
npm install
```

### **3 Настройка переменных среды**
Создайте файл .env в корневом каталоге и добавьте свои Token:
```sh
OPENAI_API_KEY = your_key_api
```
### **4 Запустите приложение**
Создайте файл .env в корневом каталоге и добавьте свои Token:
```sh
npx expo start
```

## 📸 Скриншоты
ИИ — консультант по тачкам. Системный промпт (например, "Ты спец по машинам, отвечай дружелюбно")

| Welcome Screen | Chat Screen |
|-------------|------------|
| <img src="https://github.com/Kenessary/aichatapp/blob/main/Screenshot_2025_03_29_04_12_57_65_92460851df6f172a4592fca41cc2d2e6.jpg" width="300"/> | <img src="https://github.com/Kenessary/aichatapp/blob/main/Screenshot_2025_03_29_04_13_28_09_92460851df6f172a4592fca41cc2d2e6.jpg" width="300"/> |
