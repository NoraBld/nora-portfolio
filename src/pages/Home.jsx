import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const fullText1 = "Salut, je suis ";
  const fullName = "Nora Nou";
  const fullText2 = "Développeuse Fullstack passionnée, créative et curieuse.";
  
  const [text1, setText1] = useState("");
  const [nameText, setNameText] = useState("");
  const [text2, setText2] = useState("");
  const [i1, setI1] = useState(0);
  const [iName, setIName] = useState(0);
  const [i2, setI2] = useState(0);

  // Gestion darkMode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  // Animations textes
  useEffect(() => {
    if (i1 < fullText1.length) {
      const t = setTimeout(() => {
        setText1(text1 + fullText1[i1]);
        setI1(i1 + 1);
      }, 60);
      return () => clearTimeout(t);
    }
  }, [i1, text1]);

  useEffect(() => {
    if (i1 === fullText1.length && iName < fullName.length) {
      const t = setTimeout(() => {
        setNameText(nameText + fullName[iName]);
        setIName(iName + 1);
      }, 100);
      return () => clearTimeout(t);
    }
  }, [iName, i1, nameText]);

  useEffect(() => {
    if (iName === fullName.length && i2 < fullText2.length) {
      const t = setTimeout(() => {
        setText2(text2 + fullText2[i2]);
        setI2(i2 + 1);
      }, 50);
      return () => clearTimeout(t);
    }
  }, [i2, iName, text2]);

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center"
      style={{
        background: darkMode ? "#000328" : "white",
        color: darkMode ? "#fff" : "#000",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex flex-col justify-center items-center text-center px-4 mt-28">
        <h1 className="intro-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          {text1}
          <span className="neon">{nameText}</span>
          {iName === fullName.length && "."}
        </h1>

        <p className="sub-text text-lg sm:text-xl md:text-2xl font-semibold opacity-0">
          {text2}
        </p>
      </div>

      <style>{`
        /* Neon effet pour le nom */
        .neon {
          color: #ff66c4;
          text-shadow: 0 0 5px #ff66c4, 0 0 10px #ff66c4, 0 0 20px #ff66c4, 0 0 40px #ff66c4;
          animation: pulse 1.5s infinite alternate;
        }

        @keyframes pulse {
          0% { text-shadow: 0 0 5px #ff66c4, 0 0 10px #ff66c4, 0 0 20px #ff66c4, 0 0 40px #ff66c4; }
          100% { text-shadow: 0 0 10px #ff66c4, 0 0 20px #ff66c4, 0 0 30px #ff66c4, 0 0 50px #ff66c4; }
        }

        /* Animation apparition texte secondaire */
        .sub-text {
          animation: fadeIn 2s forwards;
          animation-delay: ${fullText1.length * 0.06 + fullName.length * 0.1}s;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }

        /* Animation typewriter pour l’intro */
        .intro-text {
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
};

export default Home;
