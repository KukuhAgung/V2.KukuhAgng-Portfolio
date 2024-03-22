import "./index.css";
import Navbar from "./Components/Fragments/Navbar/Navbar";
import Hero from "./Components/Layouts/Hero";
import About from "./Components/Layouts/About";
import ProjectPage from "./Components/Layouts/ProjectPage";
import Preloader from "./Components/Fragments/Preloader/index.jsx";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Contact from "./Components/Layouts/Contact.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);

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
      <Hero />
      <About />
      <Navbar />
      <ProjectPage />
      <Contact/>
    </main>
  );
}

export default App;
