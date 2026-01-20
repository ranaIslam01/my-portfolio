import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
// import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience/>
      {/* <Education/> */}
      <Skills />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
