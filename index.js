import { GoogleGenerativeAI } from '@google/generative-ai';
import express from 'express'
import dotenv from 'dotenv';
import path from 'path'

dotenv.config();
const app = express()
const PORT = process.env.PORT || 3000;
const messages = []

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});

async function main(input) {
  messages.push({ role: 'user', content: input });

  // Transform messages for Gemini API
  const geminiHistory = messages.slice(0, -1).map(msg => ({  // Exclude current user input for startChat history
    role: msg.role === 'assistant' ? 'model' : msg.role,
    parts: [{ text: msg.content }]
  }));

  try {
    const chat = model.startChat({
      history: geminiHistory,
      // generationConfig: { // Optional: Add generation config if needed
      //   maxOutputTokens: 100,
      // }
    });

    const result = await chat.sendMessage(input);
    const response = await result.response;
    const text = response.text();

    // Add bot's response to messages array
    messages.push({ role: 'assistant', content: text });
    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Fallback message or error handling
    const fallbackMessage = "Sorry, I couldn't process that. Please try again.";
    messages.push({ role: 'assistant', content: fallbackMessage}); // also add fallback to history
    return fallbackMessage;
  }
}

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/message', async function (req, res) {
  const mes = await main(req.body.input)
  res.json({success: true, message: mes})
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
