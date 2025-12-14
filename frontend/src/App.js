import Navbar from "./components/Navbar";
import DesktopNotice from "./components/DesktopNotice";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import Research from "./pages/Research";
import Roadmap from "./pages/Roadmap";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      {/* Top Navigation */}
      <Navbar />

      {/* Mobile-only desktop experience notice */}
      <DesktopNotice />

      {/* Scroll-based sections */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates /> {/* NOT a separate page */}
      <Research />
      <Roadmap />
      <Contact />

      {/* Global widgets */}
      <Chatbot />
      <Footer />
    </>
  );
}
