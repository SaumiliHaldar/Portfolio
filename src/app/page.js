import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Experience from "@/components/section/Experience";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
