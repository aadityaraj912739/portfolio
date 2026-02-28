import { useState } from 'react';
import loginPage from '../imagechatvibe/login-page.jpeg';
import registerPage from '../imagechatvibe/register-page.jpeg';
import chatInterface from '../imagechatvibe/chat-interface.jpeg';
import chatWindow from '../imagechatvibe/chat-window.jpeg';

import quiz1 from '../onlinesubjectivequizimage/WhatsApp Image 2026-02-23 at 14.48.35.jpeg';
import quiz2 from '../onlinesubjectivequizimage/WhatsApp Image 2026-02-23 at 14.48.36 (1).jpeg';
import quiz3 from '../onlinesubjectivequizimage/WhatsApp Image 2026-02-23 at 14.48.36.jpeg';
import quiz4 from '../onlinesubjectivequizimage/WhatsApp Image 2026-02-23 at 14.48.37.jpeg';
import quiz5 from '../onlinesubjectivequizimage/WhatsApp Image 2026-02-23 at 14.48.38 (1).jpeg';
import quiz6 from '../onlinesubjectivequizimage/WhatsApp Image 2026-02-23 at 14.48.38 (2).jpeg';
import quiz7 from '../onlinesubjectivequizimage/WhatsApp Image 2026-02-23 at 14.48.38.jpeg';
import quiz8 from '../onlinesubjectivequizimage/WhatsApp Image 2026-02-23 at 14.48.39 (1).jpeg';
import quiz9 from '../onlinesubjectivequizimage/WhatsApp Image 2026-02-23 at 14.48.39.jpeg';
import quiz10 from '../onlinesubjectivequizimage/WhatsApp Image 2026-02-23 at 14.48.40 (1).jpeg';
import quiz11 from '../onlinesubjectivequizimage/WhatsApp Image 2026-02-23 at 14.48.40.jpeg';

const Projects = () => {
  const [imageIndices, setImageIndices] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProjectIndex, setModalProjectIndex] = useState(null);
  
  const projects = [
    {
      title: 'Online Subjective Quiz Website',
      description: 'A secure full-stack quiz platform featuring user authentication, quiz creation capabilities, and real-time scoring functionality with an admin dashboard for efficient quiz management.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      features: [
        'User authentication and authorization',
        'Admin dashboard for quiz management',
        'Real-time scoring system',
        'Fully responsive UI design',
      ],
      link: 'https://college-project-roan.vercel.app/login',
      images: [quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9, quiz10, quiz11],
    },
    {
      title: 'ChatVibe – Real-Time Messaging Application',
      description: 'A real-time chat application enabling instant messaging with WebSocket technology, featuring secure user authentication and modern, responsive interface.',
      technologies: ['MERN Stack', 'Socket.io', 'JWT Authentication'],
      features: [
        'Real-time messaging with WebSocket',
        'Secure JWT authentication',
        'Bcrypt password hashing',
        'Modern responsive interface',
      ],
      link: 'https://chat-vibe-five.vercel.app',
      images: [loginPage, registerPage, chatInterface, chatWindow],
    },
    {
      title: 'VedaAI - AI-Powered Health Assistant',
      description: 'An AI-powered Ayurvedic health assistant developed during internship, integrating Google Gemini AI API with MERN stack for intelligent health recommendations.',
      technologies: ['MERN Stack', 'Google Gemini AI API', 'RESTful APIs'],
      features: [
        'AI-powered health recommendations',
        'Google Gemini AI integration',
        'RESTful API architecture',
        'MongoDB data storage',
      ],
      link: '#',
      images: [],
    },
  ];

  const nextImage = (projectIndex, imagesLength) => {
    setImageIndices((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % imagesLength,
    }));
  };

  const prevImage = (projectIndex, imagesLength) => {
    setImageIndices((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + imagesLength) % imagesLength,
    }));
  };

  const setImageIndex = (projectIndex, imgIndex) => {
    setImageIndices((prev) => ({
      ...prev,
      [projectIndex]: imgIndex,
    }));
  };

  const openModal = (projectIndex) => {
    setModalProjectIndex(projectIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProjectIndex(null);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Showcasing my full-stack development projects
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image Gallery for projects with images */}
              {project.images.length > 0 && (
                <div className="relative mb-4 group">
                  <div className="relative h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={project.images[imageIndices[index] || 0]}
                      alt={`${project.title} - Screenshot ${(imageIndices[index] || 0) + 1}`}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Navigation Arrows */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(index, project.images.length)}
                          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1 sm:p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                        >
                          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => nextImage(index, project.images.length)}
                          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1 sm:p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                        >
                          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Image Indicators */}
                  {project.images.length > 1 && (
                    <div className="flex justify-center gap-2 mt-2">
                      {project.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => setImageIndex(index, imgIndex)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            imgIndex === (imageIndices[index] || 0)
                              ? 'bg-blue-600 w-8'
                              : 'bg-gray-400 hover:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{project.description}</p>
              
              <div className="mb-3 sm:mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-3 sm:mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center text-sm sm:text-base"
                  >
                    View Project
                  </a>
                )}
                {project.images.length > 0 && (
                  <button
                    onClick={() => openModal(index)}
                    className="inline-block bg-indigo-600 text-white px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-center text-sm sm:text-base"
                  >
                    View Gallery
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {modalOpen && modalProjectIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-2 sm:p-4" onClick={closeModal}>
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 z-50"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full max-w-5xl mx-2 sm:mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={projects[modalProjectIndex].images[imageIndices[modalProjectIndex] || 0]}
                alt={`${projects[modalProjectIndex].title} - Screenshot ${(imageIndices[modalProjectIndex] || 0) + 1}`}
                className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
              />

              {/* Navigation Arrows */}
              {projects[modalProjectIndex].images.length > 1 && (
                <>
                  <button
                    onClick={() => prevImage(modalProjectIndex, projects[modalProjectIndex].images.length)}
                    className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 sm:p-3 rounded-full transition-all"
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => nextImage(modalProjectIndex, projects[modalProjectIndex].images.length)}
                    className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 sm:p-3 rounded-full transition-all"
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Image Counter & Indicators */}
            {projects[modalProjectIndex].images.length > 1 && (
              <div className="mt-3 sm:mt-4">
                <div className="text-center text-white mb-2 sm:mb-3">
                  <span className="text-base sm:text-lg font-semibold">
                    {(imageIndices[modalProjectIndex] || 0) + 1} / {projects[modalProjectIndex].images.length}
                  </span>
                </div>
                <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap px-2">
                  {projects[modalProjectIndex].images.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => setImageIndex(modalProjectIndex, imgIndex)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                        imgIndex === (imageIndices[modalProjectIndex] || 0)
                          ? 'bg-white w-6 sm:w-10'
                          : 'bg-gray-400 hover:bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
