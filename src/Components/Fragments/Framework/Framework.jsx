import React from "react";
import FrameworkItems from "../../atoms/framework";

const Framework = () => {
  return (
    <div className="flex flex-wrap min-h-fit min-w-[90%] items-center justify-between gap-4">
      <h6 className="text-[34px] font-medium leading-[45px] tracking-[1%]">
        FRAMEWORK
      </h6>
      <FrameworkItems />
    </div>
  );
};

export default Framework;
