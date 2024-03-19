import React from "react";
import ProgrammingItems from "../../atoms/programming";

const Programming = () => {
  return (
    <div className="flex flex-wrap min-h-fit min-w-[90%] items-center justify-between gap-4">
      <h6 className="text-[34px] font-medium leading-[45px] tracking-[1%]">
        PROGRAMMING
      </h6>
      <ProgrammingItems />
    </div>
  );
};

export default Programming;
