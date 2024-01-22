// import "./App.css";

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

// import viteLogo from "/vite.svg";
// import { useState } from "react";

// import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div className="bg-custom-black h-screen">
      <NavBar />
      <Home />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
