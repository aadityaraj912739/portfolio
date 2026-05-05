const Experience = () => {
  return (
    <section id="experience" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-blue-50 animate-gradient"></div>
      
      {/* Background Shapes */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-fadeInUp">
            <span className="text-gradient-animate">
              Experience
            </span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-2 font-medium animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Professional journey and hands-on development experience
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-white p-7 sm:p-10 md:p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 transform hover:-translate-y-3 overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated Corner Accent */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700"></div>
            
            <div className="relative flex flex-col sm:flex-row items-start gap-5 sm:gap-7">
              <div className="shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-3 sm:gap-5 mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      Full Stack Developer Intern
                    </h3>
                    <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Genex CADD Centre, BBIT Campus
                    </p>
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg whitespace-nowrap group-hover:scale-110 transition-transform duration-300">
                    June 2025 – July 2025
                  </span>
                </div>
                
                <div className="space-y-4 sm:space-y-5">
                  {[
                    {
                      text: "Developed VedaAI, an AI-powered Ayurvedic health assistant using MERN stack and Google Gemini AI API integration",
                      gradient: "from-blue-600 to-purple-600"
                    },
                    {
                      text: "Created RESTful APIs and integrated MongoDB for dynamic data storage, implementing efficient CRUD operations",
                      gradient: "from-purple-600 to-pink-600"
                    },
                    {
                      text: "Collaborated in an Agile team environment to deliver production-ready features within tight deadlines",
                      gradient: "from-pink-600 to-red-600"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 bg-gradient-to-r from-gray-50 to-blue-50 p-4 sm:p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:translate-x-2 group/item"
                    >
                      <div className="shrink-0 mt-0.5">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
