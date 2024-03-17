import React from "react";
import FrameworkItems from "../../atoms/framework";

const Framework = () => {
  return (
    <div className="relative w-[110%] md:justify-center border border-t-0 border-stroke flex gap-4 flex-wrap py-4">
      <h6 className="text-[34px] w-[325px] font-medium leading-[45px] tracking-[1%]">
        FRAMEWORK
      </h6>
      <FrameworkItems />
    </div>
  );
};

export default Framework;
