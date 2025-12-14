import { useEffect, useRef, useState } from "react";
import CertificateModal from "../components/CertificateModal";
import SkillHighlighter from "../components/SkillHighlighter";

const experiences = [
  {
    id: 1,
    year: "2023",
    type: "education",
    title: "Data Science & Analytics Workshop",
    org: "Gujarat Tableau User Group",
    icon: "🎓",
    short: "Hands-on workshop on Python, analytics & visualization",
    details: [
      "Python for data analysis",
      "Tableau dashboards",
      "Data storytelling"
    ],
    skills: ["Python", "EDA", "Data Visualization"],
    certificate: "/certificates/tableau-workshop.pdf"
  },
  {
    id: 2,
    year: "2024",
    type: "work",
    title: "Data Scientist Intern",
    org: "XenoTech Solutions",
    icon: "💼",
    short: "Worked on real-world ML & AI projects",
    details: [
      "End-to-end ML pipelines",
      "Feature engineering & EDA",
      "Collaboration with project managers"
    ],
    skills: ["Machine Learning", "Python", "EDA"],
    certificate: "/certificates/xenotech-internship.pdf"
  },
  {
    id: 3,
    year: "2025",
    type: "work",
    title: "Data Scientist / AI Engineer",
    org: "Career Goal",
    icon: "🚀",
    short: "Targeting full-time AI & data science role",
    details: [
      "Production AI systems",
      "RAG & LLM applications",
      "Scalable ML deployments"
    ],
    skills: ["LLM", "RAG", "MLOps"]
  }
];

export default function Experience() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);
  const [certificate, setCertificate] = useState(null);

  const lineRef = useRef(null);
  const detailsRef = useRef(null); // 👈 scroll target

  /* ===== Animate timeline line ===== */
  useEffect(() => {
    const onScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const height = Math.min(
        100,
        Math.max(0, ((window.innerHeight - rect.top) / window.innerHeight) * 100)
      );
      lineRef.current.style.height = `${height}%`;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered =
    filter === "all"
      ? experiences
      : experiences.filter((e) => e.type === filter);

  /* ===== Handle Know More click ===== */
  const handleKnowMore = (exp) => {
    setActive(exp);

    // wait for DOM render, then scroll
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>

      {/* FILTER */}
      <div className="timeline-filter">
        {["all", "education", "work"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => {
              setFilter(f);
              setActive(null);
            }}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* TIMELINE */}
      <div className="timeline-wrapper">
        <div className="timeline-line">
          <div className="timeline-progress" ref={lineRef}></div>
        </div>

        {filtered.map((exp, i) => (
          <div
            key={exp.id}
            className={`timeline-node ${i % 2 === 0 ? "left" : "right"}`}
          >
            <div className="node-circle">{exp.icon}</div>

            <div className="node-card">
              <span className="year">{exp.year}</span>
              <h3>{exp.title}</h3>
              <p className="org">{exp.org}</p>
              <p className="short">{exp.short}</p>

              <button onClick={() => handleKnowMore(exp)}>
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* DETAILS SECTION */}
      {active && (
        <div ref={detailsRef} className="experience-detail">
          <h3>{active.title}</h3>

          <ul>
            {active.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>

          <SkillHighlighter skills={active.skills} />

          {active.certificate && (
            <button
              className="view-cert"
              onClick={() => setCertificate(active.certificate)}
            >
              View Certificate
            </button>
          )}

          <button className="close" onClick={() => setActive(null)}>
            Close
          </button>
        </div>
      )}

      {certificate && (
        <CertificateModal
          src={certificate}
          onClose={() => setCertificate(null)}
        />
      )}
    </section>
  );
}
