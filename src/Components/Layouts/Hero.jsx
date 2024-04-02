import MoveText from "../Fragments/Hero/index";

function Hero({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      className="relative flex justify-center md:items-center"
    >
      <MoveText />
    </section>
  );
}

export default Hero;
