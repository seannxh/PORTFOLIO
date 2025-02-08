import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/vision.jpeg";
import { 
  logoGithub, 
  mailOutline, 
  logoLinkedin 
} from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import React from "react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between h-20 w-full px-5 max-w-7xl mx-auto shadow-md">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-20 h-auto" />

      {/* Navbar Links (Desktop) */}
      <div className="hidden md:flex justify-center items-center space-x-6 w-full">
        {['intro', 'about', 'projects', 'skills'].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            spy={true}
            offset={-80}
            duration={500}
            activeClass="border-b-4 border-purple-800 text-purple-800"
            className="text-lg font-medium cursor-pointer transition hover:text-purple-800"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex justify-center items-center gap-4 md:gap-8 mt-4 md:mt-0">
        <a href="https://github.com/seannxh" className="text-3xl md:text-4xl hover:text-gray-400">
          <IonIcon icon={logoGithub} />
        </a>
        <a href="mailto:nohsean6@gmail.com" className="text-3xl md:text-4xl hover:text-gray-400">
          <IonIcon icon={mailOutline} />
        </a>
        <a href="https://www.linkedin.com/in/seannxh/" className="text-3xl md:text-4xl hover:text-gray-400">
          <IonIcon icon={logoLinkedin} />
        </a>
      </div>

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
            {['intro', 'about', 'projects', 'skills'].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                className="block px-4 py-2 text-white opacity-80 hover:bg-purple-100 hover:text-purple-800 cursor-pointer bg-purple-900"
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;