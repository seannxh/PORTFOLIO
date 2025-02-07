import drive from "../../assets/drive.jpg"
import goal from "../../assets/goals.png"
import vision from "../../assets/vision.jpg"


const About = () => {
    
    return (
      <section id="about" className="py-14 px-6 max-w-6xl mx-auto my-10">
        {/* About Title */}
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">
          About Me
        </h1>
  
        {/* About Description */}
        <p className="text-lg text-white opacity-80 text-center leading-relaxed max-w-3xl mx-auto mb-12">
        I am a passionate Software Engineer and Full Stack Developer with expertise in both front-end and back-end development. On the front end, I craft intuitive, responsive user interfaces using modern frameworks like React, Next.js, HTML, CSS, and Tailwind, ensuring seamless user experiences through clean, efficient code. On the back end, I build robust, scalable server-side applications with Node.js, Express, and MongoDB, focusing on performance, security, and maintainability. I am proficient in JavaScript, Git, GitLab, and MySQL, and I leverage tools like PostgreSQL and Power BI for data-driven insights. I am currently expanding my expertise by developing skills in Java, and AWS Solutions Architect Associate (SAA), equipping me to build even more versatile and high-performing applications.
        </p>
  
        {/* About Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* My Vision */}
          <div className="flex flex-col items-center text-center border-2 border-purple-800 p-6 rounded-lg shadow-lg">
            <img
              src={vision}
              alt="Vision"
              className="w-20 h-20 rounded-full border-2 border-purple-800 mb-4"
            />
            <h2 className="text-xl font-semibold text-purple-800 mb-2">
              My Vision as a Software Engineer
            </h2>
            <p className="text-white opacity-80">
              I aspire to create impactful software solutions that drive
              innovation, enhance user experiences, and solve real-world problems
              through technology. I want to see my creation come to life!
            </p>
          </div>
  
          {/* What Drives Me */}
          <div className="flex flex-col items-center text-center border-2 border-purple-800 p-6 rounded-lg shadow-lg">
            <img
              src={drive}
              alt="Drive"
              className="w-20 h-20 rounded-full border-2 border-purple-800 mb-4"
            />
            <h2 className="text-xl font-semibold text-purple-800 mb-2">
              What Drives Me
            </h2>
            <p className="text-white opacity-80">
              I am driven by a passion for learning, problem-solving, and creating
              technology that makes a difference, inspiring me to continuously
              improve and innovate. Nothing feels better than debugging after hours of brickwall!
            </p>
          </div>
  
          {/* Why I Picked Software Engineering */}
          <div className="flex flex-col items-center text-center border-2 border-purple-800 p-6 rounded-lg shadow-lg">
            <img
              src={goal}
              alt="Why Software Engineering"
              className="w-20 h-20 rounded-full border-2 border-purple-800 mb-4"
            />
            <h2 className="text-xl font-semibold text-purple-800 mb-2">
              Why I Picked Software Engineering
            </h2>
            <p className="text-white opacity-80">
              My fascination with technology and its potential to transform lives
              led me to pursue software engineering. I love the challenge of
              turning ideas into reality through code. This has been my goal since I was 8!
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  