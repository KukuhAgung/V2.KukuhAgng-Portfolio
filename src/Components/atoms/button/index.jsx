/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef } from "react";
import styles from "./button.style.module.scss";
import gsap from "gsap";
import Magnetic from "../magnetic/index.jsx";

export default function index({
  children,
  backgroundColor = "#faefae",
  rounded = "rounded-full",
  margin = "mt-10",
  ...attributes
}) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div className="flex items-center justify-center">
        <div
          className={`${rounded} cursor-pointer relative flex items-center justify-center w-[10rem] md:w-[12rem] h-[3rem] ${styles.roundedButton} ${margin}`}
          style={{ overflow: "hidden" }}
          onMouseEnter={() => {
            manageMouseEnter();
          }}
          onMouseLeave={() => {
            manageMouseLeave();
          }}
          {...attributes}
        >
          {children}
          <div
            ref={circle}
            style={{ backgroundColor }}
            className={styles.circle}
          ></div>
        </div>
      </div>
    </Magnetic>
  );
}
