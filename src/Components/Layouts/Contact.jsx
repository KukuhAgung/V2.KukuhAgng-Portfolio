import styles from "../../utils/style.module.scss";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok, FaArrowUp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { ScrollToTop } from "../../utils/ScrollToTop";

function Contact({ sectionRef, Home, About, Work }) {
  const [localTime, setLocalTime] = useState("");
  const [scrollY, setScrollY] = useState(window.scrollY);

  const backToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const intervalId = setInterval(() => {
      const now = new Date();
      const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      };
      const formattedTime = now.toLocaleString(undefined, options);
      setLocalTime(formattedTime);
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
    };
  }, []);

  console.log(scrollY);
  return (
    <section
      ref={sectionRef}
      className="w-full flex items-center gap-y-10 h-fit md:h-[80vh] p-2 my-10"
    >
      <div className="w-full flex flex-col gap-y-10 my-10">
        <div className={styles.header}>
          <h1 className="text-center text-[4rem] font-medium tracking-[1%]">
            GET IN TOUCH
          </h1>
          <span></span>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-y-6 ">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-[20%] flex flex-col gap-y-4 border-b border-second pb-6"
          >
            <h6
              onClick={() => backToSection(Home)}
              className="text-[20px] font-medium tracking-[1%] cursor-pointer"
            >
              HOME
            </h6>
            <h6
              onClick={() => backToSection(About)}
              className="text-[20px] font-medium tracking-[1%] cursor-pointer"
            >
              ABOUT
            </h6>
            <h6
              onClick={() => backToSection(Work)}
              className="text-[20px] font-medium tracking-[1%] cursor-pointer"
            >
              WORK
            </h6>
            <h6 className="text-[20px] font-medium tracking-[1%] cursor-pointer">
              CONTACT
            </h6>
          </motion.div>
          <div className="w-full md:w-[40%] flex flex-wrap md:flex-nowrap">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full flex flex-col gap-y-6 border-b border-second pb-6"
            >
              <a
                href="https://github.com/KukuhAgung"
                className="flex items-center gap-x-4"
              >
                <FaSquareGithub className="w-[30px] h-[30px]" />
                <h6 className="text-[20px] font-medium tracking-[1%]">
                  Github
                </h6>
              </a>
              <a
                href="https://www.instagram.com/kukuhagng_/"
                className="flex items-center gap-x-4"
              >
                <FaSquareInstagram className="w-[30px] h-[30px]" />
                <h6 className="text-[20px] font-medium tracking-[1%]">
                  Instagram
                </h6>
              </a>
              <a
                href="https://www.linkedin.com/in/kukuhagung/"
                className="flex items-center gap-x-4"
              >
                <IoLogoLinkedin className="w-[30px] h-[30px]" />
                <h6 className="text-[20px] font-medium tracking-[1%]">
                  LinkedIn
                </h6>
              </a>
              <a
                href="https://www.tiktok.com/@kukuhagungg"
                className="flex items-center gap-x-4"
              >
                <FaTiktok className="w-[30px] h-[22px]" />
                <h6 className="text-[20px] font-medium tracking-[1%]">
                  TikTok
                </h6>
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.07)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full flex flex-col gap-y-1 border-b border-second pb-6"
            >
              <div>
                <div className="w-full flex items-center gap-x-4">
                  <MdEmail className="w-[30px] h-[40px]" />
                  <h6 className="text-[20px] font-medium tracking-[1%]">
                    Email
                  </h6>
                </div>
                <h6 className="text-[16px] font-medium tracking-[1%] ml-12">
                  ff.agri2567@gmail.com
                </h6>
              </div>
              <div>
                <div className="flex items-center gap-x-4">
                  <MdLocationPin className="w-[30px] h-[40px]" />
                  <h6 className="text-[20px] font-medium tracking-[1%]">
                    Location
                  </h6>
                </div>
                <h6 className="text-[16px] font-medium tracking-[1%] ml-12">
                  Banyumas, East Java, Indonesia
                </h6>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="relative flex flex-wrap md:flex-row-reverse">
          <ScrollToTop />
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col w-full md:w-[60%]"
          >
            <h6 className="text-[22px] font-medium tracking-[1%]">
              LOCAL TIME
            </h6>
            <h6 className="text-[22px] font-medium tracking-[1%]">
              {localTime}
            </h6>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col w-full md:w-[40%]"
          >
            <h1 className="text-[40px] font-medium tracking-[1%]">
              Copyright © 2024.
            </h1>
            <h1 className="text-[48px] font-medium tracking-[1%]">
              Kukuh Agung
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
