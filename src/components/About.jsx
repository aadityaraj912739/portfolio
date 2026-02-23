const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I am a Computer Science Engineering student with hands-on experience in full-stack 
              development using the MERN stack. My journey in software development has been driven 
              by a passion for creating efficient and user-centric applications.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I specialize in building responsive web applications with strong expertise in both 
              frontend and backend technologies. My experience includes deploying production-ready 
              applications, integrating AI APIs, and working in Agile team environments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm constantly learning and exploring new technologies to stay ahead in the 
              ever-evolving world of web development. When I'm not coding, I enjoy contributing 
              to open-source projects and building solutions that make a difference.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-700">Years Coding</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-700">Projects</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-700">Technologies</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-gray-700">Internship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
