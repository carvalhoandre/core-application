"use client";

import useChat from "@/hooks/useChat";
import { useState } from "react";
import ContentMD from "@/app/components/shared/ContentMD";
import Image from "next/image";

const ChatPage = () => {
  const { chatId, messages, loading, handleAddMessage, clearChat } =
    useChat();
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Chat {chatId}</h1>
      <button onClick={clearChat}>Limpar</button>


      <ul className="flex flex-col gap-2">
        {messages.map((message) => (
          <li key={message.id}>
            <div>{message.author}</div>

            <ContentMD markdown={message.text} />
          </li>
        ))}
      </ul>

      {loading && (
        <Image src="/pensando.gif" alt="Pensando" width={50} height={50} />
      )}
      <h2>Escreva sua mensagem</h2>

      <input
        type="text"
        value={text}
        className="border border-gray-700 rounded p-2"
        onChange={({ target }) => setText(target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleAddMessage(text);
            setText("");
          }
        }}
      />
    </div>
  );
};

export default ChatPage;
