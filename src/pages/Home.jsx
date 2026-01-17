import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
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

  // Dark mode
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  // Contrôle apparition icônes
  const [showIcons, setShowIcons] = useState([false, false, false]);

  // Typewriter animation
  useEffect(() => {
    if (currentLine < lines.length) {
      if (currentChar < lines[currentLine].length) {
        const t = setTimeout(() => {
          const newTexts = [...currentTexts];
          newTexts[currentLine] += lines[currentLine][currentChar];
          setCurrentTexts(newTexts);
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
      return () => timers.forEach(t => clearTimeout(t));
    }
  }, [currentChar, currentLine, currentTexts]);

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4"
      style={{
        background: darkMode ? "#000328" : "white",
        color: darkMode ? "#fff" : "#000",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Texte principal */}
      <div className="flex flex-col items-center text-center mt-28 whitespace-pre-line">
        <h1 className="font-extrabold mb-2" style={{ fontSize: "4rem" }}>
          {currentTexts[0]}
        </h1>

        <h2
          className="font-extrabold mb-2 neon"
          style={{ fontSize: "2.5rem", lineHeight: "2" }}
        >
          {currentTexts[1]}
        </h2>

        <div className="flex items-center justify-center mt-6 home-role">
          <span
            style={{
              fontSize: window.innerWidth >= 768 ? "2rem" : "1.5rem",
              fontWeight: 600,
              lineHeight: 2.2,
              textAlign: "center",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {currentTexts[2]}
            {currentTexts[2] === lines[2] && (
              <img
                className="home-gif"
                src="/laptop.gif"
                alt="Laptop Icon"
                style={{
                  marginLeft: "0.5rem",
                  width: window.innerWidth >= 768 ? "9rem" : "2rem",
                  height: window.innerWidth >= 768 ? "9rem" : "2rem",
                }}
              />
            )}
          </span>
        </div>

        {/* Icônes sociales */}
        <div className="flex items-center justify-center mt-6 social-icons">
          {showIcons[0] && <FaGithub size={40} color="#b15b86" className="icon" />}
          {showIcons[1] && <FaLinkedin size={40} color="#b15b86" className="icon" />}
          {showIcons[2] && <FaEnvelope size={40} color="#b15b86" className="icon" />}
        </div>
      </div>

      <style>{`
        .neon {
          color: #b15b86;
          text-shadow: 0 0 5px #b15b86, 0 0 10px #b15b86, 0 0 20px #b15b86, 0 0 40px #b15b86;
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
          0% { text-shadow: 0 0 5px #b15b86, 0 0 10px #b15b86, 0 0 20px #b15b86, 0 0 40px #b15b86; }
          100% { text-shadow: 0 0 10px #b15b86, 0 0 20px #b15b86, 0 0 30px #b15b86, 0 0 50px #b15b86; }
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          h1 { font-size: 3rem !important; }
          h2 { font-size: 2rem !important; }
          .home-role { font-size: 1.5rem !important; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 2.2rem !important; }
          h2 { font-size: 1.6rem !important; line-height: 1.4 !important; }
          .home-role { font-size: 1.2rem !important; flex-direction: column; gap: 0.5rem; }
          .home-gif { width: 9rem !important; height: 4rem !important; margin-left: 0 !important; }
          .social-icons .icon { width: 32px; height: 32px; }
        }
        @media (max-width: 480px) {
          h1 { font-size: 1.8rem !important; }
          h2 { font-size: 1.4rem !important; }
        }
      `}</style>
    </div>
  );
}
