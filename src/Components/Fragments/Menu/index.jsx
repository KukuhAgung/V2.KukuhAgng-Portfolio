import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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

export default function index({ menuIsActive, setMenuIsActive }) {
  return (
    <motion.div
      className={`fixed flex-col items-center justify-center h-[90vh] w-full z-[98] ${
        menuIsActive ? "flex" : "hidden"
      }`}
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "closed"}
    >
      <Link
        onClick={() => setMenuIsActive(false)}
        to="Home"
        smooth={true}
        spy={true}
        offset={-200}
        className="text-[5vw] m-[5px] text-bg cursor-pointer"
      >
        Home
      </Link>
      <Link
        onClick={() => setMenuIsActive(false)}
        to="About"
        smooth={true}
        spy={true}
        offset={-200}
        className="text-[5vw] m-[5px] text-bg"
      >
        About
      </Link>
      <Link
        onClick={() => setMenuIsActive(false)}
        to="Work"
        smooth={true}
        spy={true}
        offset={-200}
        className="text-[5vw] m-[5px] text-bg"
      >
        Work
      </Link>
      <Link
        onClick={() => setMenuIsActive(false)}
        to="Contact"
        smooth={true}
        spy={true}
        offset={-200}
        className="text-[5vw] m-[5px] text-bg"
      >
        Contact
      </Link>
    </motion.div>
  );
}
