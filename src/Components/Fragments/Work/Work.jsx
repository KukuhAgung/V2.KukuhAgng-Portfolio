import Programming from "../ProgrammingLanguage/Programming";
import Framework from "../Framework/Framework";

const Work = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 md:items-center">
        <div className="min-w-[90%] py-6">
          <h1 className="text-[18px] font-bold tracking-[1%]">WHAT I DO</h1>
        </div>
        <Programming/>
        <Framework/>
      </div>
    </>
  );
};

export default Work;
