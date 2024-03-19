import React, { useEffect, useRef } from "react";
import { gsap, TweenMax } from "gsap";

export default function MagneticAnimation({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magnetic.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
      TweenMax.to(magnetic.current, 0.5, { scale: 1.1 }); // Scale up when mouse moves
    });
    magnetic.current.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
      TweenMax.to(magnetic.current, 0.5, { scale: 1 }); // Reset scale when mouse leaves
    });
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
