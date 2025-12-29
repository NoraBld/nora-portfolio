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
  FaBriefcase,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { icon: FaHome, label: "Accueil", to: "/" },
    { icon: FaUserAlt, label: "À propos", to: "/about" },
    { icon: FaGraduationCap, label: "Education", to: "/education" },
    { icon: FaBriefcase, label: "Stages & Projets", to: "/projects" },
    { icon: FaEnvelope, label: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

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
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          transition: background 0.3s, color 0.3s;
        }

        .navbar.dark {
  background: #000000;
}



        .navbar-container {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* rapproche les liens du logo */
  gap: 5rem; /* espace contrôlé entre logo et liens */
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

        .theme-btn.standalone {
  color: #b15b86;
}


        .nav-item:hover {
          opacity: 0.8;
        }

        .link-icon {
  font-size: 1.3rem;
  color: #b15b86;
}


        .link-text {
          font-size: 1.1rem;
        }

        .theme-btn {
       display: flex;
  align-items: center;
  margin-left: 0.6rem; /* espace entre Contact et la lune */
  font-size: 1.1rem;
  color: ${darkMode ? "#f0c4e6" : "#b15b86"};
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
            background: rgba(255, 255, 255, 0.95);
            padding: 2rem 1.5rem;
            gap: 2rem;
            transition: left 0.3s ease-in-out;
            z-index: 50;
          }

          .navbar.dark .nav-links {
            background: rgba(20, 20, 20, 0.95);
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
