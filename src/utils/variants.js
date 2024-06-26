export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const scaleAnimation = {
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
