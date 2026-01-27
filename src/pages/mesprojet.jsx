import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";

/* =======================
   Liste des projets
======================= */
const projects = [
  {
    title: "Boutique en ligne de fleurs",
    description:
      "Application web e-commerce permettant de commander des fleurs en ligne, gérer le catalogue, le panier et les commandes. Interface moderne et responsive.",
    image: "/images/bloom-by-nora.png",
    type: "Projet académique",
  },
  {
    title: "Prédiction de la consommation d’électricité (Sonelgaz)",
    description:
      "Application web basée sur le deep learning pour la prédiction de la consommation d’électricité. Préparation des données, entraînement des modèles et intégration dans une application web.",
    image: "/images/anoma.png",
    type: "Projet académique – Deep Learning",
    github: "https://github.com/NoraBld/ANOMA",
  },
    {
    title: "Application web de gestion d’une salle de sport",
    description:
      "Plateforme web pour la gestion des membres, des abonnements et des séances sportives avec une interface simple et moderne.",
    image: "/images/adina.jpg",
    type: "Projet académique",
  },
  {
    title: "Application desktop de gestion de parking",
    description:
      "Application desktop permettant la gestion des entrées et sorties, le suivi des places disponibles et la gestion des abonnements.",
    image: "/images/parking.png",
    type: "Projet académique",
  },
  {
    title: "Application web de gestion des emplois du temps",
    description:
      "Application web destinée au département d’informatique pour la création, la gestion et la consultation des emplois du temps.",
    image: "/images/edt.png",
    type: "Projet académique",
  },

];

export default function Mesprojet() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  return (
    <>
      {/* Background */}
      <ParticlesBackground backgroundColor={darkMode ? "#000328" : "#ffffff"} />

      {/* Conteneur principal */}
      <div
        className="relative min-h-screen z-10 flex flex-col items-center"
        style={{ color: darkMode ? "#ffffff" : "#000328" }}
      >
        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main content */}
        <main
          style={{
            paddingTop: "6rem",
            padding: "2rem",
            width: "100%",
            maxWidth: "1100px",
            textAlign: "center",
          }}
        >
          {/* Titre */}
          <h1
            className="text-6xl font-extrabold mb-8 neon"
            style={{
              marginTop:"5rem",
              marginBottom:"1.5rem",
              fontSize: "3rem",
              textShadow: "0 0 10px #B15B86, 0 0 20px #B15B86",
              color: "#B15B86",
           
         
          
            }}
          >
            Mes projets
          </h1>

          {/* Grille des projets */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                style={{
                  background: darkMode ? "#000328" : "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(177,91,134,0.25)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                  border: `2px solid ${darkMode ? "#B15B86" : "#B15B86"}`,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                  className="project-image"
                />

                <div style={{ padding: "1.2rem", textAlign: "left" }}>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#B15B86",
                      textShadow: "0 0 5px #B15B86",
                    }}
                    className="neon"
                  >
                    {project.type}
                  </span>

                  <h3
                    style={{
                      margin: "0.6rem 0",
                      fontWeight: 700,
                      fontSize: "1.3rem",
                      color: darkMode ? "#ffffff" : "#000328",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      color: darkMode ? "#ffffff" : "#000328",
                    }}
                  >
                    {project.description}
                  </p>

                  {project.github ? (
                    <p style={{ fontSize: "0.8rem", opacity: 0.8 }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#B15B86",
                          textDecoration: "underline",
                          fontWeight: 600,
                        }}
                      >
                        Voir le code sur GitHub
                      </a>
                    </p>
                  ) : (
                    <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>
                      Code non disponible (projet académique)
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Styles globaux */}
        <style>{`
          body {
            transition: background 0.3s, color 0.3s;
          }

          .neon {
            animation: pulse 1.5s infinite alternate;
          }

          .project-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 15px 35px rgba(177,91,134,0.4);
          }

          .project-image:hover {
            transform: scale(1.05);
          }

          @keyframes pulse {
            from { text-shadow: 0 0 5px #B15B86; }
            to { text-shadow: 0 0 20px #B15B86; }
          }

          @media (max-width: 1024px) {
            h1 { font-size: 2.5rem !important; }
            h3 { font-size: 1.1rem !important; }
          }
          @media (max-width: 768px) {
            h1 { font-size: 2rem !important; }
            h3 { font-size: 1rem !important; }
          }
          @media (max-width: 480px) {
            h1 { font-size: 1.6rem !important; }
            h3 { font-size: 0.95rem !important; }
          }
        `}</style>
      </div>
    </>
  );
}
