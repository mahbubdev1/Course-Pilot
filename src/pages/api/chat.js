export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { message } = req.body;
  console.log(process.env.HUGGINGFACE_API_KEY)
        
  const response = await fetch(
    "https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: message }),
    }
  );

  const data = await response.json();
  res
    .status(200)
    .json({ reply: data[0]?.generated_text || "কিছু সমস্যা হয়েছে!" });
}
