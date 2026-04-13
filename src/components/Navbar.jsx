import React, { useState } from "react";
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
  FaBriefcase,
} from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { icon: FaHome, label: "Accueil", to: "/" },
    { icon: FaUserAlt, label: "À propos", to: "/about" },
    { icon: FaGraduationCap, label: "Diplôme", to: "/diplomeetstage" },
    { icon: FaBriefcase, label: "Expérience", to: "/experience" },
    { icon: FaTools, label: "Compétence", to: "/competence" },
    { icon: FaFolderOpen, label: "Projets", to: "/mesprojet" },
    { icon: FaEnvelope, label: "Contact", to: "/contact" },
  ];

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-container">
        
        {/* LOGO */}
        <div className="logo">
          <h1>Nora</h1>
          <FaCode className="logo-icon" />
        </div>

        {/* MENU BUTTON */}
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="menu-icon" />
          ) : (
            <FaBars className="menu-icon" />
          )}
        </div>

        {/* OVERLAY */}
        <div
          className={`overlay ${menuOpen ? "show" : ""}`}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* LINKS */}
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

        {/* THEME BUTTON */}
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
          transition: 0.3s;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 4rem;
          padding: 0.5rem 1.5rem;
        }

        /* LOGO */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .logo h1 {
          font-size: clamp(1.2rem, 2vw, 1.8rem);
          font-weight: 800;
          color: #b15b86;
        }

        .logo-icon {
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          color: #b15b86;
        }

        /* LINKS */
        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
          font-weight: 700;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: ${darkMode ? "#ffffff" : "#000328"};
          text-decoration: none;
          transition: 0.3s;
          cursor: pointer;
        }

        /* 🔥 ICONS RESPONSIVE */
        .link-icon {
          font-size: clamp(1.5rem, 2vw, 1.4rem);
          color: #b15b86;
          transition: transform 0.3s;
        }

        .nav-item:hover .link-icon {
          transform: scale(1.2);
        }

        .link-text {
          font-size: clamp(0.8rem, 1.2vw, 1.1rem);
        }

        /* MENU ICON */
        .menu-icon {
          font-size: clamp(1.3rem, 4vw, 1.8rem);
        }

        .theme-btn.standalone {
          color: #b15b86;
          margin-left: 0.6rem;
          font-size: clamp(1rem, 2vw, 1.3rem);
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .menu-btn {
          display: none;
          cursor: pointer;
          z-index: 60;
        }

        /* MOBILE */
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
            transition: 0.3s;
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
            background: #000328;
            opacity: 0;
            pointer-events: none;
            transition: 0.3s;
            z-index: 45;
          }

          .overlay.show {
            opacity: 0.6;
            pointer-events: auto;
          }
        }
      `}</style>
    </nav>
  );
}