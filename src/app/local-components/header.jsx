import Hero from "./hero";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="bg-blue-100">
      <Navbar />
      <div>
        <Hero />
      </div>
    </div>
  )
}

export default Header;