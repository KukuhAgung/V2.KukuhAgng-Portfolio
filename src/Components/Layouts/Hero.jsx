import { useState } from "react";
import HeroCursor from "../context/HeroCursor";
import Paragraph from "../atoms/paragraph/Paragraph";
import MoveText from "../Fragments/Header/index";

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
      className="relative flex justify-center md:items-center"
    >
      <MoveText />
    </div>
  );
}

export default Hero;
