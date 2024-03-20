import { useState } from "react";
import Navbaritems from "../../atoms/navbar";

const Navbar = () => {
  return (
    <div className="z-10 w-full fixed flex items-center justify-center py-6 px-4 hover:text-black">
      <Navbaritems/>
      {/* <Toggle/> */}
    </div>
  );
};

export default Navbar;
