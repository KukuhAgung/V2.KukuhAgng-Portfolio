"use client";

import { useState } from "react";
import Project from "../atoms/project";
import Modal from "../atoms/modal/index";

const projects = [
  {
    title: "AI DOG DISEASE DETECTED",

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
  {
    title: "TaskManagement",

    src: "TaskManagement.png",

    color: "#e5e5e5",
  },
  {
    title: "Ecommerce + FakeStore API",

    src: "Fake-Store.png",

    color: "#292D32",
  },
  {
    title: "Youtube",

    src: "Youtube.png",

    color: "#e5e5e5",
  },
];
export default function ProjectPage() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <h6 className="mt-20 text-[54px] w-[440px] font-medium leading-[45px] tracking-[1%]">
        PROJECT
      </h6>
      <main className="flex min-h-fit items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
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
      </main>
    </>
  );
}
