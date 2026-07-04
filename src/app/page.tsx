import { About } from "@/components/sections/About/About";
import { Books } from "@/components/sections/Books/Books";
import { Contact } from "@/components/sections/Contact/Contact";
import { Experience } from "@/components/sections/Experience/Experience";
import { Footer } from "@/components/sections/Footer/Footer";
import { Header } from "@/components/sections/Header/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";
import { Skills } from "@/components/sections/Skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Books />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
