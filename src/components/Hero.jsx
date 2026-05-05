import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 animate-gradient"></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 z-10">
        <div className="text-center">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-3 sm:mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Hi, I'm <span className="text-gradient-animate bg-clip-text text-transparent">Aaditya Raj</span>
          </h1>
          <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Full Stack Developer
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-10 max-w-3xl mx-auto px-2 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Computer Science Engineering student passionate about building efficient, 
            user-centric software solutions using the MERN stack.
          </p>
          <div className={`flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="#contact"
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-10 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 w-full sm:w-auto text-center overflow-hidden transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#projects"
              className="group relative bg-white text-blue-600 px-8 sm:px-10 py-4 rounded-xl font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto text-center transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="group-hover:text-purple-600 transition-colors duration-300">View Projects</span>
            </a>
            <a
              href="/Aaditya_Raj_Resume.pdf"
              download="Aaditya_Raj_Resume.pdf"
              className="group relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 sm:px-10 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto transform hover:scale-105 hover:-translate-y-1 animate-pulse-glow"
            >
              <svg className="w-5 h-5 group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
          <div className={`flex justify-center gap-6 sm:gap-8 px-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://github.com/aadityaraj912739"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <svg className="w-10 h-10 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/aaditya-raj-897aa5327/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <svg className="w-10 h-10 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:ar912739@gmail.com"
              className="group relative text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <svg className="w-10 h-10 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/ar912739/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2"
              title="LeetCode Profile"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <svg className="w-10 h-10 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
