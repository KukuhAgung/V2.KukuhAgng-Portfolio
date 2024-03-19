import Magnetic from "../magnetic/index.jsx";

const Navbaritems = () => {
  return (
    <div className="w-[620px] mx-auto flex items-center md:justify-center gap-4">
      <Magnetic className={`list-none no-underline text-[14px] text-primary`}>
        <a href="">ABOUT</a>
      </Magnetic>
      <Magnetic className={`list-none no-underline text-[14px] text-primary`}>
        <a href="">WORK</a>
      </Magnetic>
      <Magnetic className={`list-none no-underline text-[14px] text-primary`}>
        <a href="">CONTACT</a>
      </Magnetic>
    </div>
  );
};

export default Navbaritems;
