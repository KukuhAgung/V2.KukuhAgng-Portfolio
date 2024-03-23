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

export default function index({ menuIsActive }) {
  return (
    <motion.div
      className={`fixed flex-col items-center justify-center h-[90vh] w-full z-[98] ${
        menuIsActive ? "flex" : "hidden"
      }`}
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "closed"}
    >
      <p className="text-[5vw] m-[5px] text-bg">Home</p>
      <p className="text-[5vw] m-[5px] text-bg">About</p>
      <p className="text-[5vw] m-[5px] text-bg">Contact</p>
    </motion.div>
  );
}
