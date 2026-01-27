import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Competence from "./pages/Competence";
import Contact from "./pages/Contact";
import Diplomeetstage from "./pages/Diplomeetstage";
import Mesprojet from "./pages/Mesprojet";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />  {/* <== AJOUT */}
        <Route path="/projects" element={<Diplomeetstage />} />
        <Route path="/projects" element={<Competence />} />
        <Route path="/projects" element={<Mesprojet />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
