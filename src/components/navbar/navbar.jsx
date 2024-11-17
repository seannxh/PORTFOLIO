import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo3.png";
import contactus from "../../assets/contactus.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between h-20 w-full px-5 max-w-7xl mx-auto">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-20 h-auto" />

      {/* Navbar Links (Desktop) */}
      <div className="hidden md:flex space-x-4">
        <Link
          to="home"
          className="text-lg font-medium cursor-pointer hover:text-purple-800 transition"
        >
          Home
        </Link>
        <Link
          to="about"
          className="text-lg font-medium cursor-pointer hover:text-purple-800 transition"
        >
          About
        </Link>
        <Link
          to="projects"
          className="text-lg font-medium cursor-pointer hover:text-purple-800 transition"
        >
          Projects
        </Link>
        <Link
          to="education"
          className="text-lg font-medium cursor-pointer hover:text-purple-800 transition"
        >
          Education
        </Link>
        <Link
          to="skills"
          className="text-lg font-medium cursor-pointer hover:text-purple-800 transition"
        >
          Skills
        </Link>
      </div>

      {/* Contact Button */}
      <button className="hidden md:flex items-center justify-center gap-2 bg-white text-black border-2 border-purple-800 rounded-full px-4 py-2 text-lg font-medium transition-all hover:bg-purple-800 hover:text-white transform hover:scale-105">
        <img src={contactus} alt="Contact" className="w-8 h-auto" />
        Contact Me
      </button>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-purple-800 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 rounded-lg p-5 w-3/4">
          <Link
            to="home"
            className="block text-lg font-medium text-center cursor-pointer hover:text-purple-800 transition my-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            className="block text-lg font-medium text-center cursor-pointer hover:text-purple-800 transition my-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="projects"
            className="block text-lg font-medium text-center cursor-pointer hover:text-purple-800 transition my-2"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="education"
            className="block text-lg font-medium text-center cursor-pointer hover:text-purple-800 transition my-2"
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>
          <Link
            to="skills"
            className="block text-lg font-medium text-center cursor-pointer hover:text-purple-800 transition my-2"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
