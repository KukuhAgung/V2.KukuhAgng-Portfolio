import { useState } from "react";
import Project from "../atoms/project";
import Modal from "../atoms/modal/index";
import Button from "../atoms/button/index";
import Projects from "../Fragments/Projects/index";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";

const projects = [
  {
    title: "AI DOG DISEASE DETECTOR",
    src: "sistempakar.jpg",
    link: "KukuhAgung/SistemPakar",
    color: "#292D32",
  },
  {
    title: "BOOKSTORE WEBSITE",
    src: "bookstore.png",
    link: "KukuhAgung/MK3-PTS",
    color: "#e5e5e5",
  },
  {
    title: "Web Portfolio V1",
    src: "Web-V1.png",
    link: "KukuhAgung/Portfolio-KukuhAgung",
    color: "#292D32",
  },
  {
    title: "NEWS WEBSITE + OPEN API",
    src: "news.png",
    link: "KukuhAgung/NewsIN-Website",
    color: "#292D32",
  },
];
export default function ProjectPage() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section id="Work">
      <h6
        data-scroll
        data-scroll-speed="0.1"
        className="my-10 text-[54px] w-[440px] font-medium leading-[45px] tracking-[1%]"
      >
        PROJECT
      </h6>
      <section className="min-h-fit flex flex-col items-center justify-center">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full flex flex-col"
        >
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
                link={project.link}
              />
            );
          })}
        </motion.div>
        <Modal modal={modal} projects={projects} />
        <Button>
          <a href="https://github.com/KukuhAgung/">
            <p>More Project</p>
          </a>
        </Button>
      </section>
    </section>
  );
}
