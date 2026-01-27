import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Competence from "./pages/competence";
import Contact from "./pages/contact";
import Diplomeetstage from "./pages/diplomeetstage";
import Mesprojet from "./pages/mesprojet";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/competence" element={<Competence />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/diplomeetstage" element={<Diplomeetstage />} />
      <Route path="/mesprojet" element={<Mesprojet />} />
    </Routes>
  );
}
