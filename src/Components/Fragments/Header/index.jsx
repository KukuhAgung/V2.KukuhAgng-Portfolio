import { motion } from "framer-motion";
import Magnetic from "../../atoms/magnetic";
import styles from "./style.module.scss";

const scaleAnimation = {
  initial: { scale: 0, x: "0%", y: "0%" },
  enter: {
    scale: 1,
    x: "0%",
    y: "0%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "0%",
    y: "0%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function index({
  menuIsActive,
  setMenuIsActive,
  preloaderDone,
}) {
  return (
    <div className={styles.header}>
      <Magnetic>
        <motion.div
          variants={scaleAnimation}
          initial={"initial"}
          animate={preloaderDone ? "enter" : "closed"}
          onClick={() => {
            setMenuIsActive(!menuIsActive);
          }}
          className={`${styles.burger} ${
            menuIsActive ? styles.burgerActive : ""
          }`}
        ></motion.div>
      </Magnetic>
    </div>
  );
}
