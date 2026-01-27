import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";

const skills = [
  { name: "HTML", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript 2025", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Bootstrap", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "React", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Vue.js", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },

  { name: "Node.js", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PHP", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: ".NET 8 (Web API)", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "Express", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

  { name: "MongoDB", category: "bdd", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", category: "bdd", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", category: "bdd", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Oracle", category: "bdd", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
];

export default function Competence() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("tous");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  return (
    <>
      <ParticlesBackground backgroundColor={darkMode ? "#000328" : "#ffffff"} />

      <div
        className="relative min-h-screen z-10 flex flex-col items-center justify-center"
        style={{ color: darkMode ? "#ffffff" : "#000000" }}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="text-center mt-20 px-4">
          <h1 className="text-4xl mb-12">Mes Compétences</h1>

          {/* TABS */}
          <div className="tabs">
            <button className={filter === "tous" ? "active" : ""} onClick={() => setFilter("tous")}>
              Tous
            </button>
            <button className={filter === "frontend" ? "active" : ""} onClick={() => setFilter("frontend")}>
              Frontend
            </button>
            <button className={filter === "backend" ? "active" : ""} onClick={() => setFilter("backend")}>
              Backend
            </button>
            <button className={filter === "bdd" ? "active" : ""} onClick={() => setFilter("bdd")}>
              BDD
            </button>
          </div>

          {/* SKILLS */}
          <div
            className={`flex flex-wrap justify-center ${
              filter !== "tous" ? "with-space" : ""
            }`}
          >
            {skills
              .filter(skill => filter === "tous" || skill.category === filter)
              .map((skill, index) => (
                <div key={index} className="skill-wrapper">
                  <div
                    className="skill-circle"
                    style={{
                      background: darkMode ? "#000328" : "#f3f4f6",
                      color: darkMode ? "#ffffff" : "#000000",
                    }}
                  >
                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                  </div>
                  <span className="skill-text">{skill.name}</span>
                </div>
              ))}
          </div>

          {/* CSS */}
          <style>{`
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

            .tabs button.active,
            .tabs button:hover {
              background: #B15B86;
              color: #ffffff;
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            }

            .skill-wrapper {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 30px;
              flex: 0 0 calc(100% / 8 - 16px);
            }

            /* Espace UNIQUEMENT pour Frontend / Backend / BDD */
            .with-space .skill-wrapper {
              margin-left: 12px;
              margin-right: 12px;
            }

            main h1 {
             
              font-size: 3rem;
              margin-top: 5rem;
              margin-bottom: 1.5rem;
              text-align: center;
              color: #B15B86;
            }

            .skill-circle {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              border: 2px solid #B15B86;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              transition: transform 0.2s;
            }

            .skill-circle:hover {
              transform: scale(1.1);
            }

            .skill-logo {
              width: 24px;
              height: 24px;
            }

            .skill-text {
              margin-top: 6px;
              font-size: 12px;
              text-align: center;
            }

            @media (max-width: 1024px) {
              .skill-wrapper {
                flex: 0 0 calc(100% / 5 - 16px);
              }
            }

            @media (max-width: 640px) {
              .skill-wrapper {
                flex: 0 0 calc(100% / 3 - 16px);
              }
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
        </main>
      </div>
    </>
  );
}
