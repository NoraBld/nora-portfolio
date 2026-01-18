import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Diplomeetstage() {
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

      {/* Conteneur centré */}
      <div
        className={`relative min-h-screen z-10 flex flex-col items-center justify-center`}
        style={{ color: darkMode ? "#ffffff" : "#000000" }}
      >
        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main content centré */}
        <main
          className="text-center"
          style={{ paddingTop: "5rem", padding: "2rem", maxWidth: "800px" }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            À propos de moi
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            Bonjour ! Je suis Nora, développeuse Fullstack & Software Engineer.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            Sur cette page, tu peux ajouter ton CV, ton parcours, ton expérience
            ou tout autre contenu que tu souhaites présenter.
          </p>
        </main>

        {/* Styles dark/light mode */}
        <style>{`
          .dark-mode { background: #000328; color: #ffffff; transition: background 0.3s, color 0.3s; }
          .light-mode { background: #ffffff; color: #000000; transition: background 0.3s, color 0.3s; }
        `}</style>
      </div>
    </>
  );
}
