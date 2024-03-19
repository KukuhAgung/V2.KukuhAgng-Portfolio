import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export default function Header({ header }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.15"],
  });

  const words = header.split(" ");
  return (
    <h1
      ref={container}
      className="flex flex-wrap text-[40px] md:text-[50px] font-extrabold leading-[70px] tracking-[1%] max-w-[800px]"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </h1>
  );
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="relative mr-[12px] mt-[12px]">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute opacity-[20%]">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
