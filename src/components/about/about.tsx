import React from "react";
import drive from "../../assets/drive.jpg";
import goal from "../../assets/goals.png";
import vision from "../../assets/vision.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-14 px-6 max-w-6xl mx-auto my-10">
      {/* About Title */}
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">
        About Me
      </h1>

      {/* About Description */}
      <p className="text-lg text-white opacity-80 text-center leading-relaxed max-w-3xl mx-auto mb-12">
        I am a versatile Software Engineer with experience in full-stack development, AI model evaluation, and cloud-based deployments. I have built and deployed secure, scalable applications using React, Spring Boot, Django, Node.js, and AWS, while applying CI/CD pipelines and strong database design with PostgreSQL, MySQL, and MongoDB. My background includes evaluating and debugging AI-generated code, enhancing reliability, and improving user experiences. I bring adaptability, a collaborative mindset, and a drive to keep learning and building impactful solutions.
      </p>

      {/* About Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[ 
          {
            title: "My Vision as a Software Engineer",
            img: vision,
            alt: "Vision",
            description: "Build cool software that solves problems, makes life easier, and brings ideas to life!"
          },
          {
            title: "What Drives Me",
            img: drive,
            alt: "Drive",
            description: "I love learning, solving tough bugs, and pushing tech further—debugging wins feel amazing!"
          },
          {
            title: "Why I Picked Software Engineering",
            img: goal,
            alt: "Why Software Engineering",
            description: "Technology especially computers hooked me since I was 8—I enjoy turning ideas into reality through code."
          }

        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center border-2 border-purple-800 p-6 rounded-lg shadow-lg">
            <img
              src={item.img}
              alt={item.alt}
              className="w-20 h-20 rounded-full border-2 border-purple-800 mb-4"
            />
            <h2 className="text-xl font-semibold text-purple-800 mb-2">
              {item.title}
            </h2>
            <p className="text-white opacity-80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
