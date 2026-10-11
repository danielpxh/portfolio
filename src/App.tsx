import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsTechnologies from "./components/SkillsTechnologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import { useAnalytics } from "@/hooks/google-analytics/GoogleAnalytics";

function App() {
  useAnalytics(import.meta.env.VITE_GA_MEASUREMENT_ID || "");

  const [loaderDone, setLoaderDone] = useState(false);
  const [imageReady, setImageReady] = useState(false);
  const loading = !loaderDone || !imageReady;

  // Preload hero image — fires in parallel with the loader animation
  useEffect(() => {
    const img = new Image();
    img.src = "/assets/me-2-enhance8x.webp";
    img.onload = () => setImageReady(true);
    img.onerror = () => setImageReady(true);
  }, []);

  return (
    <>
      {loading && <Loader onDone={() => setLoaderDone(true)} />}
      <div
        className={`min-h-screen bg-[hsl(var(--background))] transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <ScrollToTop />
        {!loading && <Navbar />}
        <main>
          <section
            id="home"
            className="min-h-screen flex items-center scroll-mt-20"
          >
            <Hero />
          </section>
          <section id="about" className="py-16 sm:py-20 scroll-mt-20">
            <About />
          </section>
          <section
            id="skills"
            className="py-16 sm:py-20 bg-[hsl(var(--muted))] scroll-mt-20"
          >
            <SkillsTechnologies />
          </section>
          <section id="experience" className="py-16 sm:py-20 scroll-mt-20">
            <Experience />
          </section>
          <section
            id="projects"
            className="py-16 sm:py-20 bg-[hsl(var(--muted))] scroll-mt-20"
          >
            <Projects />
          </section>
          <section id="contact" className="py-16 sm:py-20 scroll-mt-20">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
