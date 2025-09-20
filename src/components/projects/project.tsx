import freelance from '../../../public/freelance.png'
import wordle from '../../../public/wordle.png'
import bank from '../../../public/bank.png'
import expense from '../../../public/expense.png'
import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto my-10 mt-[10rem]">
      {/* Projects Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">Projects</h1>
        <p className="text-lg text-white opacity-80 max-w-3xl mx-auto">
           A collection of full-stack projects that highlight my skills in building
            scalable apps, solving problems, and creating smooth user experiences.
        </p>
      </div>

      <div className="bg-white/10 border border-white/20 rounded-lg p-4 text-white text-sm max-w-md mx-auto mb-20">
        <p className="font-semibold text-yellow-200 mb-1">Demo Credentials:</p>
        <p>
          <span className="font-medium">Username:</span> user@testing.com
        </p>
        <p>
          <span className="font-medium">Password:</span> User123!
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          {
            title: 'Wordle',
            image: wordle,
            description: 'A word-guessing game inspired by Wordle, built with HTML, CSS, and JavaScript.',
            liveLink: 'https://wordle-3sov.onrender.com',
            repoLink: 'https://github.com/seannxh/WORDLE',
          },
          {
            title: 'Financial Stone Inc.',
            image: bank,
            description: 'A full-stack banking application with React, Django, PostgreSQL, and AWS deployment.',
            liveLink: 'https://finacialstone.us/',
            repoLink: 'https://github.com/seannxh/BANKAPP',
          },
          {
            title: "Restaurant Website ",
            image: freelance,
            description: 'A modern website for a local restaurant with responsive design and dynamic content.',
            liveLink: 'https://ferestraunt-gvvc.onrender.com/home',
            repoLink: 'https://github.com/seannxh/DACFEWEBSITE',
          },
          {
            title: "Expense Tracker App",
            image: expense,
            description: "A full-stack app to track expenses with data visualization, and AWS deployment.",
            liveLink: 'http://expensefrontendreal.s3-website-us-east-1.amazonaws.com/login',
            repoLink: 'https://github.com/seannxh/ExpenseTrackerFE',
          }
        ].map((project, index) => (
          <div key={index} className="w-50 flex flex-col items-center text-center rounded-lg shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold text-purple-800 mb-4">{project.title}</h2>
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover p-6 rounded-lg mb-4" />
            <p className="text-white opacity-80 mb-4 p-6 mt-4">{project.description}</p>
            <div className="flex gap-5 mb-6">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition">
                Live
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
