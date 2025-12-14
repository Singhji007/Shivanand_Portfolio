import { useEffect, useRef, useState } from "react";
import TypewriterParagraph from "../components/TypewriterParagraph";
import profile from "../assets/profile.jpg";

export default function About() {
  const [step, setStep] = useState(1);
  const [flipped, setFlipped] = useState(false);
  const photoRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          intervalRef.current = setInterval(() => {
            setFlipped((prev) => !prev);
          }, 2000);
        } else {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setFlipped(false);
        }
      },
      { threshold: 0.6 }
    );

    if (photoRef.current) observer.observe(photoRef.current);

    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section id="about" className="section about-layout">
      {/* LEFT */}
      <div className="about-text">
        <h2>About Me</h2>

        <TypewriterParagraph
          start={step >= 1}
          text="I am a Data Scientist and AI Engineer focused on building intelligent, data-driven systems that solve real-world business problems. My expertise spans machine learning, deep learning, analytics, and applied AI."
          onComplete={() => setStep(2)}
        />

        <TypewriterParagraph
          start={step >= 2}
          speed={95}
          text="I have professional experience at XenoTech Solutions, where I worked on production-oriented data science and AI projects. My responsibilities included data analysis, model development, experimentation, and translating business requirements into technical solutions."
          onComplete={() => setStep(3)}
        />

        <TypewriterParagraph
          start={step >= 3}
          speed={90}
          text="I specialize in transforming raw, unstructured data into actionable insights using Python, machine learning pipelines, and visualization techniques. I am comfortable working across the full lifecycle—from data collection and EDA to model deployment."
          onComplete={() => setStep(4)}
        />

        <TypewriterParagraph
          start={step >= 4}
          speed={85}
          text="Currently, I am expanding my expertise in advanced AI systems including Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and scalable AI architectures, with a long-term goal of building robust, production-ready AI solutions."
        />

        {/* QUICK HIGHLIGHTS */}
        <ul className="about-highlights">
          <li>✔ Hands-on experience with real-world datasets</li>
          <li>✔ Strong foundation in ML, DL, and Data Analytics</li>
          <li>✔ Experience collaborating with engineers & project managers</li>
          <li>✔ Focused on scalable, business-aligned AI systems</li>
        </ul>
      </div>

      {/* RIGHT – AUTO FLIP PHOTO */}
      <div
        ref={photoRef}
        className={`about-photo flip-card ${flipped ? "flipped glow" : ""}`}
      >
        <div className="flip-inner">
          <div className="flip-front">
            <img src={profile} alt="Shivanand Kumar Singh" />
          </div>

          <div className="flip-back">
            <p className="dob">DOB: 07 July 2002</p>
            <p className="quote">“Turning data into decisions.”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
