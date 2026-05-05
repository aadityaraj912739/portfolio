import { useEffect, useState } from 'react';

const About = () => {
  const [counters, setCounters] = useState({ years: 0, projects: 0, technologies: 0, internships: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { years: 2, projects: 5, technologies: 10, internships: 1 };
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        years: Math.floor((targets.years / steps) * step),
        projects: Math.floor((targets.projects / steps) * step),
        technologies: Math.floor((targets.technologies / steps) * step),
        internships: Math.floor((targets.internships / steps) * step),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);
  };

  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 animate-gradient"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-fadeInUp">
            <span className="text-gradient-animate">
              About Me
            </span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-2 font-medium animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Passionate full-stack developer crafting innovative solutions
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Main Content Card */}
          <div className="group bg-white p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 relative overflow-hidden">
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative space-y-5 sm:space-y-7">
              <div className="flex items-start gap-4 sm:gap-5 animate-fadeInLeft transform transition-all duration-500 hover:translate-x-2">
                <div className="shrink-0 mt-1.5">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse-glow"></div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                  I am a <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Computer Science Engineering student</span> with hands-on experience in full-stack 
                  development using the MERN stack. My journey in software development has been driven 
                  by a passion for creating efficient and user-centric applications.
                </p>
              </div>
              
              <div className="flex items-start gap-4 sm:gap-5 animate-fadeInLeft transform transition-all duration-500 hover:translate-x-2" style={{animationDelay: '0.1s'}}>
                <div className="shrink-0 mt-1.5">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                  I specialize in building <span className="font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">responsive web applications</span> with strong expertise in both 
                  frontend and backend technologies. My experience includes deploying production-ready 
                  applications, integrating AI APIs, and working in Agile team environments.
                </p>
              </div>
              
              <div className="flex items-start gap-4 sm:gap-5 animate-fadeInLeft transform transition-all duration-500 hover:translate-x-2" style={{animationDelay: '0.2s'}}>
                <div className="shrink-0 mt-1.5">
                  <div className="w-4 h-4 bg-gradient-to-r from-pink-600 to-red-600 rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                  I'm constantly learning and exploring new technologies to stay ahead in the 
                  ever-evolving world of web development. When I'm not coding, I enjoy <span className="font-bold text-transparent bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text">contributing 
                  to open-source projects</span> and building solutions that make a difference.
                </p>
              </div>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: counters.years, suffix: '+', label: 'Years Coding', gradient: 'from-blue-600 to-cyan-600', delay: '0s' },
              { value: counters.projects, suffix: '+', label: 'Projects', gradient: 'from-purple-600 to-pink-600', delay: '0.1s' },
              { value: counters.technologies, suffix: '+', label: 'Technologies', gradient: 'from-green-600 to-emerald-600', delay: '0.2s' },
              { value: counters.internships, suffix: '', label: 'Internship', gradient: 'from-orange-600 to-red-600', delay: '0.3s' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white p-5 sm:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100 relative overflow-hidden cursor-default"
                style={{animationDelay: stat.delay}}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-700 font-bold text-xs sm:text-base tracking-wide group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {stat.label}
                  </div>
                </div>
                
                {/* Corner Accent */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${stat.gradient} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
