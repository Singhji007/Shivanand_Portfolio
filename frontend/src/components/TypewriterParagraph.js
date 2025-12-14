import { useEffect, useState } from "react";

export default function TypewriterParagraph({
  text,
  speed = 120,
  start = false,
  onComplete
}) {
  const words = text.split(" ");
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (visibleWords < words.length) {
      const timer = setTimeout(() => {
        setVisibleWords(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [visibleWords, words.length, speed, start, onComplete]);

  return (
    <p className="about-paragraph">
      {words.slice(0, visibleWords).join(" ")}
      {start && <span className="typing-cursor">|</span>}
    </p>
  );
}
