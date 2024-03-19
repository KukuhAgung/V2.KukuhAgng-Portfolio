import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./SlidingImages.style.module.scss";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "Fake-Store.png",
  },
  {
    color: "#d6d7dc",
    src: "TaskManagement.png",
  },
  {
    color: "#e3e3e3",
    src: "sistempakar.jpg",
  },
  {
    color: "#d6d7dc",
    src: "Youtube.png",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "SPEC.png",
  },
  {
    color: "#e5e0e1",
    src: "bookstore.png",
  },
  {
    color: "#d7d4cf",
    src: "Web-V1.png",
  },
  {
    color: "#e1dad6",
    src: "juragane.png",
  },
];

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <img fill={true} alt={"image"} src={`/image/${project.src}`} />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <img fill={true} alt={"image"} src={`/image/${project.src}`} />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
