import freelance from '../../../public/freelance.png'
import wordle from '../../../public/wordle.png'
import bank from '../../../public/bank.png'
const Projects = () => {
    return (
      <section
        id="projects"
        className="py-16 px-6 max-w-6xl mx-auto my-10 mt-[10rem]"
      >
        {/* Projects Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Projects
          </h1>
          <p className="text-lg text-white opacity-80 max-w-3xl mx-auto">
            Here are some of the exciting projects I've worked on, showcasing my
            expertise in full-stack development, problem-solving, and creating
            impactful user experiences. Each project demonstrates my ability to
            turn ideas into functional and scalable applications.
          </p>
          <h5 className="text-sm text-white opacity-80 max-w-3xl mx-auto mt-3">
            Ps: The Website's are deployed on Render so it might take couple minutes to load!
            <br/>
            Thank you for your patience
          </h5>
        </div>
  
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <div className="flex flex-col items-center text-center rounded-lg p-6 shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold text-purple-800 mb-4">
              Wordle
            </h2>
            <img
                src={wordle}
                alt="Wordle Project"
                className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className ="text-md font-bold text-purple-500">5 Letter Word Guesing Game!</h4>
            <p className="text-white opacity-80 mb-4 mt-4">
                A word-guessing game inspired by Wordle, built with HTML, CSS, and JavaScript. 
                This project showcases my ability to create interactive, dynamic front-end 
                applications, including real-time word validation, a responsive grid layout, 
                and engaging game mechanics.
            </p>
            <div className="flex gap-4">
            {/* Live Site Button */}
            <a
                href="https://wordle-3sov.onrender.com" // Replace with your live site URL
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition"
            >
                Live Site
            </a>

            {/* GitHub Repo Button */}
            <a
                href="https://github.com/seannxh/WORDLE" // Replace with your GitHub repo URL
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition"
            >
                GitHub Repo
            </a>
            </div>
          </div>
  
          {/* Project 2 */}
          <div className="flex flex-col items-center text-center rounded-lg p-6 shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold text-purple-800 mb-4">
              Finacial Stone Inc.
            </h2>
            <img
            src={bank}
            alt="Wordle Project"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
            <h4 className ="text-md font-bold text-purple-500">A Full On Banking Website!</h4>
            <p className="text-white opacity-80 mb-4 mt-4">
               A full-stack banking application built with React for the frontend, Python Django for the backend, and PostgreSQL as the database. It features user authentication, account management, and secure financial transactions. Users can view detailed account summaries, track transaction history, and perform transfers between accounts. The application also includes intuitive UI elements, ensuring a seamless banking experience for managing personal and business finances efficiently.
            </p>
            <div className="flex gap-4">
            {/* Live Site Button */}
            <a
                href="https://main.d2y11439p4s8xr.amplifyapp.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition"
            >
                Live Site
            </a>

            {/* GitHub Repo Button */}
            <a
                href="https://github.com/seannxh/BANKAPP"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition"
            >
                GitHub Repo
            </a>
            </div>
          </div>
  
          {/* Project 3 */}
          <div className="flex flex-col items-center text-center rounded-lg p-6 shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold text-purple-800 mb-4">
              Freelance
            </h2>
            <img
            src={freelance}
            alt="Wordle Project"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
            <h4 className ="text-md font-bold text-purple-500">Website For A Local Restraunt</h4>
            <p className="text-white opacity-80 mb-4 mt-4">
            A modern and visually engaging website developed for Don's Asian Cuisine, 
            showcasing their menu, specials, and contact information. The site features 
            responsive design, dynamic content, and a user-friendly interface, enhancing 
            the restaurant's online presence and customer engagement.
            </p>
            <div className="flex gap-4">
            {/* Live Site Button */}
            <a
                href="https://ferestraunt-gvvc.onrender.com/home" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition"
            >
                Live Site
            </a>

            {/* GitHub Repo Button */}
            <a
                href="https://github.com/seannxh/DACFEWEBSITE" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition"
            >
                GitHub Repo
            </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  