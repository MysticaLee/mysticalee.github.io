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
    <div className="relative">
      <NavBar />
      <div className="bg-custom-black px-8 pt-16 text-custom-white md:px-16 lg:px-32 xl:px-48">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
