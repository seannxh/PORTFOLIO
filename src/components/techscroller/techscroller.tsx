import React from 'react';
import './techscroller.css';

const TechScroller: React.FC = () => {
  const technologies: string[] = [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next.js",
    "mySQL",
    "TailwindCSS",
    "BootStrap",
    "PostgreSQL",
    "Python",
    "Power Bi",
    "Django",
    "Git",
    "GitHub",
    "TypeScript",
    "HTML5",
    "AWS Amplify",
    "CSS3",
    "JQuery",
  ];

  const techList = [...technologies, ...technologies, ...technologies];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center h-screen px-6 mx-8"
    >
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-4">
          Technologies I Use
        </h1>
        <p className="text-lg text-white opacity-80 max-w-3xl mx-auto">
          These are some of the tools and technologies I work with to build
          robust, scalable, and user-friendly applications.
        </p>
      </div>

      {/* Scroller */}
      <div className="tech-scroller-container">
        <div className="tech-scroller">
          {techList.map((tech: string, index: number) => (
            <div key={`${tech}-${index}`} className="tech-item">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechScroller;
