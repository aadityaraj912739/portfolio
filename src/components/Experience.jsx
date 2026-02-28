const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Professional journey and hands-on development experience
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                      Full Stack Developer Intern
                    </h3>
                    <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Genex CADD Centre, BBIT Campus
                    </p>
                  </div>
                  <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-md whitespace-nowrap">
                    June 2025 – July 2025
                  </span>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3 bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-4 rounded-lg hover:shadow-md transition-all duration-200">
                    <div className="shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      Developed VedaAI, an AI-powered Ayurvedic health assistant using MERN stack 
                      and Google Gemini AI API integration
                    </p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-4 rounded-lg hover:shadow-md transition-all duration-200">
                    <div className="shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      Created RESTful APIs and integrated MongoDB for dynamic data storage, 
                      implementing efficient CRUD operations
                    </p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 bg-gradient-to-r from-pink-50 to-red-50 p-3 sm:p-4 rounded-lg hover:shadow-md transition-all duration-200">
                    <div className="shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      Collaborated in an Agile team environment to deliver production-ready 
                      features within tight deadlines
                    </p>
                  </div>
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
