import OpenAI from 'openai';
import express from 'express'
import serveStatic from 'serve-static';

const app = express()
const messages = []

app.use(serveStatic('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main(input) {
  messages.push({ role: 'user', content: input })
  const chatCompletion = await openai.chat.completions.create({
    messages: messages,
    model: 'gpt-3.5-turbo',
  })
  return chatCompletion.choices[0]?.message?.content
}

app.get('/', (req, res) => {
  res.render('./public/index.html')
})

app.post('/message', async function (req, res) {
  const mes = await main(req.body.input)
  res.json({success: true, message: mes})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
