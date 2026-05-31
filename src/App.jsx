import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavComponent from "./Components/NavComponent";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contect from "./Components/Contect";
import Tools from "./Components/Tools"
import Education from "./Components/Education";
import Internship from "./Components/Internship";
import Footer from "./Components/Footer";

function App() {
  return (
        <div className="body">
      <NavComponent />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="tools">
        <Tools />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="internship">
        <Internship />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="contact">
        <Contect />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>

  );
}

export default App;






//  <BrowserRouter>
    //   <NavComponent/>

    //   <Routes>
    //     <Route path="/" element={<Hero />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/skills" element={<Skill />} />
    //     <Route path="/projects" element={<Project />} />
    //     <Route path="/contact" element={<Contect />} />
    //   </Routes>
    // </BrowserRouter>