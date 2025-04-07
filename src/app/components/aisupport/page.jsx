// "use client";
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { FaLocationArrow } from "react-icons/fa6";

// export default function Chatbot() {
//   const [messages, setMessages] = useState([
//     { text: "Hi! How can I help you?", sender: "bot" },
//   ]);
//   const [input, setInput] = useState("");

//   const API_URL = "https://api-inference.huggingface.co/models/gpt2";
//   const API_KEY = process.env.NEXT_PUBLIC_GPT_2_API_KEY;

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { text: input, sender: "user" }];
//     setMessages(newMessages);
//     setInput("");

//     // Add "Analyzing" message before making the API request
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { text: "😇Analyzing...", sender: "bot" },
//     ]);

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ inputs: input }),
//       });

//       const data = await response.json();
//       const botReply =
//         data[0]?.generated_text || "Sorry, I didn't understand that.";

//       // Replace "Analyzing" with the actual bot reply
//       setMessages([...newMessages, { text: botReply, sender: "bot" }]);
//     } catch (error) {
//       setMessages([
//         ...newMessages,
//         { text: "⚠️ API Error! Try again later.", sender: "bot" },
//       ]);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-4 min-h-screen justify-center mt-16">
//       <Card className="w-full max-w-7xl">
//         <CardHeader>
//           <CardTitle className="text-center text-2xl ">
//             Chatbot ‍Support
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="xl:h-[600px] lg:h-[400px] md:h-[400px] max-sm:h-[400px] overflow-y-auto rounded p-4  space-y-2">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`p-2 rounded-lg ${
//                   msg.sender === "user"
//                     ? "bg-blue-500 text-white text-right ml-auto"
//                     : "in-dark:bg-gray-800 in-dark:text-white bg-gray-200 text-left mr-auto"
//                 } w-fit max-w-[80%]`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>
//           <div className="flex gap-2 mt-4">
//             <Input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type your message..."
//               className="flex-1"
//             />
//             <Button
//               onClick={sendMessage}
//               className="in-dark:bg-white bg-blue-500"
//             >
//               <FaLocationArrow />
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import axios from "axios";
import { Button, Input, Card, CardContent, Text } from "@shadcn/ui";
import { useNavigate } from "next/navigation"; // Importing from next/navigation
import useAxiosPublic from "@/app/axios/hooks/useAxiosPublic";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate(); // Now using navigate instead of useRouter

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "You", text: input };ok 
    setChat([...chat, userMessage]);

    try {
      const res = await axiosPublic.post("/api/chat", { message: input });
      const botMessage = { sender: "Bot", text: res.data.reply };
      setChat((prev) => [...prev, botMessage]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { sender: "Bot", text: "Something went wrong. Please try again." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-xl p-6">
        <Card className="shadow-lg bg-gray-800 rounded-lg">
          <CardContent>
            <h1 className="text-3xl text-center font-bold mb-6">
              🤖 OpenAI ChatBot
            </h1>
            <div className="h-96 overflow-y-auto p-4 bg-gray-700 rounded-lg">
              {chat.map((msg, idx) => (
                <div key={idx} className="mb-4">
                  <Text
                    className={`font-semibold ${
                      msg.sender === "You" ? "text-right" : "text-left"
                    }`}
                  >
                    {msg.sender}:
                  </Text>
                  <Text
                    className={`text-lg ${
                      msg.sender === "You" ? "text-right" : "text-left"
                    }`}
                  >
                    {msg.text}
                  </Text>
                </div>
              ))}
            </div>
            <form onSubmit={sendMessage} className="flex gap-2 mt-4">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 p-3 rounded-md bg-gray-600 text-white"
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
              >
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
