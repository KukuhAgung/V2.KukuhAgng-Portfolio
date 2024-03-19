import "./index.css";
import Navbar from "./Components/Fragments/Navbar/Navbar";
import Hero from "./Components/Layouts/Hero";
import Work from "./Components/Fragments/Work/Work";
import About from "./Components/Layouts/About";
import Sosmed from "./Components/Fragments/Sosmed/Sosmed";
import ProjectPage from "./Components/Layouts/ProjectPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="relative flex flex-col gap-16 bg-bg text-primary w-full px-5 overflow-x-hidden overflow-y-hidden">
      <Hero />
      <Sosmed />
      <About />
      <Navbar />
      <Work />
      <ProjectPage />
    </main>
  );
}

export default App;
