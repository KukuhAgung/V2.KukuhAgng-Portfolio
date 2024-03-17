import React from "react";
import ProgrammingItems from "../../atoms/programming";

const Programming = () => {
  return (
    <div className="relative w-[110%] md:justify-center flex flex-wrap gap-4 py-4 border-y-stroke border">
      <h6 className="text-[34px] w-[440px] font-medium leading-[45px] tracking-[1%]">
        PROGRAMMING
      </h6>
      <ProgrammingItems />
    </div>
  );
};

export default Programming;
