import Paragraph from "../atoms/paragraph/Paragraph";

const paragraph =
  "Curently I’m a student at SMK Telkom Purwokerto, I have an interest in website programming, especially as a frontend developer.";
const About = () => {
  return (
    <div className="w-full flex  md:justify-center">
      <div className="md:w-[812px] py-6">
        <div data-scroll data-scroll-speed="0.3" className="w-full p-2">
          <h1 className="text-[18px] font-bold tracking-[1%]">ABOUT ME</h1>
        </div>
        <div data-scroll data-scroll-speed="0.3" className="w-full p-2">
          <Paragraph paragraph={paragraph} key={1} />
        </div>
      </div>
    </div>
  );
};

export default About;
