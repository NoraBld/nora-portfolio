import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const fullText1 = "Bonjour, je m'appelle ";
  const fullName = "Nora Nou";
  const fullText2 = "Bienvenue sur mon portfolio, Développeuse fullstack passionnée.";

  const [text1, setText1] = useState("");
  const [nameText, setNameText] = useState("");
  const [text2, setText2] = useState("");
  const [i1, setI1] = useState(0);
  const [iName, setIName] = useState(0);
  const [i2, setI2] = useState(0);

  useEffect(() => {
    if (i1 < fullText1.length) {
      const t = setTimeout(() => {
        setText1(text1 + fullText1[i1]);
        setI1(i1 + 1);
      }, 50);
      return () => clearTimeout(t);
    }
  }, [i1, text1]);

  useEffect(() => {
    if (i1 === fullText1.length && iName < fullName.length) {
      const t = setTimeout(() => {
        setNameText(nameText + fullName[iName]);
        setIName(iName + 1);
      }, 80);
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
      className="relative min-h-screen w-full text-black flex flex-col"
      style={{
        background: "white", // <-- background blanc
      }}
    >
      <Navbar />

      <div className="flex flex-col justify-center items-center flex-1 text-center px-4 mt-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          {text1}
          <span className="electric">{nameText}</span>
          {iName === fullName.length && "."}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-lg text-gray-800">
          {text2}
        </p>
      </div>

      <style>{`
        @keyframes electric {
          0%,100% { color:#0A1647; text-shadow:0 0 8px  #b15b86; ; }
          25%,75% { color:#ffffff; text-shadow:0 0 15px #ffffff; }
          50% { color:#0A1647; text-shadow:0 0 10px  #b15b86; ; }
        }
        .electric {
          font-weight: 900;
          animation: electric 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
