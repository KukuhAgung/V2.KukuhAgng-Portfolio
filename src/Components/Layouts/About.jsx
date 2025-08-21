import Paragraph from "../atoms/paragraph/Paragraph";
import Sosmed from "./../Fragments/Sosmed/Sosmed";

const paragraph =
  "Graduate of SMK Telkom Purwokerto, experienced in frontend development using React and MERN stack. Currently a Data Science student at Telkom University, while developing skills and passion in web development projects.";
function About() {
  return (
    <section
      id="About"
      className="relative w-full flex h-[80vh] md:h-[60vh] md:justify-center"
    >
      <div className="md:w-[812px] py-6">
        <div data-scroll data-scroll-speed="0.07" className="w-full p-2">
          <h1 className="text-[1.5rem] font-bold tracking-[1%]">ABOUT ME</h1>
        </div>
        <div data-scroll data-scroll-speed="0.1" className="w-full p-2">
          <Paragraph paragraph={paragraph} key={1} />
        </div>
      </div>
      <Sosmed />
    </section>
  );
}

export default About;
