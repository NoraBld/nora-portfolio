import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  return (
    <>
      <ParticlesBackground backgroundColor={darkMode ? "#000328" : "#ffffff"} />

      <div
        className="relative min-h-screen z-10 flex flex-col items-center"
        style={{ color: darkMode ? "#ffffff" : "#000000" }}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <h1 className="contact-title">Contactez-moi</h1>

        <div className="contact-grid">
          <div className="contact-box">
            <FaEnvelope size={28} />
            <span>norabelaid86@gmail.com</span>
          </div>

          <div className="contact-box social-box">
            <a href="https://github.com/NoraBld" target="_blank" rel="noreferrer">
              <FaGithub size={28} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="contact-box">
            <FaMapMarkerAlt size={28} />
            <span>Béjaïa, Algérie</span>
          </div>

          <div className="contact-box social-box">
            <a href="https://www.facebook.com/no.ra.2420" target="_blank" rel="noreferrer">
              <FaFacebook size={28} />
              <span>Facebook</span>
            </a>
          </div>

          <div className="contact-box social-box">
            <a href="https://www.instagram.com/nora_bld2?igsh=M3A2OWUzYnoyNnZz" target="_blank" rel="noreferrer">
              <FaInstagram size={28} />
              <span>Instagram</span>
            </a>
          </div>

          <div className="contact-box social-box">
            <a href="https://www.linkedin.com/in/nora-belaid-931606380" target="_blank" rel="noreferrer">
              <FaLinkedin size={28} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <style>{`
          .contact-title {
            font-size: 2.5rem;
            margin-top: 120px;
            margin-bottom: 60px;
            color: #B15B86;
            text-align: center;
          }

          .contact-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            width: 80%;
            max-width: 1000px;
          }

          .contact-box {
            background: rgba(177, 91, 134, 0.1);
            border: 2px solid #B15B86;
            padding: 25px;
            border-radius: 18px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            font-size: 1.1rem;
            transition: all 0.3s;
            box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          }

          .contact-box svg {
            color: #B15B86;
          }

          .contact-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(177, 91, 134, 0.5);
          }

          .social-box a {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: inherit;
            text-decoration: none;
            gap: 8px;
          }

          .social-box a:hover {
            color: #B15B86;
          }

          @media (max-width: 900px) {
            .contact-grid {
              grid-template-columns: 1fr;
              width: 90%;
            }
          }
        `}</style>
      </div>
    </>
  );
}
