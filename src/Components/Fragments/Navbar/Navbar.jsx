import Navbaritems from "../../atoms/navbar"
import Toggle from "../../atoms/toggle"

const Navbar = () => {
  return (
    <div className="w-full relative flex items-center justify-center py-6 px-4">
      <Navbaritems/>
      <Toggle/>
    </div>
  )
}

export default Navbar
