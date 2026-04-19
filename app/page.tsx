import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-hairline">
        <div className="mx-auto max-w-page px-6 py-8 text-center text-[13px] text-taupe">
          Tania Tan · 2026 · Made in Singapore
        </div>
      </footer>
    </>
  );
}
