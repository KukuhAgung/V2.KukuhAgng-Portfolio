import { useEffect, useState } from "react";
import Button from "../Components/atoms/button/index.jsx";
import { fadeIn } from "../utils/variants";
import { motion } from "framer-motion";

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

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollTopButton && (
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          onClick={scrollTop}
          className="absolute bottom-0 right-0"
        >
          <Button margin="mt-0" backgroundColor="#444547">
            <p>⬆️</p>
          </Button>
        </motion.div>
      )}
    </>
  );
};

export default ScrollToTop;
