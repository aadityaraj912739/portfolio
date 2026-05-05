import { useEffect, useState } from 'react';

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setVisibleCards((prev) => [...new Set([...prev, parseInt(index)])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java (OOPs, DSA)', 'JavaScript'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: 'Frontend Technologies',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'React.js'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500"
    },
    {
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express.js'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: "from-green-500 to-emerald-500"
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'VS Code', 'Postman', 'MySQL Workbench'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: 'Core Concepts',
      skills: ['REST APIs', 'JWT Authentication', 'Responsive UI Design'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-red-500 to-pink-500"
    },
  ];

  return (
    <section id="skills" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 animate-gradient"></div>
      
      {/* Background Patterns */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-fadeInUp">
            <span className="text-gradient-animate">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-2 font-medium animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Expertise in modern technologies and frameworks
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-index={index}
              className={`skill-card group relative bg-white p-6 sm:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(40px)',
              }}
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon with Animation */}
              <div className={`relative inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4 sm:mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <div className="group-hover:animate-bounce-subtle">
                  {category.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {category.title}
              </h3>
              
              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`relative bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-transparent hover:scale-110 hover:-translate-y-1 cursor-default group/badge`}
                    style={{
                      animationDelay: `${skillIndex * 100}ms`,
                    }}
                  >
                    {/* Badge Hover Effect */}
                    <span className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/badge:opacity-100 rounded-lg transition-opacity duration-300`}></span>
                    <span className="relative z-10 group-hover/badge:text-white transition-colors duration-300">{skill}</span>
                  </span>
                ))}
              </div>
              
              {/* Card Corner Accent */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
