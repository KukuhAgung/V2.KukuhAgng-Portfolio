import Button from "../atoms/button/index";
import { techimg, toolsimg } from "../../assets/data";
import Card from "../atoms/card/index";
import { useState, useEffect } from "react";

const Skills = () => {
  const [isTools, setIsTools] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleTech = () => {
    if (isTools) {
      setIsTools(false);
      setIsLoading(true);
    }
  };

  const handleTools = () => {
    if (!isTools) {
      setIsTools(true);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [isTools]);

  return (
    <section className="relative w-full flex h-[60vh] md:justify-center p-2">
      <div className="md:w-[812px] flex flex-col gap-y-6">
        <div data-scroll data-scroll-speed="0.05" className="w-full">
          <h1 className="text-[1.5rem] font-bold tracking-[1%]">SKILLS</h1>
        </div>
        <div
          data-scroll
          data-scroll-speed="0.05"
          className="w-full flex gap-x-4"
        >
          <div onClick={handleTech}>
            <Button
              backgroundColor="#444547"
              rounded="rounded-xl"
              margin="mt-0"
            >
              <p>Tech Stack</p>
            </Button>
          </div>
          <div onClick={handleTools}>
            <Button
              backgroundColor="#444547"
              rounded="rounded-xl"
              margin="mt-0"
            >
              <p>Tools</p>
            </Button>
          </div>
        </div>
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        ) : (
          <div
            data-scroll
            data-scroll-speed="0.1"
            className="flex flex-wrap gap-x-4 gap-y-4"
          >
            {isTools
              ? toolsimg.map((item) => (
                  <Card Loading={isLoading} key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                  </Card>
                ))
              : techimg.map((item) => (
                  <Card Loading={isLoading} key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                  </Card>
                ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
