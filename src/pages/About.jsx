import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import darkProfile from "../assets/NORAimagesombre.png"; // photo mode sombre
import lightProfile from "../assets/NORAimageclaire.png"; // photo mode clair

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  // Choix de l'image selon le mode
  const profileImg = darkMode ? darkProfile : lightProfile;

  return (
    <>
      {/* Background */}
      <ParticlesBackground backgroundColor={darkMode ? "#000328" : "#ffffff"} />
    
      <div className={darkMode ? "dark-mode container" : "light-mode container"}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Titre en accent */}
        <h1 className="title">À propos de moi</h1>

        {/* Section principale */}
        <div className="main-section">
          {/* 1/3 gauche - photo */}
          <div className="photo-section">
            <img src={profileImg} alt="Nora Belaid" className="photo" />
          </div>

          {/* 2/3 droite - texte */}
          <div className="text-section">
            <p>
              Bonjour ! Je suis <strong>Nora Belaid</strong>, développeuse Fullstack spécialisée en web et intelligence artificielle.
            </p>
            <p>
              Diplômée d’un Master en Génie Logiciel, je crée des applications web performantes et innovantes en intégrant les nouvelles technologies.
            </p>
            <p>
              Explorez mon portfolio pour découvrir mes projets et collaborations.
            </p>
          </div>
        </div>
      </div>

      {/* Styles CSS */}
      <style>{`
        .container {
          min-height: 100vh;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Mode clair */
        .light-mode {
          
          color: #000328; /* texte noir */
          transition: background 0.3s, color 0.3s;
        }

        /* Mode sombre */
        .dark-mode {
          
          color: #ffffff; /* texte blanc */
          transition: background 0.3s, color 0.3s;
        }

        /* Titre en accent #B15B86 */
        .title {
          font-size: 3rem;
          margin-top: 5rem;
          margin-bottom: 3rem;
          text-align: center;
          color: #B15B86; /* titre toujours accent */
        }

        .main-section {
         margin-top: 5rem;
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
        }

        .photo {
         
          width: 100%;
          max-width: 250px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          transition: transform 0.3s;
        }

        .photo:hover {
          transform: scale(1.05);
        }

        .text-section {
          flex: 2;
          font-size: 1.4rem;
          line-height: 1.5;
        }

        .text-section p {
          margin-bottom: 1.6rem;
        }

        /* Mobile view */
        @media(max-width: 767px) {
          .main-section {
            flex-direction: column;
            align-items: center;
          }

          .photo-section {
            margin-right: 0;
            margin-bottom: 2rem;
          }
        }

        /* Accent couleur #B15B86 pour nom */
        .text-section strong {
          color: #B15B86; /* reste la même couleur dans tous les modes */
        }
      `}</style>
    </>
  );
}
