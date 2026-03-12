import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Automation from "./components/Automation";
import Testimonials from "./components/Testimonals";
function App(){
  return(
    <div>
     <Navbar />

      <Hero />
      <About />
      <Services />
      <Projects />
      <Automation />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;