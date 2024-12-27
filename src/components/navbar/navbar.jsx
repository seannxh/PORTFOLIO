import { useState } from "react";
import { Link } from "react-scroll";
import contactus from "../../assets/contactus.png";
import logo from "../../assets/vision.jpeg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between h-20 w-full px-5 max-w-7xl mx-auto shadow-md">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-20 h-auto" />

      {/* Navbar Links (Desktop) */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="intro"
          smooth={true}
          spy={true}
          offset={-80}
          duration={500}
          activeClass="border-b-4 border-purple-800 text-purple-800"
          className="text-lg font-medium cursor-pointer transition hover:text-purple-800"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          spy={true}
          offset={-80}
          duration={500}
          activeClass="border-b-4 border-purple-800 text-purple-800"
          className="text-lg font-medium cursor-pointer transition hover:text-purple-800"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          spy={true}
          offset={-80}
          duration={500}
          activeClass="border-b-4 border-purple-800 text-purple-800"
          className="text-lg font-medium cursor-pointer transition hover:text-purple-800"
        >
          Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          spy={true}
          offset={-80}
          duration={500}
          activeClass="border-b-4 border-purple-800 text-purple-800"
          className="text-lg font-medium cursor-pointer transition hover:text-purple-800"
        >
          Skills
        </Link>
      </div>

      {/* Contact Button */}
      <a 
        href="https://mail.google.com/mail/?view=cm&fs=1&to=nohsean6@gmail.com&su=Inquiry&body=Hello%20Sean,"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button className="hidden md:flex items-center justify-center gap-2 bg-white text-black border-2 border-purple-800 rounded-full px-4 py-2 text-lg font-medium transition-all hover:bg-purple-800 hover:text-white transform hover:scale-105">
          <img src={contactus} alt="Contact" className="w-8 h-auto" />
          Contact Me
        </button>
      </a>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden relative">
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

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-12 right-0 w-48 bg-grey-800 shadow-lg rounded-lg py-2 z-40">
            <Link
              to="intro"
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              className="block px-4 py-2 text-white opacity-80 hover:bg-purple-100 hover:text-purple-800 cursor-pointer bg-purple-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              className="block px-4 py-2 text-white opacity-80 hover:bg-purple-100 hover:text-purple-800 cursor-pointer bg-purple-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              className="block px-4 py-2 text-white opacity-80 hover:bg-purple-100 hover:text-purple-800 cursor-pointer bg-purple-900"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              className="block px-4 py-2 text-white opacity-80 hover:bg-purple-100 hover:text-purple-800 cursor-pointer bg-purple-900"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
