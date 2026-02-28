const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Budge Budge Institute of Technology, MAKAUT',
      duration: 'Expected 2026',
      grade: 'CGPA: 7.42/10.0 (till 7th Semester)',
      highlights: [
        'Specialized in Full Stack Development',
        'Strong foundation in Data Structures and Algorithms',
        'Active participant in coding competitions',
      ],
    },
    {
      degree: 'Class XII (BSEB)',
      institution: 'Bihar School Examination Board',
      duration: '2021',
      grade: '77.8%',
      highlights: [],
    },
    {
      degree: 'Class X (BSEB)',
      institution: 'Bihar School Examination Board',
      duration: '2019',
      grade: '76%',
      highlights: [],
    },
  ];

  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Academic background and qualifications
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between items-start flex-wrap gap-3 sm:gap-4 mb-2 sm:mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{edu.degree}</h3>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-md whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
              <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                {edu.institution}
              </p>
              <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg mb-3 sm:mb-4">
                <p className="text-gray-800 font-bold text-sm sm:text-base">{edu.grade}</p>
              </div>
              {edu.highlights.length > 0 && (
                <ul className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-2 sm:gap-3 bg-gradient-to-r from-blue-50 to-purple-50 p-2.5 sm:p-3 rounded-lg">
                      <div className="shrink-0 mt-0.5">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
