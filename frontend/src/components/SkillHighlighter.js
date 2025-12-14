export default function SkillHighlighter({ skills }) {
  return (
    <div className="skill-highlight">
      <h4>Skills Used</h4>
      {skills.map((s, i) => (
        <span key={i} className="skill-tag">{s}</span>
      ))}
    </div>
  );
}
