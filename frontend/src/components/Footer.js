import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/shivanand-kumar-singh-23003420a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Singhji007" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/singhshivanand_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@XenoTechSolutions" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
      <p>© 2025 Shivanand Singh</p>
    </footer>
  );
}
