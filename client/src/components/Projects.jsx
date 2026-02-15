import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Online Subjective Quiz Website',
      description: 'A secure full-stack quiz platform with user authentication, quiz creation capabilities, real-time scoring, and admin dashboard for comprehensive quiz and user management.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      features: [
        'User Authentication System',
        'Real-time Scoring Functionality',
        'Admin Dashboard',
        'Fully Responsive UI',
        'CRUD Operations'
      ],
      liveLink: 'https://college-project-roan.vercel.app/login',
      image: null
    },
    {
      id: 2,
      title: 'ChatVibe – Real-Time Messaging App',
      description: 'A real-time chat application featuring instant messaging with WebSocket technology, secure JWT authentication, and modern responsive interface.',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT'],
      features: [
        'Real-time Instant Messaging',
        'WebSocket Communication',
        'JWT Authentication',
        'Bcrypt Password Hashing',
        'Modern Responsive UI',
        'Real-time Notifications'
      ],
      liveLink: 'https://chat-vibe-five.vercel.app/login',
      image: null
    },
    {
      id: 3,
      title: 'VedaAI - Ayurvedic Health Assistant',
      description: 'An AI-powered Ayurvedic health assistant built during internship, featuring Google Gemini AI integration, RESTful APIs, and dynamic data management.',
      techStack: ['MERN Stack', 'Google Gemini AI API', 'MongoDB', 'REST APIs'],
      features: [
        'AI-Powered Recommendations',
        'Google Gemini AI Integration',
        'RESTful API Design',
        'Dynamic Data Storage',
        'Efficient CRUD Operations'
      ],
      githubLink: null,
      liveLink: null
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
