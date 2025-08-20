import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { ScrollToTop } from "../../utils/ScrollToTop";
import { Link } from "react-scroll";

function Contact() {
  const [localTime, setLocalTime] = useState("");

  const variant = {
    hidden: {
      opacity: 0,
      width: 0,
    },
    visible: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 1,
        easeInOut,
        delay: 0.5,
      },
    },
  };

  useEffect(() => {
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

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="Contact"
      className="w-full flex items-center gap-y-10 h-fit md:h-[80vh] p-2 my-10"
    >
      <div className="w-full flex flex-col gap-y-10 my-10">
        <div className="relative cursor-pointer">
          <h1 className="text-center text-[4rem] font-medium tracking-[1%]">
            GET IN TOUCH
          </h1>
        </div>
        <motion.div className="relative flex flex-wrap md:flex-nowrap gap-y-6 my-5">
          <motion.span
            variants={variant}
            initial="hidden"
            whileInView="visible"
            className="absolute bottom-0 h-[1px] bg-second"
          ></motion.span>
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-[20%] flex flex-col gap-y-4 pb-6"
          >
            <Link
              to="Home"
              smooth={true}
              spy={true}
              offset={-200}
              className="text-[20px] font-medium tracking-[1%] cursor-pointer"
            >
              HOME
            </Link>
            <Link
              to="About"
              smooth={true}
              spy={true}
              offset={-200}
              className="text-[20px] font-medium tracking-[1%] cursor-pointer"
            >
              ABOUT
            </Link>
            <Link
              to="Work"
              smooth={true}
              spy={true}
              offset={-200}
              className="text-[20px] font-medium tracking-[1%] cursor-pointer"
            >
              WORK
            </Link>
            <Link
              to="Contact"
              smooth={true}
              spy={true}
              offset={-200}
              className="text-[20px] font-medium tracking-[1%] cursor-pointer"
            >
              CONTACT
            </Link>
          </motion.div>
          <div className="w-full md:w-[40%] flex flex-wrap md:flex-nowrap">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full flex flex-col gap-y-4 pb-6"
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
              className="w-full flex flex-col gap-y-4  pb-6"
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
        </motion.div>
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
