import roadmapImage from "../assets/roadmap-road.png";

export default function Roadmap() {
  const roadmapPDF =
    "https://drive.google.com/drive/folders/1csVPclaqGDSYbp8nO59RJouqcSp6lTHa?usp=sharing";

  return (
    <section id="roadmap" className="section roadmap-layout">
      {/* LEFT: TEXT CONTENT */}
      <div className="roadmap-content">
        <h2>2-Year Advanced Data Science Roadmap</h2>

        <p>
          This roadmap outlines a structured 24-month journey to become an
          industry-ready Data Scientist. It is designed to help learners and also
          give HR a clear understanding of how advanced data science skills are
          built over time.
        </p>s

        {/* PHASE 1 */}
        <div className="roadmap-phase">
          <h3>Phase 1: Foundations (0 – 6 Months)</h3>
          <ul>
            <li>Python programming for data science</li>
            <li>Data structures & basic algorithms</li>
            <li>Statistics & probability fundamentals</li>
            <li>NumPy, Pandas for data manipulation</li>
            <li>Data visualization (Matplotlib, Seaborn)</li>
          </ul>

          <p className="roadmap-links">
            GitHub: <a href="#">[Your GitHub link here]</a> <br />
            YouTube: <a href="#">[Foundations playlist link here]</a>
          </p>
        </div>

        {/* PHASE 2 */}
        <div className="roadmap-phase">
          <h3>Phase 2: Core Machine Learning (6 – 12 Months)</h3>
          <ul>
            <li>Supervised & Unsupervised learning</li>
            <li>Feature engineering & model evaluation</li>
            <li>Scikit-learn workflows</li>
            <li>SQL for analytics & databases</li>
            <li>End-to-end ML mini projects</li>
          </ul>

          <p className="roadmap-links">
            GitHub: <a href="#">[ML projects repository link here]</a> <br />
            YouTube: <a href="#">[Machine Learning playlist link here]</a>
          </p>
        </div>

        {/* PHASE 3 */}
        <div className="roadmap-phase">
          <h3>Phase 3: Advanced ML & Deep Learning (12 – 18 Months)</h3>
          <ul>
            <li>Neural Networks (ANN, CNN, RNN)</li>
            <li>Computer Vision fundamentals</li>
            <li>NLP & Transformers basics</li>
            <li>TensorFlow & PyTorch</li>
            <li>Model optimization & deployment concepts</li>
          </ul>

          <p className="roadmap-links">
            GitHub: <a href="#">[Deep Learning repo link here]</a> <br />
            YouTube: <a href="#">[Deep Learning playlist link here]</a>
          </p>
        </div>

        {/* PHASE 4 */}
        <div className="roadmap-phase">
          <h3>Phase 4: Industry & Applied AI (18 – 24 Months)</h3>
          <ul>
            <li>Large-scale data pipelines</li>
            <li>Model deployment & monitoring</li>
            <li>Applied AI use cases (CV, NLP, Analytics)</li>
            <li>Cloud basics (AWS)</li>
            <li>Capstone real-world projects</li>
          </ul>

          <p className="roadmap-links">
            GitHub: <a href="#">[Capstone project link here]</a> <br />
            YouTube: <a href="#">[Industry AI playlist link here]</a>
          </p>
        </div>

        {/* HR NOTE */}
        <div className="roadmap-hr-note">
          <h4>Note for Recruiters</h4>
          <p>
            This roadmap reflects how advanced data science expertise is
            developed progressively — combining strong fundamentals, hands-on
            projects, and applied AI experience.
          </p>
        </div>
      </div>

      {/* RIGHT: CLICKABLE IMAGE */}
      <div className="roadmap-image">
        <a href={roadmapPDF} target="_blank" rel="noopener noreferrer">
          <img src={roadmapImage} alt="Data Science Roadmap PDF" />
          <span className="roadmap-image-caption">
            Click to view Roadmap PDF
          </span>
        </a>
      </div>
    </section>
  );
}
