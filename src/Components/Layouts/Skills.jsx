import React from "react";
import Paragraph from "../atoms/paragraph/Paragraph";
import Button from "../atoms/button/index";
import Magnetic from "../atoms/magnetic";

const paragraph = "There is a some programming languages & tools that i can.";
const Skills = () => {
  return (
    <div className="relative w-full flex h-screen md:justify-center">
      <div className="md:w-[80%] py-6">
        <div data-scroll data-scroll-speed="0.2" className="w-full p-2">
          <h1 className="text-[2rem] font-bold tracking-[1%]">What I Do.</h1>
        </div>
        <div data-scroll data-scroll-speed="0.2" className="w-full p-2">
          <Paragraph paragraph={paragraph} key={1} />
        </div>
        <div data-scroll data-scroll-speed="0.2" className="p-2 w-fit mt-4">
          <Magnetic>
            <a
              href=""
              className="px-10 py-6 rounded-full bg-gradient-to-r from-bg via-grad2 to-grad1 shadow-lg font-medium"
            >
              Go to my github
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default Skills;
