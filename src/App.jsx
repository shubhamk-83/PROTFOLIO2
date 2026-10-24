import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { Helmet } from "react-helmet-async";
import useLenis from "./hooks/useLenis";
import { CursorProvider } from "./context/CursorContext";

import AmbientBackground from "./components/AmbientBackground";
import MouseSpotlight from "./components/MouseSpotlight";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import TechMarquee from "./sections/TechMarquee";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Achievements from "./sections/Achievements";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mobilePerformance, setMobilePerformance] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setMobilePerformance(media.matches);

    update();
    media.addEventListener?.("change", update);

    return () => media.removeEventListener?.("change", update);
  }, []);

  useLenis();

  return (
    <MotionConfig reducedMotion={mobilePerformance ? "always" : "never"}>
      <CursorProvider>
        <Helmet>
          <title>
            Shubham Kumar — Creative Developer & MERN Stack Engineer
          </title>
          <meta
            name="description"
            content="Portfolio of Shubham Kumar, a creative developer and MERN stack engineer building cinematic, high-performance web experiences."
          />
          <meta
            property="og:title"
            content="Shubham Kumar — Creative Developer"
          />
          <meta
            property="og:description"
            content="Full-stack MERN developer portfolio: projects, skills, and experience."
          />
          <meta property="og:type" content="website" />
        </Helmet>

        {loading && <Loader onFinish={() => setLoading(false)} />}

        <ScrollProgress />
        <AmbientBackground />
        <MouseSpotlight />
        <CustomCursor />

        <Navbar />

        <main className="relative z-10">
          <Hero />
          <About />
          <TechMarquee />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Services />
          <Testimonials />
          <Contact />
        </main>

        <div className="relative z-10">
          <Footer />
        </div>
      </CursorProvider>
    </MotionConfig>
  );
}
