import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaEnvelope,
  FaCode,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaTools,
  FaFolderOpen,
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

// ==================== Navbar ====================
function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { icon: FaHome, label: "Accueil", to: "/" },
    { icon: FaUserAlt, label: "À propos", to: "/about" },
    { icon: FaGraduationCap, label: "Diplôme", to: "/diplome-stage" },
    { icon: FaTools, label: "Compétence", to: "/competence" },
    { icon: FaFolderOpen, label: "Projets", to: "/projects" },
    { icon: FaEnvelope, label: "Contact", to: "/contact" },
  ];

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-container">
        <div className="logo">
          <h1>Nora</h1>
          <FaCode className="logo-icon" />
        </div>

        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        <div
          className={`overlay ${menuOpen ? "show" : ""}`}
          onClick={() => setMenuOpen(false)}
        ></div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.to}
                className="nav-item"
                onClick={() => setMenuOpen(false)}
              >
                <Icon className="link-icon" />
                <span className="link-text">{item.label}</span>
              </Link>
            );
          })}
        </ul>

        <div
          className="theme-btn standalone"
          onClick={() => setDarkMode(!darkMode)}
          title="Changer le thème"
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          background: ${darkMode ? "#000328" : "white"};
          backdrop-filter: blur(8px);
          transition: background 0.3s, color 0.3s;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 4.5rem;
          padding: 0.6rem 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .logo h1 {
          font-size: 1.8rem;
          font-weight: 800;
          color: #b15b86;
        }

        .logo-icon {
          font-size: 1.8rem;
          color: #b15b86;
        }

        .nav-links {
          display: flex;
          gap: 4rem;
          list-style: none;
          font-weight: 700;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: ${darkMode ? "#ffffff" : "#000000"};
          text-decoration: none;
          transition: color 0.3s;
          cursor: pointer;
        }

        .link-icon {
          font-size: 1.5rem;
          color: #b15b86;
        }

        .link-text {
          font-size: 1.1rem;
        }

        .theme-btn.standalone {
          color: #b15b86;
          margin-left: 0.6rem;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
        }

        .menu-btn {
          display: none;
          cursor: pointer;
          z-index: 60;
        }

        @media (max-width: 768px) {
          .menu-btn {
            display: block;
          }

          .theme-btn.standalone {
            position: absolute;
            right: 1.5rem;
            top: 1rem;
          }

          .nav-links {
            position: fixed;
            top: 0;
            left: -100%;
            height: 100vh;
            width: 70%;
            flex-direction: column;
            background: ${darkMode ? "#000328" : "white"};
            padding: 2rem 1.5rem;
            gap: 2rem;
            transition: left 0.3s ease-in-out;
            z-index: 50;
          }

          .nav-links.open {
            left: 0;
          }

          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0,0,0,0.5);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 45;
          }

          .overlay.show {
            opacity: 1;
            pointer-events: auto;
          }
        }
      `}</style>
    </nav>
  );
}

// ==================== Home ====================
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
        <div className="flex items-center justify-center mt-6 home-role">
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
                className="home-gif"
                src="/laptop.gif"
                alt="Laptop Icon"
                style={{
                  marginLeft: "0.5rem",
                  width:
                    window.innerWidth >= 1280
                      ? "14rem"
                      : window.innerWidth >= 768
                      ? "9rem"
                      : "2rem",
                  height:
                    window.innerWidth >= 1280
                      ? "11rem"
                      : window.innerWidth >= 768
                      ? "9rem"
                      : "2rem",
                }}
              />
            )}
          </span>
        </div>

        {/* Icônes sociales animées */}
        <div className="flex items-center justify-center mt-6 space-x-8 social-icons">
          {showIcons[0] && (
            <a
              href="https://github.com/NoraBld"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaGithub size={40} color="#ff66c4" />
            </a>
          )}
          {showIcons[1] && (
            <a
              href="https://www.linkedin.com/in/nora-belaid-931606380"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaLinkedin size={40} color="#ff66c4" />
            </a>
          )}
          {showIcons[2] && (
            <a
              href="mailto:norabelaid86@gmail.com"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaEnvelope size={40} color="#ff66c4" />
            </a>
          )}
        </div>
      </div>

      {/* Styles néon + responsive */}
      <style>{`
        .neon {
          color: #ff66c4;
          text-shadow: 0 0 5px #ff66c4, 0 0 10px #ff66c4, 0 0 20px #ff66c4, 0 0 40px #ff66c4;
          animation: pulse 1.5s infinite alternate;
        }
         
        .social-icons a {
         margin: 0 0.8rem; /* 0.8rem = 8px environ à gauche et droite */
        }

        @keyframes pulse {
          0% { text-shadow: 0 0 5px #ff66c4, 0 0 10px #ff66c4, 0 0 20px #ff66c4, 0 0 40px #ff66c4; }
          100% { text-shadow: 0 0 10px #ff66c4, 0 0 20px #ff66c4, 0 0 30px #ff66c4, 0 0 50px #ff66c4; }
        }

        /* =========================
           RESPONSIVE HOME
        ========================= */
        /* Tablette */
        @media (max-width: 1024px) {
          h1 { font-size: 3rem !important; }
          h2 { font-size: 2rem !important; }
          .home-role { font-size: 1.5rem !important; }
        }

        /* Mobile */
        @media (max-width: 768px) {
          h1 { font-size: 2.2rem !important; }
          h2 { font-size: 1.6rem !important; line-height: 1.4 !important; }
          .home-role { font-size: 1.2rem !important; flex-direction: column; gap: 0.5rem; }
          .home-gif { width: 9rem !important; height: 4rem !important; margin-left: 0 !important; }
          .social-icons a svg { width: 32px; height: 32px; }
        }

        /* Très petits écrans */
        @media (max-width: 480px) {
          h1 { font-size: 1.8rem !important; }
          h2 { font-size: 1.4rem !important; }
        }
      `}</style>
    </div>
  );
}
