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
import Skills from "./Components/Layouts/Skills.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [preloaderDone, setPreloaderDone] = useState(false);
  const Homeref = useRef(null);
  const Aboutref = useRef(null);
  const Workref = useRef(null);
  const Contactref = useRef(null);

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
      <Menu
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
        Home={Homeref}
        About={Aboutref}
        Work={Workref}
        Contact={Contactref}
      />
      {dimensions.height > 0 && (
        <HorizontalPixelTransition
          menuIsActive={menuIsActive}
          dimensions={dimensions}
        />
      )}
      <Hero ref={Homeref} />
      <About sectionRef={Aboutref} />
      <Skills />
      <ProjectPage sectionRef={Workref} />
      <Contact Home={0} About={700} Work={1650} sectionRef={Contactref} />
    </main>
  );
}

export default App;
