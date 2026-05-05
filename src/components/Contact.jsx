import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState({ name: false, email: false, message: false });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 animate-gradient"></div>
      
      {/* Background Shapes */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-fadeInUp">
            <span className="text-gradient-animate">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-2 font-medium animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {/* Contact Information */}
            <div className="group bg-white p-7 sm:p-9 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-6 sm:mb-8">
                  Contact Information
                </h3>
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="shrink-0 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4 sm:ml-5">
                      <p className="font-bold text-gray-900 text-sm sm:text-base mb-1">Email</p>
                      <a href="mailto:ar912739@gmail.com" className="text-blue-600 hover:text-purple-600 font-semibold text-sm sm:text-base break-all transition-colors">
                        ar912739@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="shrink-0 p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4 sm:ml-5">
                      <p className="font-bold text-gray-900 text-sm sm:text-base mb-1">Phone</p>
                      <a href="tel:+916200425862" className="text-blue-600 hover:text-purple-600 font-semibold text-sm sm:text-base transition-colors">
                        +91-6200425862
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="shrink-0 p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4 sm:ml-5">
                      <p className="font-bold text-gray-900 text-sm sm:text-base mb-1">Location</p>
                      <p className="text-gray-700 text-sm sm:text-base font-medium">Kolkata, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 sm:mt-10">
                  <p className="font-bold text-gray-900 mb-4 sm:mb-5 text-base sm:text-lg">Connect With Me</p>
                  <div className="flex gap-4 sm:gap-5">
                    {[
                      { href: "https://github.com/aadityaraj912739", icon: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" },
                      { href: "https://www.linkedin.com/in/aaditya-raj-897aa5327/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social relative p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                      >
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon} /></svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Resume Download */}
                <div className="mt-8">
                  <a
                    href="/Aaditya_Raj_Resume.pdf"
                    download="Aaditya_Raj_Resume.pdf"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            
            {/* Contact Form */}
            <div className="group bg-white p-7 sm:p-9 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-6 sm:mb-8">
                  Send a Message
                </h3>
                {submitted ? (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 text-green-800 px-5 py-4 rounded-xl font-bold shadow-lg text-center animate-fadeInUp">
                    <svg className="w-12 h-12 mx-auto mb-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Thank you! I'll get back to you soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setIsFocused({...isFocused, name: true})}
                        onBlur={() => setIsFocused({...isFocused, name: false})}
                        required
                        className={`w-full px-5 py-4 border-2 rounded-xl font-medium transition-all duration-300 ${
                          isFocused.name 
                            ? 'border-blue-600 ring-4 ring-blue-100 shadow-lg' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setIsFocused({...isFocused, email: true})}
                        onBlur={() => setIsFocused({...isFocused, email: false})}
                        required
                        className={`w-full px-5 py-4 border-2 rounded-xl font-medium transition-all duration-300 ${
                          isFocused.email 
                            ? 'border-purple-600 ring-4 ring-purple-100 shadow-lg' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setIsFocused({...isFocused, message: true})}
                        onBlur={() => setIsFocused({...isFocused, message: false})}
                        required
                        rows="5"
                        className={`w-full px-5 py-4 border-2 rounded-xl font-medium transition-all duration-300 resize-none ${
                          isFocused.message 
                            ? 'border-pink-600 ring-4 ring-pink-100 shadow-lg' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full group/btn bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:-translate-y-1 text-lg"
                    >
                      <span>Send Message</span>
                      <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
