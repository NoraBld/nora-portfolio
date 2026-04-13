import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import logoUniv from "../assets/logouniv.png";

export default function Experience() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  const experiences = [
    {
      title: "Chargée de Travaux Pratiques (TP)",
      company: "Université de Béjaïa",
      type: "Temps partiel",
      period: "Févr. 2026 – Aujourd’hui",
      description:
        "Encadrement des travaux pratiques, accompagnement des étudiants et correction des TP.",
      modules: [
        {
          title: "Systèmes d’exploitation",
          items: ["Linux / Ubuntu", "Gestion des processus"],
        },
        {
          title: "Bases de données",
          items: ["SQL", "MySQL"],
        },
        {
          title: "Programmation orientée objet",
          items: ["Classes & objets", "Java / Python"],
        },
      ],
      logo: logoUniv,
    },
  ];

  return (
    <>
      <ParticlesBackground backgroundColor={darkMode ? "#000328" : "#ffffff"} />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="exp-page">
        <h1 className="section-title"> Expériences</h1>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              {/* LOGO */}
              <div className="logo-inside">
                <img src={exp.logo} alt={exp.company} />
              </div>

              {/* CARD */}
              <div className="description">
                <div className="title-period">
                  <h3 className="degree-title">{exp.title}</h3>
                  <span className="period-color">{exp.period}</span>
                </div>

                <p className="company">
                  {exp.company} · {exp.type}
                </p>

                <p className="desc">{exp.description}</p>

                {/* MODULES */}
                <div className="modules">
                  {exp.modules.map((m, i) => (
                    <div key={i} className="module-card">
                      <h4>🟣 {m.title}</h4>
                      <ul>
                        {m.items.map((it, j) => (
                          <li key={j}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-page {
          min-height: 100vh;
          padding-top: 90px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: ${darkMode ? "#ffffff" : "#000328"};
        }

        .section-title {
          font-size: 2.8rem;
          color: #B15B86;
          margin-bottom: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* TIMELINE */
        .timeline-container {
          width: 95%;
          max-width: 1200px;
        }

        .timeline-item {
          display: flex;
          margin-bottom: 50px;
        }

        .logo-inside {
          width: 70px;
          height: 70px;
          margin-right: 25px;
        }

        .logo-inside img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 3px solid #B15B86;
          object-fit: cover;
        }

        /* CARD */
        .description {
          flex: 1;
          padding: 25px 30px;
          border-radius: 14px;
          background: ${darkMode ? "rgba(177,91,134,0.1)" : "rgba(0,3,40,0.05)"};
          transition: 0.3s;
        }

        .description:hover {
          transform: translateX(5px);
          box-shadow: 0 10px 30px rgba(177, 91, 134, 0.5);
        }

        .title-period {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .degree-title {
          color: #B15B86;
          font-size: 1.3rem;
          font-weight: bold;
        }

        .period-color {
          font-style: italic;
          color: ${darkMode ? "#ccc" : "#000328"};
        }

        .company {
          font-weight: bold;
          margin: 10px 0;
        }

        .desc {
          margin-bottom: 15px;
          opacity: 0.9;
        }

        /* MODULES */
        .modules {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .module-card {
          flex: 1;
          min-width: 220px;
          background: ${darkMode ? "#0b0b1f" : "#ffffff"};
          border-left: 4px solid #B15B86;
          padding: 15px;
          border-radius: 12px;
          transition: 0.3s;
        }

        .module-card:hover {
          transform: translateY(-5px);
        }

        .module-card h4 {
          color: #B15B86;
          margin-bottom: 10px;
        }

        ul {
          padding-left: 18px;
        }

        li {
          margin-bottom: 5px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column;
          }

          .logo-inside {
            margin-bottom: 15px;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}