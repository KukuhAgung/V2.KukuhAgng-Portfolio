import "./index.css";
import Navbar from "./Components/Fragments/Navbar/Navbar";
import Hero from "./Components/Fragments/Hero/Hero";
import Work from "./Components/Fragments/Work/Work";
import About from "./Components/Fragments/About/About";
import Sosmed from "./Components/Fragments/Sosmed/Sosmed";
import ProjectPage from "./Components/Layouts/ProjectPage";

function App() {
  return (
    <div className="relative flex flex-col gap-16 bg-bg text-primary w-full px-5 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Sosmed />
      <ProjectPage />
    </div>
  );
}

export default App;
