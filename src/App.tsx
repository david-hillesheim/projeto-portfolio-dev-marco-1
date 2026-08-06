import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Container from "./components/Container/Container";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}