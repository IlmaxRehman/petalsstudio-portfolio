import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Contact from "./components/Contact";
function App(){
  return(
    <div>
     <Navbar />

      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Contact />
    </div>
  )
}

export default App;