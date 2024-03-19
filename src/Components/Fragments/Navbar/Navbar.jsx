import { useState } from "react";
import Navbaritems from "../../atoms/navbar";
import HeroCursor from "../../context/HeroCursor";

const Navbar = () => {
  const [isNavbar, setIsNavbar] = useState(false);
  const [IsHidden, setIsHidden] = useState(false);
  return (
    <div className="w-full fixed flex items-center justify-center py-6 px-4 hover:text-black">
      <Navbaritems />
      {/* <Toggle/> */}
    </div>
  );
};

export default Navbar;
