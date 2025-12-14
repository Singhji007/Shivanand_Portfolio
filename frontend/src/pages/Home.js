export default function Home() {
  const resumeLink =
    "https://drive.google.com/file/d/1giK1cOdlzpK0s5JTcQrh3_9V30v0eH2Z/view?usp=sharing";

  return (
    <section id="home" className="hero hero-layout">
      {/* Left Content */}
      <div className="hero-left">
        <h2>Data Scientist & AI Engineer</h2>
        <p>Building scalable, data-driven AI systems</p>

        <div className="metrics">
          <div>
            <h3>15+</h3>
            <span>Projects</span>
          </div>
          <div>
            <h3>1+</h3>
            <span>Years Experience</span>
          </div>
          <div>
            <h3>10+</h3>
            <span>ML Models</span>
          </div>
        </div>
      </div>

      {/* Right Resume Button */}
      <div className="hero-right">
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-circle"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
