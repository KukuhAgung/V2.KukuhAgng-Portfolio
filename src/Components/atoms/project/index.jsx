"use client";
import React from "react";
import styles from "./style.module.css";

export default function index({ index, title, setModal }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h6 className="text-[34px] w-[440px] font-medium leading-[45px] tracking-[1%]">
        {title}
      </h6>
      <p>Design & Development</p>
    </div>
  );
}
