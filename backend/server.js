import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// ===============================
// AI Clients
// ===============================

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

// ===============================
// SYSTEM PROMPT (IDENTITY + CONTEXT)
// ===============================

const SYSTEM_PROMPT = `
You are the AI assistant for the personal portfolio of Shivanand Kumar Singh.

Identity:
- Name: Shivanand Kumar Singh
- Role: Data Scientist & AI Engineer
- Company: XenoTech Solutions
- Experience: AI Engineer Intern with real-world project experience

Projects:
1. IPL Match Analytics Platform
   - Built data pipelines and performed EDA on ball-by-ball IPL data
   - Achieved ~92% accuracy in match outcome insights

2. AI-Based Face Verification System
   - Used deep learning and computer vision
   - Reduced false positives by ~40%

3. Machine Learning Pipelines
   - Built end-to-end ML workflows for real-world datasets

Skills:
- Python, Machine Learning, Deep Learning
- Data Science, AI Engineering
- Pandas, NumPy, SQL, OpenCV

Rules:
- If asked your name → say "My name is Shivanand Kumar Singh."
- If asked about experience → explain AI Engineer Intern + projects
- If asked about projects → list projects clearly
- If asked about skills → list skills clearly
- Answer professionally, confidently, and concisely
- Never say you are a generic AI model
`;

// ===============================
// SMART FALLBACK MAP (NEVER FAILS)
// ===============================

const fallbackMap = {
  name: "My name is Shivanand Kumar Singh, a Data Scientist and AI Engineer.",
  experience:
    "I have hands-on experience as an AI Engineer Intern, working on real-world AI and data science projects including analytics and computer vision systems.",
  projects:
    "I have worked on projects such as IPL Match Analytics, AI-based Face Verification systems, and end-to-end machine learning pipelines.",
  skills:
    "My skills include Python, Machine Learning, Deep Learning, Data Science, and AI Engineering."
};

// ===============================
// CHAT ENDPOINT
// ===============================

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({ reply: "Please ask a question." });
  }

  // 1️⃣ TRY OPENAI FIRST
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ]
    });

    return res.json({
      reply: completion.choices[0].message.content
    });

  } catch (openaiError) {
    console.warn("⚠️ OpenAI failed, switching to Groq...");
  }

  // 2️⃣ FALLBACK TO GROQ
  try {
    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ]
    });

    return res.json({
      reply: completion.choices[0].message.content
    });

  } catch (groqError) {
    console.warn("⚠️ Groq failed, using static fallback...");
  }

  // 3️⃣ FINAL INTENT-BASED FALLBACK (ALWAYS WORKS)
  const msg = message.toLowerCase();

  if (msg.includes("name")) return res.json({ reply: fallbackMap.name });
  if (msg.includes("experience")) return res.json({ reply: fallbackMap.experience });
  if (msg.includes("project")) return res.json({ reply: fallbackMap.projects });
  if (msg.includes("skill")) return res.json({ reply: fallbackMap.skills });

  return res.json({
    reply:
      "I specialize in building scalable, real-world AI and data-driven solutions."
  });
});

// ===============================
// START SERVER
// ===============================

app.listen(5000, () => {
  console.log("✅ AI backend running on http://localhost:5000");
});
