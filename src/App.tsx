import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

// import viteLogo from "/vite.svg";
// import { useState } from "react";

// import reactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      <NavBar />
      <div className="mt-16 bg-custom-black text-custom-white">
        <Home />
        <div id="about" className="scroll-m-16">
          <About />
        </div>
        <div id="projects" className="min-h-[calc(100vh-64px)] scroll-m-16">
          <Projects />
        </div>
        <div id="contact" className="scroll-m-16">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
