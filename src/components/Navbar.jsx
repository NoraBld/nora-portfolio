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
} from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { icon: FaHome, label: "Accueil", to: "/" },
    { icon: FaUserAlt, label: "À propos", to: "/about" },
    { icon: FaGraduationCap, label: "Diplôme", to: "/diplomeetstage" },
    { icon: FaTools, label: "Compétence", to: "/competence" },
    { icon: FaFolderOpen, label: "Projets", to: "/mesprojet" },
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

        .logo { display: flex; align-items: center; gap: 0.4rem; }
        .logo h1 { font-size: 1.8rem; font-weight: 800; color: #b15b86; }
        .logo-icon { font-size: 1.8rem; color: #b15b86; }

        .nav-links { display: flex; gap: 4rem; list-style: none; font-weight: 700; }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: ${darkMode ? "#ffffff" : "#000000"};
          text-decoration: none;
          transition: color 0.3s;
          cursor: pointer;
        }
        .link-icon { font-size: 1.5rem; color: #b15b86; }
        .link-text { font-size: 1.1rem; }
        .theme-btn.standalone { color: #b15b86; margin-left: 0.6rem; font-size: 1.1rem; display: flex; align-items: center; }
        .menu-btn { display: none; cursor: pointer; z-index: 60; }

        @media (max-width: 768px) {
          .menu-btn { display: block; }
          .theme-btn.standalone { position: absolute; right: 1.5rem; top: 1rem; }
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
          .nav-links.open { left: 0; }
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
          .overlay.show { opacity: 1; pointer-events: auto; }
        }
      `}</style>
    </nav>
  );
}
