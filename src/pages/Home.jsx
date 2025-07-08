import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header.jsx";
import Hero from "../components/sections/Hero.jsx";
import Skills from "../components/sections/Skills.jsx";
import ProjectsSection from "../components/sections/ProjectsSection.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/layout/Footer.jsx";
import ChatbotButton from "../components/chatbot/ChatbotButton.jsx";
import ChatWindow from "../components/chatbot/ChatWindow.jsx";
import TechnologiesMarquee from "../components/layout/TechnologiesMarquee.jsx";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [projects, setProjects] = useState([]);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    // Load projects data
    import("../data/projects.jsx").then((module) => {
      setProjects(module.default);
    });

    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <main>
        <Hero id="home" />
        <TechnologiesMarquee />
        <Skills id="skills" />
        <ProjectsSection
          id="projects"
          projects={projects}
          setProjects={setProjects}
        />

        <Contact id="contact" />
      </main>
      <Footer />

      {/* Chatbot */}
      <ChatbotButton
        isOpen={isChatbotOpen}
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
      />
      <ChatWindow
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
      />
    </>
  );
};

export default Home;
