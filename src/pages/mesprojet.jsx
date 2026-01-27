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
    image: "/images/fleur.jpeg", // remplace par ton image réelle
    type: "Projet académique",
  },
  {
    title: "Prédiction de la consommation d’électricité (Sonelgaz)",
    description:
      "Application web basée sur le deep learning pour la prédiction de la consommation d’électricité. Préparation des données, entraînement des modèles et intégration dans une application web.",
    image: "/images/logouniv.png",
    type: "Projet académique – Deep Learning",
    github: "https://github.com/NoraBld/ANOMA", // <-- mets ton lien GitHub ici
  },
  {
    title: "Application desktop de gestion de parking",
    description:
      "Application desktop permettant la gestion des entrées et sorties, le suivi des places disponibles et la gestion des abonnements.",
    image: "/images/logo1.jpeg",
    type: "Projet académique",
  },
  {
    title: "Application web de gestion des emplois du temps",
    description:
      "Application web destinée au département d’informatique pour la création, la gestion et la consultation des emplois du temps.",
    image: "/images/laptop - Copie.gif",
    type: "Projet académique",
  },
  {
    title: "Application web de gestion d’une salle de sport",
    description:
      "Plateforme web pour la gestion des membres, des abonnements et des séances sportives avec une interface simple et moderne.",
    image: "/images/logo1.jpeg",
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
      {/* Particles Background */}
      <ParticlesBackground backgroundColor={darkMode ? "#000328" : "#ffffff"} />

      {/* Conteneur principal */}
      <div
        className="relative min-h-screen z-10 flex flex-col items-center"
        style={{ color: darkMode ? "#ffffff" : "#000000" }}
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
          <h1 style={{ fontSize: "2.5rem", marginBottom: "2.5rem" }}>
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
                style={{
                  background: darkMode ? "#0f1b4c" : "#f4f4f4",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "1.2rem", textAlign: "left" }}>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#00bcd4",
                      fontWeight: "600",
                    }}
                  >
                    {project.type}
                  </span>

                  <h3 style={{ margin: "0.6rem 0" }}>{project.title}</h3>

                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                    {project.description}
                  </p>

                  {project.github ? (
                    <p style={{ fontSize: "0.8rem", opacity: 0.8 }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#00bcd4", textDecoration: "underline" }}
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

        {/* Styles global */}
        <style>{`
          body {
            transition: background 0.3s, color 0.3s;
          }
        `}</style>
      </div>
    </>
  );
}
