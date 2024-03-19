import { useState } from "react";
import HeroCursor from "../context/HeroCursor";
import Paragraph from "../atoms/paragraph/Paragraph";
import Header from "../atoms/header/Header";


const header = `KUKUH AGUNG TRI PAMUJI`;
const paragraph = `A frontend developer based on Indonesia. Scroll to explore my work
below`;
function Hero() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onMouseOver={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className="relative min-h-[80vh] w-full flex flex-col justify-center gap-y-4 md:items-center"
    >
      <div data-scroll data-scroll-speed="0.1" className="min-w-[54%] mt-28">
        <h1 className="text-[40px] md:text-[50px] font-extrabold leading-[70px] tracking-[1%]">
          HI THERE, I'M
        </h1>
        <Header header={header} />
      </div>
      <div data-scroll data-scroll-speed="0.1" className="min-w-[50%]">
        <Paragraph paragraph={paragraph} key={1} />
      </div>
      <HeroCursor isActive={isActive} />
    </div>
  );
}

export default Hero;
