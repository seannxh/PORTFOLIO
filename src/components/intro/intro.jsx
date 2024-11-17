import profilepic from "../../assets/profile.png";
import hireme from "../../assets/getintouch.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section className="relative h-[calc(100vh-10rem)] w-full max-w-6xl mx-auto overflow-hidden flex items-center justify-between">
      {/* Text Content */}
      <div className="flex flex-col justify-center h-full p-8 text-3xl font-semibold">
        <span className="text-xl font-light">Welcome,</span>
        <div>
          <span className="text-purple-800">Sean's </span>
          <span>Portfolio</span>
        </div>
        <span className="text-2xl font-light">
          Software Developer <span className="mx-2">|</span>
          <span>Full Stack Developer</span>
        </span>
        <p className="mt-4 text-lg font-light">
          I welcome the opportunity to connect and explore how my skills
          <br />
          can contribute to your company's success!
        </p>
        <Link>
          <button className="flex items-center justify-center gap-2 px-8 py-2 mt-4 text-sm font-medium text-black transition-all duration-300 ease-in-out bg-white border-2 border-purple-800 rounded-full hover:bg-purple-800 hover:text-white hover:scale-105">
            <img src={hireme} alt="Contact Us" className="w-6" />
            Hire!
          </button>
        </Link>
      </div>
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={profilepic}
          alt="Profile"
          className="w-80 h-80 border-2 border-white-800 rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default Intro;
