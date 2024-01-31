import './App.css';

import About from './components/about/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/navbar/NavBar';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex-grow px-8 pt-16 md:px-16 lg:px-32 xl:px-48">
        <Home />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
