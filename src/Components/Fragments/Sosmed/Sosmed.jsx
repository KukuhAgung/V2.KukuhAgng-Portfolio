import React from "react";
import Magnetic from "../../atoms/magnetic/index.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/variants.js";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function Sosmed() {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="absolute hidden top-[5%] left-20 md:flex flex-col gap-12  justify-center items-center h-screen w-[50px]"
    >
      <Magnetic>
        <a href="https://github.com/KukuhAgung">
          <FaSquareGithub className="w-[40px] h-[26px] cursor-pointer" />
        </a>
      </Magnetic>
      <Magnetic>
        <a href="https://www.instagram.com/kukuhagng_/">
          <FaSquareInstagram className="w-[40px] h-[26px] cursor-pointer" />
        </a>
      </Magnetic>
      <Magnetic>
        <a href="https://www.linkedin.com/in/kukuhagung">
          <IoLogoLinkedin className="w-[40px] h-[26px] cursor-pointer" />
        </a>
      </Magnetic>
      <Magnetic>
        <a href="https://www.tiktok.com/@kukuhagungg">
          <FaTiktok className="w-[40px] h-[23px] cursor-pointer" />
        </a>
      </Magnetic>
    </motion.div>
  );
}

export default Sosmed;
