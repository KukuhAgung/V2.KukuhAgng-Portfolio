import "./index.css";
import Header from "./Components/Fragments/Header/index.jsx";
import Hero from "./Components/Layouts/Hero";
import About from "./Components/Layouts/About";
import ProjectPage from "./Components/Layouts/ProjectPage";
import Preloader from "./Components/Fragments/Preloader/index.jsx";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Contact from "./Components/Layouts/Contact.jsx";
import Menu from "./Components/Fragments/Menu/index.jsx";
import HorizontalPixelTransition from "./Components/atoms/pixel/horizontal/index.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [preloaderDone, setPreloaderDone] = useState(false);
  const aboutRef = useRef(null);

  const updateDimensions = () => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);
        setPreloaderDone(true);

        document.body.style.cursor = "default";

        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        aboutRef.current &&
        window.scrollY + window.innerHeight >= aboutRef.current.offsetTop
      ) {
        setPreloaderDone(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative flex flex-col gap-16 bg-bg text-primary w-full align-middle overflow-x-hidden overflow-y-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
        preloaderDone={preloaderDone}
      />
      <Menu menuIsActive={menuIsActive} />
      {dimensions.height > 0 && (
        <HorizontalPixelTransition
          menuIsActive={menuIsActive}
          dimensions={dimensions}
        />
      )}
      <Hero />
      <About ref={aboutRef} />
      <ProjectPage />
      <Contact />
    </main>
  );
}

export default App;
