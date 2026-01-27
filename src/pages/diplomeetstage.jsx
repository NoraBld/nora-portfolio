import React, { useState, useEffect } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import logoUniv from "../assets/logouniv.png";
import logo from "../assets/logo1.jpeg";

export default function diplomeetstage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  const diplomas = [
    {
      title: "Licence",
      specialization:
        "Licence en Mathématiques et Informatique (Recrutement National) – Informatique",
      university: "Université de Béjaïa",
      country: "Algérie",
      period: "2020 → 2023",
      description: [
        "Niveau : Licence en Informatique",
        "Spécialité : Systèmes d’Information",
        "Formation axée sur les bases fondamentales de l’informatique et des mathématiques appliquées",
        "Travaux pratiques, projets académiques et initiation à la gestion de projet",
      ],
      tags: [
        "MongoDB",
        "MySQL",
        "JavaScript",
        "HTML",
        "PHP",
        "Algorithmes",
        "UML",
        "POO",
        "Bootstrap",
        "Gestion de projet",
        "Algèbre",
        "LaTeX",
      ],
      logo: logoUniv,
    },
    {
      title: "Master 2",
      specialization: "Master 2 en Informatique – Génie Logiciel",
      university: "Université de Béjaïa",
      country: "Algérie",
      period: "2023 → 2025",
      description: [
        "Niveau : Master en Informatique",
        "Spécialité : Génie Logiciel",
        "Conception et développement d’applications web et logicielles avancées",
        "Approfondissement des architectures logicielles, services web et méthodes agiles",
        "Projets académiques orientés vers les technologies modernes et le deep learning",
      ],
      tags: [
        ".NET Framework",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "FastAPI",
        "Python",
        "Deep Learning",
        "HTML",
        "Vue.js",
        "Tailwind CSS",
        "AngularJS",
        "PostgreSQL",
        "Oracle Database",
        "Scrum",
        "Services Web",
      ],
      logo: logoUniv,
    },
  ];

  const stages = [
    {
      title: "Stagiaire en développement web et intelligence artificielle",
      company: "Sonelgaz",
      location: "Béjaïa, Algérie",
      period: "févr. 2025 - mai 2025 · 4 mois",
      description: [
        "Développement d’une application web basée sur le deep learning pour la prédiction de la consommation d’électricité",
        "Gestion et suivi des clients à haute et moyenne tension",
        "Traitement et analyse des données de consommation mensuelle",
        "Développement d’une application web de prédiction des consommations (modèles SARIMA, SARIMAX, GRU)",
      ],
      tags: [
        "Intelligence artificielle (IA)",
        "Analyse et prédiction statistique (SARIMA,SARIMAX)",
        "Deep learning",
        "Réseaux de neurones artificiels",
        "streamlit",
        "Développement Full-Stack (React, Node.js, Express, PostgreSQL)",
      ],
       logo: logo,
    },
  ];

  return (
    <>
      <ParticlesBackground backgroundColor={darkMode ? "#000328" : "#ffffff"} />

      <div className="education-page">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Diplômes */}
        <h1 className="section-title">
          <FaGraduationCap className="icon" />
          Mon parcours académique
        </h1>

        <div className="timeline-container">
          {diplomas.map((d, index) => (
            <div key={index} className="timeline-item">
              <div className="logo-inside">
                <img src={d.logo} alt={d.university} />
              </div>

              <div className="description">
                <div className="title-period">
                  <h3 className="degree-title">
                    {d.title} – {d.specialization}
                  </h3>

                  {/* ✅ CONDITION ICI */}
                  <span
                    className={
                      d.title === "Master 2"
                        ? "period-old"
                        : "period-color"
                    }
                  >
                    {d.period}
                  </span>
                </div>

                <p className="company university-color">
                  {d.university}, {d.country}
                </p>

                <ul className="description-text">
                  {d.description.map((point, i) => (
                    <li
                      key={i}
                      className={
                        point.startsWith("Niveau") ||
                        point.startsWith("Spécialité")
                          ? "level-speciality"
                          : ""
                      }
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="tags">
                  {d.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stages */}
        <h1 className="section-title" style={{ marginTop: "70px" }}>
          <FaBriefcase className="icon" />
          Mes stages
        </h1>

        <div className="timeline-container">
  {stages.map((s, index) => (
    <div key={index} className="timeline-item">
      <div className="logo-inside">
        <img src={s.logo} alt={s.company} />
      </div>
              <div className="description">
                <div className="title-period">
                  <h3 className="degree-title">{s.title}</h3>
                  <span className="period-color">{s.period}</span>
                </div>

                <p className="company university-color">
                  {s.company}, {s.location}
                </p>

                <ul className="description-text">
                  {s.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="tags">
                  {s.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-page {
          min-height: 100vh;
          padding-top: 70px;
          font-family: 'Segoe UI', sans-serif;
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
        }
         .title-period {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-bottom: 10px;
        } 

        .icon {
          font-size: 2.8rem;
          margin-right: 12px;
          color: #B15B86;
          transition: font-size 0.3s;
        }

        @media (max-width: 1024px) {
          .section-title {
            font-size: 2.2rem;
          }
          .icon {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 600px) {
          .section-title {
            flex-direction: column;
            text-align: center;
            font-size: 1.9rem;
            gap: 10px;
          }
          .icon {
            margin-right: 0;
            font-size: 1.9rem;
          }
        }

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
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
         
        }

        .logo-inside img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 3px solid ;
        }

        .description {
          background: ${darkMode ? "rgba(177,91,134,0.1)" : "rgba(0,3,40,0.05)"};
          padding: 25px 30px;
          border-radius: 14px;
          flex: 1;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .description:hover {
          transform: translateX(5px);
          box-shadow: 0 10px 30px rgba(177, 91, 134, 0.6);
        }

        .degree-title {
          color: #B15B86;
          font-size: 1.3rem;
          font-weight: bold;
        }

        .period-color {
          color: ${darkMode ? "#ccc" : "#000328"};
          font-style: italic;
        }

        .university-color {
          color: ${darkMode ? "#ffffff" : "#000328"};
          font-weight: bold;
          margin-bottom: 12px;
        }

        .description-text li {
          color: ${darkMode ? "#ffffff" : "#000328"};
        }

        .level-speciality {
          font-weight: bold;
        }

        ul {
          padding-left: 20px;
          margin-bottom: 15px;
        }

        li {
          margin-bottom: 6px;
          line-height: 1.6;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }

        .tag {
          background: #B15B86;
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
