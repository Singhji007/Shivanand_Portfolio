import { useEffect, useRef, useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem("chat_messages");
    return saved
      ? JSON.parse(saved)
      : [{ from: "bot", text: "Hi! I’m the AI assistant. Ask me anything." }];
  });
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Save session memory
  useEffect(() => {
    sessionStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;

    setMessages(prev => [...prev, { from: "user", text: userText }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      setMessages(prev => [
        ...prev,
        { from: "bot", text: data.reply || "No response from AI." },
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "⚠️ AI server not reachable." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="chatbot">
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div className="chatbox">
          <div className="chatbox-header">
            <span>Ask AI</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbox-messages">
            {messages.map((m, i) => (
              <p key={i} className={m.from}>{m.text}</p>
            ))}
            {loading && <p className="bot">Typing...</p>}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbox-input">
            <input
              value={input}
              placeholder="Ask about projects, skills, experience…"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
