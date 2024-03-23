import { useState } from "react";
import MoveText from "../Fragments/Hero/index";

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
