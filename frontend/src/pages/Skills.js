import { useState } from "react";

const skillsData = [
  {
    category: "Machine Learning",
    items: [
      { name: "Supervised & Unsupervised Learning", time: "2+ years" },
      { name: "Feature Engineering", time: "2 years" },
      { name: "Model Evaluation & Hyperparameter Tuning", time: "1.5 years" },
      { name: "Scikit-learn Pipelines", time: "2+ years" }
    ]
  },
  {
    category: "Deep Learning",
    items: [
      { name: "Neural Networks (ANN, CNN, RNN)", time: "1.5 years" },
      { name: "Computer Vision (OpenCV, CNNs)", time: "1.5 years" },
      { name: "NLP Fundamentals", time: "1 year" },
      { name: "TensorFlow & PyTorch", time: "1.5 years" }
    ]
  },
  {
    category: "Generative AI & LLMs",
    items: [
      { name: "Large Language Models (LLMs)", time: "1 year" },
      { name: "Prompt Engineering", time: "1 year" },
      { name: "LangChain", time: "8+ months" },
      { name: "Retrieval-Augmented Generation (RAG)", time: "8+ months" }
    ]
  },
  {
    category: "Data Science & Analytics",
    items: [
      { name: "Exploratory Data Analysis (EDA)", time: "2+ years" },
      { name: "Statistical Analysis", time: "2 years" },
      { name: "Data Visualization", time: "2 years" },
      { name: "SQL & Databases", time: "2+ years" }
    ]
  },
  {
    category: "MLOps & AI Systems",
    items: [
      { name: "Model Deployment (APIs)", time: "1 year" },
      { name: "Vector Databases (FAISS, Chroma)", time: "8+ months" },
      { name: "Docker for ML Apps", time: "1 year" },
      { name: "Model Monitoring Concepts", time: "6+ months" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Python", time: "3+ years" },
      { name: "AWS (Basics)", time: "1 year" },
      { name: "Git & Linux", time: "2+ years" },
      { name: "REST APIs for AI Systems", time: "1 year" }
    ]
  }
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skillsData.map((group, i) => (
          <div key={i} className="skills-category">
            <h3>{group.category}</h3>

            <div className="skills-items">
              {group.items.map((skill, j) => (
                <button
                  key={j}
                  className="skill-chip"
                  onClick={() => setSelectedSkill(skill)}
                >
                  {skill.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skill Detail */}
      {selectedSkill && (
        <div className="skill-detail">
          <strong>{selectedSkill.name}</strong>
          <p>Experience: {selectedSkill.time}</p>
        </div>
      )}
    </section>
  );
}
