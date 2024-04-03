import React from "react";
import { motion } from "framer-motion";

const anim = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default function index({
  menuIsActive,
  setMenuIsActive,
  Home,
  About,
  Work,
  Contact,
}) {
  const scrollToSection = (elementRef) => {
    setMenuIsActive(false);
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      className={`fixed flex-col items-center justify-center h-[90vh] w-full z-[98] ${
        menuIsActive ? "flex" : "hidden"
      }`}
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "closed"}
    >
      <p
        onClick={() => scrollToSection(Home)}
        className="text-[5vw] m-[5px] text-bg cursor-pointer"
      >
        Home
      </p>
      <p
        onClick={() => scrollToSection(About)}
        className="text-[5vw] m-[5px] text-bg"
      >
        About
      </p>
      <p
        onClick={() => scrollToSection(Work)}
        className="text-[5vw] m-[5px] text-bg"
      >
        Work
      </p>
      <p
        onClick={() => scrollToSection(Contact)}
        className="text-[5vw] m-[5px] text-bg"
      >
        Contact
      </p>
    </motion.div>
  );
}
