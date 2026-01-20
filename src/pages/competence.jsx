import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";

const skills = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript 2025", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: ".NET 8 (Web API)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Github", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "NextJs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
];

export default function Competence() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
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

          {/* Liste des compétences */}
          <div className="flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <div key={index} className="skill-wrapper">
                <div
                  className="skill-circle"
                  style={{
                    background: darkMode ? "#B15B86" : "#f3f4f6",
                    color: darkMode ? "#ffffff" : "#000000",
                  }}
                >
                  {skill.logo && <img src={skill.logo} alt={skill.name} className="skill-logo" />}
                </div>
                <span className="skill-text">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Styles CSS intégrés */}
          <style>{`
            .skill-wrapper {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 30px;
              flex: 0 0 calc(100% /8 - 16px); 
            }
            
            main h1 {
  margin-top: 16px;
  margin-bottom: 80px;
}

            .skill-circle {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 60px;
              height: 60px;
              border-radius: 50%;
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
                flex: 0 0 calc(100% / 5 - 16px); /* 5 par ligne sur tablette */
              }
            }

            @media (max-width: 640px) {
              .skill-wrapper {
                flex: 0 0 calc(100% / 3 - 16px); /* 3 par ligne sur mobile */
              }
            }
          `}</style>
        </main>
      </div>
    </>
  );
}
