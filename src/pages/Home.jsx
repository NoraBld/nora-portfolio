import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const lines = [
    "Bienvenue sur mon portfolio",
    "Je suis Nora BLD",
    "Développeuse Fullstack & Software Engineer"
  ];

  const [currentTexts, setCurrentTexts] = useState(["", "", ""]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showIcons, setShowIcons] = useState([false, false, false]);
  const [darkMode, setDarkMode] = useState(false);

  // Détecter le mode sombre automatiquement
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  // Machine à écrire
  useEffect(() => {
    if (currentLine < lines.length) {
      if (currentChar < lines[currentLine].length) {
        const t = setTimeout(() => {
          const texts = [...currentTexts];
          texts[currentLine] += lines[currentLine][currentChar];
          setCurrentTexts(texts);
          setCurrentChar(currentChar + 1);
        }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setCurrentChar(0);
        }, 300);
        return () => clearTimeout(t);
      }
    } else {
      const timers = [
        setTimeout(() => setShowIcons([true, false, false]), 500),
        setTimeout(() => setShowIcons([true, true, false]), 800),
        setTimeout(() => setShowIcons([true, true, true]), 1100)
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [currentChar, currentLine, currentTexts]);

  return (
    <>
      {/* Background */}
      <ParticlesBackground backgroundColor={darkMode ? "#000328" : "#ffffff"} />

      {/* Contenu */}
      <div
        className="relative min-h-screen flex flex-col items-center justify-center px-4 z-10"
        style={{ color: darkMode ? "#ffffff" : "#000000" }}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

       <div className="flex flex-col items-center text-center mt-28 whitespace-pre-line ">
          {/* Titre principal */}
          <h1
            className="text-6xl font-extrabold mb-4"
            style={{ fontSize: "4rem" , color: darkMode ? "#ffffff" : "#000000" }}
          >
            {currentTexts[0]}
          </h1>
<div style={{ height: "2rem" }}></div>
          {/* Sous-titre fixe #B15B86 */}
          <h2
            className="font-extrabold mb-2 neon"
            style={{
              fontSize: "2.5rem",
              color: "#B15B86",
              textShadow: "0 0 10px #B15B86, 0 0 20px #B15B86"
            }}
          >
            {currentTexts[1]}
          </h2>

          {/* Rôle */}
<div className="flex items-center justify-center mt-6 home-role"
            style={{ fontSize: window.innerWidth >= 768 ? "2rem" : "1.5rem",
              fontWeight: 600,
              lineHeight: 2.2,
              textAlign: "center",
              display: "inline-flex",
              alignItems: "center",color: darkMode ? "#ffffff" : "#000000" }}
          >
            {currentTexts[2]}
            {currentTexts[2] === lines[2] && (
              <img src="/laptop.gif" alt="Laptop" className="w-24 h-24" />
            )}
          </div>

          {/* Icônes sociales */}
        <div className="flex items-center justify-center mt-6 social-icons">
          {showIcons[0] && <a href="https://github.com/NoraBld" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} color="#b15b86" className="icon" />
          </a>}
          {showIcons[1] && <a href="https://www.linkedin.com/in/nora-belaid-931606380" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} color="#b15b86" className="icon" />
          </a>}
          {showIcons[2] && <a href="mailto:norabelaid86@gmail.com">
            <FaEnvelope size={40} color="#b15b86" className="icon" />
          </a>}
        </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .neon {
          animation: pulse 1.5s infinite alternate;
        }
          
        .social-icons .icon {
          margin: 0 0.8rem;
          transition: transform 0.3s;
        }
        .social-icons .icon:hover {
          transform: scale(1.25);
        }

        @keyframes pulse {
          from { text-shadow: 0 0 5px #B15B86; }
          to { text-shadow: 0 0 20px #B15B86; }
        }

        @media (max-width: 1024px) {
          h1 { font-size: 3rem !important; }
          h2 { font-size: 2rem !important; line-height: 2 }
          .home-role { font-size: 1.5rem !important; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 2.2rem !important;line-height: 1.5}
          h2 { font-size: 1.6rem !important; line-height: 1.5 !important; }
          .home-role { font-size: 1.2rem !important; flex-direction: column; gap: 0.5rem;  }
          .home-gif { width: 9rem !important; height: 4rem !important; margin-left: 0 !important; }
          .social-icons .icon { width: 32px; height: 32px; }
        }
        @media (max-width: 480px) {
          h1 { font-size: 1.8rem !important; }
          h2 { font-size: 1.4rem !important; }
        }
      `}</style>
    </>
  );
}
