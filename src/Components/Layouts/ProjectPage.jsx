"use client";

import { useState } from "react";
import Project from "../atoms/project";
import Modal from "../atoms/modal/index";
import Button from "../atoms/button/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { useEffect } from "react";

const projects = [
  {
    title: "AI DOG DISEASE DETECTOR",

    src: "sistempakar.jpg",

    color: "#292D32",
  },
  {
    title: "BOOKSTORE WEBSITE",

    src: "bookstore.png",

    color: "#e5e5e5",
  },
  {
    title: "Web Portfolio V1",

    src: "Web-V1.png",

    color: "#292D32",
  },
];
export default function ProjectPage() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main>
      <h6 className="my-20 text-[54px] w-[440px] font-medium leading-[45px] tracking-[1%]">
        PROJECT
      </h6>
      <section className="min-h-fit flex flex-col items-center justify-center">
        <div className="w-full flex flex-col">
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </section>
      <Button>
        <p>More Project</p>
      </Button>
    </main>
  );
}
