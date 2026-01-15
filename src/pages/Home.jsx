import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
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
      // Quand toutes les lignes sont finies, déclencher les icônes
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
        {/* Ligne 1 */}
        <h1 className="font-extrabold mb-2" style={{ fontSize: "4rem" }}>
          {currentTexts[0]}
        </h1>

        {/* Ligne 2 : Nom en néon */}
        <h2
          className="font-extrabold mb-2 neon"
          style={{ fontSize: "2.5rem", lineHeight: "2" }}
        >
          {currentTexts[1]}
        </h2>

        {/* Ligne 3 : Développeuse Fullstack & Software Engineer + GIF */}
        <div className="flex items-center justify-center mt-6">
          <span
            style={{
              fontSize:
                window.innerWidth >= 1280
                  ? "2rem"
                  : window.innerWidth >= 768
                  ? "2rem"
                  : "1.5rem",
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
                src="/laptop.gif"
                alt="Laptop Icon"
                style={{
                  marginLeft: "0.5rem",
                  width:
                    window.innerWidth >= 1280
                      ? "9rem"
                      : window.innerWidth >= 768
                      ? "4rem"
                      : "2rem",
                  height:
                    window.innerWidth >= 1280
                      ? "5rem"
                      : window.innerWidth >= 768
                      ? "3rem"
                      : "2rem",
                }}
              />
            )}
          </span>
        </div>

        {/* Icônes sociales animées */}
        <div className="flex items-center justify-center mt-6 space-x-8">
          {showIcons[0] && (
            <a
              href="https://github.com/tonpseudo"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaGithub size={40} color="#ff66c4" />
            </a>
          )}
          {showIcons[1] && (
            <a
              href="https://www.linkedin.com/in/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaLinkedin size={40} color="#ff66c4" />
            </a>
          )}
          {showIcons[2] && (
            <a
              href="mailto:tonemail@gmail.com"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaEnvelope size={40} color="#ff66c4" />
            </a>
          )}
        </div>
      </div>

      {/* Styles néon */}
      <style>{`
        .neon {
          color: #ff66c4;
          text-shadow: 0 0 5px #ff66c4, 0 0 10px #ff66c4, 0 0 20px #ff66c4, 0 0 40px #ff66c4;
          animation: pulse 1.5s infinite alternate;
        }

        @keyframes pulse {
          0% { text-shadow: 0 0 5px #ff66c4, 0 0 10px #ff66c4, 0 0 20px #ff66c4, 0 0 40px #ff66c4; }
          100% { text-shadow: 0 0 10px #ff66c4, 0 0 20px #ff66c4, 0 0 30px #ff66c4, 0 0 50px #ff66c4; }
        }
      `}</style>
    </div>
  );
};

export default Home;
