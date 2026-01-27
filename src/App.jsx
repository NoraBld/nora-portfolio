import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Competence from "./pages/competence";
import Contact from "./pages/Contact";
import Diplomeetstage from "./pages/Diplomeetstage";
import Mesprojet from "./pages/Mesprojet";



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
