import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

/* ===============================
   MIDDLEWARE
================================ */
app.use(cors({
  origin: "*", // allow all origins (safe for portfolio)
}));
app.use(express.json());

/* ===============================
   AI CLIENTS
================================ */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/* ===============================
   SYSTEM PROMPT
================================ */
const SYSTEM_PROMPT = `
You are the AI assistant for the personal portfolio of Shivanand Kumar Singh.

Identity:
- Name: Shivanand Kumar Singh
- Role: Data Scientist & AI Engineer
- Company: XenoTech Solutions
- Experience: AI Engineer Intern with real-world project experience

Projects:
1. IPL Match Analytics Platform
2. AI-Based Face Verification System
3. End-to-End Machine Learning Pipelines

Skills:
- Python, Machine Learning, Deep Learning
- Data Science, AI Engineering

Rules:
- Answer professionally and confidently
- Never say you are a generic AI model
`;

/* ===============================
   FALLBACK RESPONSES
================================ */
const fallbackMap = {
  name: "My name is Shivanand Kumar Singh, a Data Scientist and AI Engineer.",
  experience:
    "I have hands-on experience as an AI Engineer Intern working on real-world AI projects.",
  projects:
    "I have built IPL analytics systems, face verification models, and ML pipelines.",
  skills:
    "My skills include Python, Machine Learning, Deep Learning, and AI Engineering.",
};

/* ===============================
   ROUTES
================================ */
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({ reply: "Please ask a question." });
  }

  // 1️⃣ OpenAI
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
    });

    return res.json({
      reply: completion.choices[0].message.content,
    });
  } catch {
    console.warn("⚠️ OpenAI failed, trying Groq...");
  }

  // 2️⃣ Groq
  try {
    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
    });

    return res.json({
      reply: completion.choices[0].message.content,
    });
  } catch {
    console.warn("⚠️ Groq failed, using fallback...");
  }

  // 3️⃣ Static fallback
  const msg = message.toLowerCase();
  if (msg.includes("name")) return res.json({ reply: fallbackMap.name });
  if (msg.includes("experience")) return res.json({ reply: fallbackMap.experience });
  if (msg.includes("project")) return res.json({ reply: fallbackMap.projects });
  if (msg.includes("skill")) return res.json({ reply: fallbackMap.skills });

  return res.json({
    reply: "I specialize in building real-world AI and data-driven solutions.",
  });
});

/* ===============================
   HEALTH CHECK (IMPORTANT)
================================ */
app.get("/", (req, res) => {
  res.send("✅ Backend is running");
});

/* ===============================
   START SERVER (RENDER SAFE)
================================ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
