import React from "react";
import { ProjectsParallax } from "../../atoms/slidingimage/Project";

export default function Projects() {
  return <ProjectsParallax products={products} />;
}
export const products = [
  {
    title: "Web Sembako Juragane",
    tech: "HTML, CSS, AlpineJS",
    link: "https://github.com/KukuhAgung",
    thumbnail: "/image/juragane.png",
  },
  {
    title: "Web Portfolio V1",
    tech: "ReactJS, Framer Motion, Tailwind CSS",
    link: "https://github.com/KukuhAgung",
    thumbnail: "/image/Web-V1.png",
  },
  {
    title: "Web Portfolio V1",
    tech: "ReactJS, Framer Motion, Tailwind CSS",
    link: "https://github.com/KukuhAgung",
    thumbnail: "/image/Web-V1.png",
  },

  {
    title: "Book Store",
    tech: "Laravel, JQUERY, Bootstrap",
    link: "https://github.com/KukuhAgung",
    thumbnail: "/image/bookstore.png",
  },
  {
    title: "C# Snake Windows Form Game",
    tech: "C#, MySQL",
    link: "https://github.com/KukuhAgung",
    thumbnail: "/image/Uler.png",
  },
  {
    title: "Shandy Putra English Club Web",
    tech: "HTML, CSS, JavaScript",
    link: "https://github.com/KukuhAgung",
    thumbnail: "/image/SPEC.png",
  },

  {
    title: "Task Management",
    tech: "HTML, TailwindCSS, JavaScript",
    link: "https://github.com/KukuhAgung",
    thumbnail: "/image/TaskManagement.png",
  },
  {
    title: "Youtube Clone",
    tech: "ReactJS, TypeScript, TailwindCSS,",
    link: "https://github.com/KukuhAgung",
    thumbnail: "/image/Youtube.png",
  },
  {
    title: "AI DOG DISEASE DETECTOR",
    tech: "PHP, Bootstrap, JavaScript, MySQL",
    link: "https://github.com/KukuhAgung",
    thumbnail: "/image/sistempakar.jpg",
  },
  {
    title: "Fetch FakeStore API",
    tech: "ReactJS, TypeScript, TailwindCSS, AXIOS",
    link: "https://github.com/KukuhAgung",
    thumbnail: "/image/Fake-Store.png",
  },
];
