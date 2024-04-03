import { useEffect, useState } from "react";
import Button from "../Components/atoms/button/index.jsx";
import { fadeIn } from "../utils/variants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showScrollTopButton && (
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute -bottom-10 md:bottom-0 right-0"
        >
          <Button margin="mt-0" backgroundColor="#444547">
            <Link to="Home" smooth={true} spy={true} offset={-200}>
              <p>⬆️</p>
            </Link>
          </Button>
        </motion.div>
      )}
    </>
  );
};

export default ScrollToTop;
