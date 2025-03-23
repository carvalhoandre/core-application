"use server";

import Message from "@/model/menssages";

export default async function toTalk(
  chatId: string,
  message: Message
): Promise<string | null> {
  try {
    const webhookUrl = process.env.CHAT_WEBHOOK;

    if (!webhookUrl) {
      throw new Error("Webhook not found");
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatId,
        message: message.text,
      }),
    });

    if (!response.ok) {
      throw new Error("Webhook failed");
    }

    const responseJson = await response.json();
    return responseJson.response;
  } catch (error) {
    console.error(error);

    return null;
  }
}
