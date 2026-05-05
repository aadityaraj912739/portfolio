import { useEffect, useRef, useState } from 'react';

const Education = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

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
      icon: '🎓',
    },
    {
      degree: 'Class XII (BSEB)',
      institution: 'Bihar School Examination Board',
      duration: '2021',
      grade: '77.8%',
      highlights: [],
      icon: '📚',
    },
    {
      degree: 'Class X (BSEB)',
      institution: 'Bihar School Examination Board',
      duration: '2019',
      grade: '76%',
      highlights: [],
      icon: '📖',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.education-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
              Education Journey
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Academic background and continuous learning path
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-8 sm:space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                data-index={index}
                className={`education-card relative ${
                  visibleCards.includes(index) ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full items-center justify-center border-4 border-gray-900 shadow-lg z-10 animate-pulse-glow">
                  <span className="text-2xl">{edu.icon}</span>
                </div>

                {/* Card */}
                <div className={`md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'} group`}>
                  <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700/50 card-3d overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    
                    {/* Mobile Icon */}
                    <div className="md:hidden absolute top-6 right-6 text-4xl opacity-20">
                      {edu.icon}
                    </div>

                    <div className="relative z-10">
                      {/* Duration Badge */}
                      <div className="flex flex-col sm:flex-row sm:justify-between items-start flex-wrap gap-3 sm:gap-4 mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white pr-12 sm:pr-0">{edu.degree}</h3>
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 animate-pulse-subtle">
                          {edu.duration}
                        </span>
                      </div>

                      {/* Institution */}
                      <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 leading-relaxed">
                        {edu.institution}
                      </p>

                      {/* Grade Badge */}
                      <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-xl mb-4 border border-blue-500/30 hover:border-purple-500/50 transition-all duration-300">
                        <p className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
                          <span className="text-yellow-400">⭐</span>
                          {edu.grade}
                        </p>
                      </div>

                      {/* Highlights */}
                      {edu.highlights.length > 0 && (
                        <ul className="space-y-2 sm:space-y-3 mt-4">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <li 
                              key={highlightIndex} 
                              className="flex items-start gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3 rounded-xl border border-blue-500/20 hover:border-purple-500/40 transition-all duration-300 hover:translate-x-1"
                              style={{ animationDelay: `${(index * 0.2) + (highlightIndex * 0.1)}s` }}
                            >
                              <div className="shrink-0 mt-0.5">
                                <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              </div>
                              <span className="text-gray-300 leading-relaxed text-sm sm:text-base">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
