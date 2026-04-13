
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import About from "./pages/About";

import Competence from "./pages/Competence"; // doit correspondre exactement au nom du fichier

import Contact from "./pages/Contact";
import Diplomeetstage from "./pages/Diplomeetstage";
import Mesprojet from "./pages/Mesprojet";
import Experience from "./pages/Experience";


export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />  {/* <== AJOUT */}
        <Route path="/diplomeetstage" element={<Diplomeetstage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/competence" element={<Competence />} />
        <Route path="/mesprojet" element={<Mesprojet />} />
      </Routes>
  );
}



