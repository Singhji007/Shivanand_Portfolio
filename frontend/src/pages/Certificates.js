import { useState } from "react";
import CertificateModal from "../components/CertificateModal";

const certificates = [
  {
    title: "Python Data Revolution",
    issuer: "Gujarat Tableau User Group",
    year: "2023",
    file: "/certificates/python-data-revolution.pdf"
  },
  {
    title: "Data Scientist Internship",
    issuer: "XenoTech Solutions",
    year: "2024",
    file: "/certificates/xenotech-internship.pdf"
  },
  {
    title: "AI & Machine Learning Workshop",
    issuer: "Institute Program",
    year: "2023",
    file: "/certificates/ai-ml-workshop.pdf"
  }
];

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="section">
      <h2>Certificates</h2>

      <p className="cert-subtitle">
        Verified certifications demonstrating hands-on experience and
        professional learning in Data Science, Analytics, and AI.
      </p>

      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-year">{cert.year}</p>

            <button onClick={() => setActiveCert(cert.file)}>
              View Certificate
            </button>

            <a
              href={cert.file}
              download
              className="cert-download"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>

      {activeCert && (
        <CertificateModal
          src={activeCert}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}
