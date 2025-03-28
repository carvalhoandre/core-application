import { Id } from "@core";
import useLocalStorage from "./useLocalStorage";
import Message from "@/model/menssages";
import toTalk from "@/services/chat";
import { useState } from "react";

export default function useChat() {
  const [chatId] = useLocalStorage<string>("chatId", Id.create());
  const [messages, setMessages] = useLocalStorage<Message[]>("messages", []);
  const [loading, setLoading] = useState(false);

  const handleAddMessage = async (text: string) => {
    setLoading(true);

    try {
      const newMessage: Message = {
        id: Id.create(),
        text,
        author: "Visitor",
        side: "right",
      };

      setMessages((msgs) => [...msgs, newMessage])
      const response = await toTalk(chatId, newMessage);

      if (!response) return null;

      const botMessage: Message = {
        id: Id.create(),
        text: response,
        author: "Bot",
        side: "left",
      };

			setMessages((msgs) => [...msgs, botMessage])
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return {
    chatId,
    messages,
    loading,
    clearChat,
    setMessages,
    handleAddMessage,
  };
}
