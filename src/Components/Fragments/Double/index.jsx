"use client";
import styles from "./double.styles.module.scss";
import { useRef } from "react";

export default function Index({ projectss, reversed }) {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;
  let requestAnimationFrameId = null;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;
    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent += xPercentDelta * speed;
    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;
    if (firstImage.current) {
      firstImage.current.style.width = `${firstImagePercent}%`;
    }
    if (secondImage.current) {
      secondImage.current.style.width = `${secondImagePercent}%`;
    }

    if (Math.round(xPercent) === Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  return (
    <div className={styles.double} onMouseMove={manageMouseMove}>
      {projectss.length > 0 && (
        <>
          <div ref={firstImage} className={styles.imageContainer}>
            <div className={styles.stretchyWrapper}>
              <img
                src={`/image/${projectss[0]?.src}`}
                fill={true}
                alt={"image"}
              />
            </div>
            <div className={styles.body}>
              <h3>{projectss[0]?.name}</h3>
              <p>{projectss[0]?.description}</p>
              <p>{projectss[0]?.year}</p>
            </div>
          </div>

          <div ref={secondImage} className={styles.imageContainer}>
            <div className={styles.stretchyWrapper}>
              <img
                src={`/image/${projectss[1]?.src}`}
                fill={true}
                alt={"image"}
              />
            </div>
            <div className={styles.body}>
              <h3>{projectss[1]?.name}</h3>
              <p>{projectss[1]?.description}</p>
              <p>{projectss[1]?.year}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
