import './App.css';
import About from './comps/AboutComp/About';
import Navbar from './comps/NavbarComp/Navbar';
import Contacts from './comps/ContactsComp/Contacts';
import Projects from './comps/ProjectsComp/Projects';
import Services from './comps/ServiceComp/Services';
import Skills from './comps/SkillsComp/Skills';
import Home from './comps/HomeComp/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <span>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contacts />
    </span>
  );
}

export default App;
