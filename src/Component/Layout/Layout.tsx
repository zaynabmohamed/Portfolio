import NavbarPage from "../Navbar/NavbarPage";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

export default function Layout() {
  return (
    <div className="w-full">
      <div className=" flex justify-center w-full ">
        <NavbarPage />
      </div>

      <main>
        <section id="home" className="scroll-mt-24">
          <Home />
        </section>
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
    </div>
  );
}

