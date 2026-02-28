const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Passionate full-stack developer crafting innovative solutions
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  I am a Computer Science Engineering student with hands-on experience in full-stack 
                  development using the MERN stack. My journey in software development has been driven 
                  by a passion for creating efficient and user-centric applications.
                </p>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  I specialize in building responsive web applications with strong expertise in both 
                  frontend and backend technologies. My experience includes deploying production-ready 
                  applications, integrating AI APIs, and working in Agile team environments.
                </p>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-pink-600 to-red-600 rounded-full"></div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  I'm constantly learning and exploring new technologies to stay ahead in the 
                  ever-evolving world of web development. When I'm not coding, I enjoy contributing 
                  to open-source projects and building solutions that make a difference.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1 sm:mb-2">2+</div>
              <div className="text-gray-600 font-medium text-xs sm:text-base">Years Coding</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">5+</div>
              <div className="text-gray-600 font-medium text-xs sm:text-base">Projects</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1 sm:mb-2">10+</div>
              <div className="text-gray-600 font-medium text-xs sm:text-base">Technologies</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1 sm:mb-2">1</div>
              <div className="text-gray-600 font-medium text-xs sm:text-base">Internship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
