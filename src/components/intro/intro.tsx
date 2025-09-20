import profilepic from "../../assets/profile.png";
import hireme from "../../assets/getintouch.png";
import Typer from "../typewriter/typewriter";
import React from "react";

const Intro: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative min-h-screen w-full max-w-7xl mx-auto overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between p-8"
    >
      <div className="m-5 text-center md:text-left flex flex-col justify-center md:items-start items-center text-3xl font-semibold">
        <Typer
          phrases={["Welcome to my Portfolio!", "Turning My Dream Into Reality"]}
          speed={80}
          deleteSpeed={50}
          displayTime={2000}
        />
        <div>
          <span className="text-purple-800">Sean's </span>
          <span>Portfolio</span>
        </div>
        <span className="text-2xl font-light">
          Software Developer <span className="mx-2">|</span>
          <span>Full Stack Developer</span>
        </span>
        <p className="mt-4 text-lg font-light">
          Software Engineer
          <br />
          <p className="text-purple-800">U.S Citizen  | Full-time </p>
          <p> Open to Relocate</p>
          <br />
          <span>
            As you scroll, you’ll see my journey as a Software Engineer unfold.
          </span>
        </p>
        <a href="/snohwres.pdf" download="snohwres.pdf">
          <button className="flex items-center justify-center gap-2 px-8 py-2 mt-4 text-sm font-medium text-black transition-all duration-300 ease-in-out bg-white border-2 border-purple-800 rounded-full hover:bg-purple-800 hover:text-white hover:scale-105">
            <img src={hireme} alt="Contact Us" className="w-6" />
            Resume!
          </button>
        </a>
      </div>

      {/* Profile Image */}
      <div className="flex-shrink-0 mt-20 md:mt-16 mb-8 md:mb-0">
        <img
          src={profilepic}
          alt="Profile"
          className="w-48 h-48 md:w-80 md:h-80 border-2 border-white-800 rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default Intro;