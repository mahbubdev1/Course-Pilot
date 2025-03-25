"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaLocationArrow } from "react-icons/fa6";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const API_URL = "https://api-inference.huggingface.co/models/gpt2";
  const API_KEY = process.env.NEXT_PUBLIC_GPT_2_API_KEY;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Add "Analyzing" message before making the API request
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "😇Analyzing...", sender: "bot" },
    ]);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: input }),
      });

      const data = await response.json();
      const botReply =
        data[0]?.generated_text || "Sorry, I didn't understand that.";

      // Replace "Analyzing" with the actual bot reply
      setMessages([...newMessages, { text: botReply, sender: "bot" }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { text: "⚠️ API Error! Try again later.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen justify-center mt-16">
      <Card className="w-full max-w-7xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl ">
            Chatbot ‍Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="xl:h-[600px] lg:h-[400px] md:h-[400px] max-sm:h-[400px] overflow-y-auto rounded p-4  space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white text-right ml-auto"
                    : "in-dark:bg-gray-800 in-dark:text-white bg-gray-200 text-left mr-auto"
                } w-fit max-w-[80%]`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-4">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              className="in-dark:bg-white bg-blue-500"
            >
              <FaLocationArrow />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
