import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import darkProfile from "../assets/NORAimagesombre.png";
import lightProfile from "../assets/NORAimageclaire.png";

export default function about() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [slideDirection, setSlideDirection] = useState("right");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  const profileImg = darkMode ? darkProfile : lightProfile;

  const handleTabClick = (tab) => {
    if (tab === activeTab) return;
    setSlideDirection(tab > activeTab ? "right" : "left");
    setActiveTab(tab);
  };

  const renderText = (tab) => {
    switch (tab) {
      case "description":
        return (
          <ul className="description-list">
            <li>💻 Développement Fullstack (web et IA)</li>
            <li>🎯 Création d’applications performantes et intuitives</li>
            <li>🚀 Passion pour l’innovation et les nouvelles technologies</li>
            <li>📚 Formation : Master en Génie Logiciel</li>
            <li>🤝 Collaboration et travail en équipe</li>
          </ul>
        );
      case "languages":
        const langs = [
          { name: "Français", level: "90%" },
          { name: "Anglais", level: "80%" },
          { name: "Arabe", level: "100%" },
          { name: "Kabyle", level: "100%" },
        ];
        return (
          <div className="languages">
            {langs.map((lang, index) => (
              <div className="language" key={index}>
                <span>{lang.name}</span>
                <div className="bar">
                  <div className="fill" style={{ width: lang.level }}></div>
                </div>
              </div>
            ))}
          </div>
        );
      case "hobbies":
        const hobbies = [
          { icon: "📚", name: "Lecture de livres" },
          { icon: "🎨", name: "Dessin" },
          { icon: "💻", name: "Découverte des nouvelles technologies" },
          { icon: "🧪", name: "Essayer tout" },
          { icon: "🧶", name: "Crochet", link: "https://www.instagram.com/nrcrochetworld?igsh=MXh2NzFyc2c3ajl2bw==" },
          { icon: "🍳", name: "Cuisiner" },
        ];

        return (
          <ul className="hobbies-list">
            {hobbies.map((hobby, index) => (
              <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {hobby.link ? (
                  <a href={hobby.link} target="_blank" rel="noopener noreferrer">
                    {hobby.icon} {hobby.name}
                  </a>
                ) : (
                  <span>{hobby.icon} {hobby.name}</span>
                )}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <ParticlesBackground backgroundColor={darkMode ? "#000328" : "#ffffff"} />


      <div className={darkMode ? "dark-mode container" : "light-mode container"}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <h1 className="title">À propos de moi</h1>

        <div className="tabs">
          <button
            className={activeTab === "description" ? "active" : ""}
            onClick={() => handleTabClick("description")}
          >
            Description
          </button>
          <button
            className={activeTab === "languages" ? "active" : ""}
            onClick={() => handleTabClick("languages")}
          >
            Langues
          </button>
          <button
            className={activeTab === "hobbies" ? "active" : ""}
            onClick={() => handleTabClick("hobbies")}
          >
            Hobbies
          </button>
        </div>

        <div className="main-section">
          <div className="photo-section">
            <img src={profileImg} alt="Nora Belaid" className="photo" />
          </div>

          <div className={`text-section slide-${slideDirection}`}>
            {renderText(activeTab)}
          </div>
        </div>
      </div>

      <style>{`
        .container {
          min-height: 100vh;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .light-mode { color: #000328; transition: background 0.3s, color 0.3s; }
        .dark-mode { color: #ffffff; transition: background 0.3s, color 0.3s; }

        .title {
          font-size: 3rem;
          margin-top: 5rem;
          margin-bottom: 1.5rem;
          text-align: center;
          color: #B15B86;
        }

        /* Tabs */
        .tabs {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        .tabs button {
          padding: 0.7rem 1.5rem;
          border: 2px solid #B15B86;
          background: transparent;
          color: inherit;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s;
        }
        .tabs button.active, .tabs button:hover {
          background: #B15B86;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .main-section {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          max-width: 1000px;
          width: 100%;
        }

        .photo-section {
          flex: 1;
          display: flex;
          justify-content: center;
          margin-right: 2rem;
          margin-top: -20px;
        }

        .photo {
          width: 100%;
          max-width: 250px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          transition: transform 0.3s;
        }
        .photo:hover { transform: scale(1.05); }

        .text-section {
          flex: 2;
          font-size: 1.4rem;
          line-height: 1.6;
          min-height: 120px;
          overflow: hidden;
          position: relative;
        }

        /* Description avec icônes */
        .description-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .description-list li {
          padding-left: 1.5rem;
          position: relative;
          font-weight: 500;
        }
        .description-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          background-color: #B15B86;
          border-radius: 50%;
        }

        /* Slide animation */
        .slide-right { animation: slideRight 0.4s ease forwards; }
        .slide-left { animation: slideLeft 0.4s ease forwards; }
        @keyframes slideRight { 0% { transform: translateX(50px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        @keyframes slideLeft { 0% { transform: translateX(-50px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }

        /* Langues */
        .languages { display: flex; flex-direction: column; gap: 1rem; }
        .language span { font-weight: 500; margin-bottom: 0.3rem; color: #B15B86; }
        .bar { width: 100%; background: rgba(177,91,134,0.2); height: 12px; border-radius: 8px; overflow: hidden; }
        .fill { height: 100%; background: #B15B86; border-radius: 8px; transition: width 0.5s ease; }

        /* Hobbies */
        .hobbies-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 1.2rem;
          padding: 0;
          list-style: none;
        }
        .hobbies-list li {
          border: 1px solid #B15B86;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          transition: all 0.3s;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeSlideUp 0.4s forwards;
        }
        .hobbies-list li:hover {
          background-color: #B15B86;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }
        .hobbies-list a { text-decoration: none; color: inherit; font-weight: 500; }
        .hobbies-list span { font-weight: 500; }

        @keyframes fadeSlideUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }

        /* Responsive */
        @media(max-width: 767px) {
          .main-section { flex-direction: column; align-items: center; }
          .photo-section { margin-right: 0; margin-bottom: 2rem;width: 50%;
          max-width: 150px; }
          .tabs { gap: 1.5rem; margin-top: 1.5rem; }
        }
          @media (max-width: 1024px) {
            h1 { font-size: 2.5rem !important; }
           
          }
          @media (max-width: 768px) {
            h1 { font-size: 2rem !important; }
            
          }
          @media (max-width: 480px) {
            h1 { font-size: 1.6rem !important; }
           
          }
      `}</style>
    </>
  );
}
