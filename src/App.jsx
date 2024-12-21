import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonails from "./components/Testimonails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  

  return (
    <div className="overflow-hidden w-full">
      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
