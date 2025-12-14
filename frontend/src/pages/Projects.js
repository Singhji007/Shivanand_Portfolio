import { useState } from "react";

const projectsData = [
  /* ================= EASY ================= */
  {
    title: "IPL Analytics",
    level: "Easy",
    result: "92% prediction accuracy",
    learn: [
      "Data cleaning & preprocessing",
      "EDA with Pandas & Matplotlib",
      "Feature engineering basics",
      "Simple ML models"
    ],
    github: "#"
  },
  {
    title: "Sales Data Analysis",
    level: "Easy",
    result: "Identified top-performing regions",
    learn: [
      "Data visualization",
      "Business insights from data",
      "SQL queries",
      "Dashboard thinking"
    ],
    github: "#"
  },

  /* ================= MEDIUM ================= */
  {
    title: "AI Face Verification",
    level: "Medium",
    result: "40% false-positive reduction",
    learn: [
      "Computer Vision basics",
      "CNN architectures",
      "Face embeddings",
      "Model evaluation"
    ],
    github: "#"
  },
  {
    title: "Customer Churn Prediction",
    level: "Medium",
    result: "Improved retention insights",
    learn: [
      "Classification models",
      "Handling imbalanced data",
      "Feature importance",
      "Business metrics"
    ],
    github: "#"
  },

  /* ================= HARD ================= */
  {
    title: "RAG-Based AI Chatbot",
    level: "Hard",
    result: "Context-aware AI responses",
    learn: [
      "LLMs & prompt engineering",
      "LangChain pipelines",
      "Vector databases",
      "Retrieval-Augmented Generation"
    ],
    github: "#"
  },
  {
    title: "End-to-End ML Deployment",
    level: "Hard",
    result: "Production-ready ML system",
    learn: [
      "API-based ML deployment",
      "Docker for ML",
      "Model monitoring concepts",
      "Scalable architecture"
    ],
    github: "#"
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className="card project-card"
            onClick={() => setActiveProject(project)}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className={`level ${project.level.toLowerCase()}`}>
                {project.level}
              </span>
            </div>

            <p>
              <b>Outcome:</b> {project.result}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              onClick={(e) => e.stopPropagation()}
            >
              🔗 GitHub
            </a>
          </div>
        ))}
      </div>

      {/* PROJECT DETAIL */}
      {activeProject && (
        <div className="project-detail">
          <h3>{activeProject.title}</h3>
          <p><b>Difficulty:</b> {activeProject.level}</p>

          <h4>What I Learned</h4>
          <ul>
            {activeProject.learn.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <button onClick={() => setActiveProject(null)}>
            Close
          </button>
        </div>
      )}
    </section>
  );
}
