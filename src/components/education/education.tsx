import React from 'react';


interface Education {
  school: string;
  degree: string;
  period: string;
}

const EducationSection: React.FC = () => {
  const educationList: Education[] = [
    {
      school: "General Assembly",
      degree: "Software Engineering Immersive",
      period: "Graduated",
    }
    // Add more education entries as needed
  ];

  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20 px-6 mx-8 my-8"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-purple-800 mb-4">
          Education & Expertise
        </h1>
        <p className="text-lg text-white opacity-80 max-w-3xl mx-auto">
          As an innovative Full Stack Developer, I bridge the gap between creative design and technical implementation. 
          My expertise spans the entire development spectrum – from crafting pixel-perfect, responsive frontends with React 
          and Next.js to architecting robust backend solutions using Node.js and Express. I excel in building scalable 
          applications that leverage modern technologies like MongoDB, PostgreSQL, and AWS cloud services.
        </p>
        <p className="text-lg text-white opacity-80 max-w-3xl mx-auto mt-4">
          While my journey began with self-directed learning and hands-on project experience, I enhanced my formal education 
          through General Assembly's Software Engineering Immersive program. This intensive training solidified my foundation 
          in software engineering principles and modern development practices. Currently, I'm advancing my expertise in Java 
          development and pursuing AWS Solutions Architect certification, demonstrating my commitment to continuous growth in 
          this ever-evolving field.
        </p>
      </div>

      {/* Education Cards */}
      <div className="grid gap-8 w-full max-w-4xl">
        {educationList.map((edu, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              {edu.school}
            </h3>
            <h4 className="text-lg text-white mb-1">
              {edu.degree}
            </h4>
            <p className="text-purple-300 text-sm mb-3">
              {edu.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection; 