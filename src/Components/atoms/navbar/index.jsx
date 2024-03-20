import Magnetic from "../magnetic/index.jsx";

function Navbaritems() {
  return (
    <div className="w-[620px] mx-auto flex items-center md:justify-center gap-4">
      <Magnetic className={`list-none no-underline text-primary`}>
        <a
          onClick={() => {
            event;
          }}
          href="#about"
        >
          ( <span className="text-[13px]">ABOUT</span> )
        </a>
      </Magnetic>
      <Magnetic className={`list-none no-underline text-primary`}>
        <a href="">
          ( <span className="text-[13px]">WORK</span> )
        </a>
      </Magnetic>
      <Magnetic className={`list-none no-underline text-primary`}>
        <a href="">
          ( <span className="text-[13px]">CONTACT</span> )
        </a>
      </Magnetic>
    </div>
  );
}

export default Navbaritems;
