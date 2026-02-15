import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer Intern',
      company: 'Genex CADD Centre, BBIT Campus',
      location: 'Campus',
      duration: 'June 2025 – July 2025',
      responsibilities: [
        'Developed VedaAI, an AI-powered Ayurvedic health assistant using MERN stack',
        'Integrated Google Gemini AI API for intelligent health recommendations',
        'Created RESTful APIs and implemented MongoDB for dynamic data storage',
        'Implemented efficient CRUD operations for seamless data management',
        'Collaborated with team members in an Agile development environment'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Gemini AI', 'REST APIs']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Professional journey and accomplishments</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-icon">
                <FaBriefcase />
              </div>
              
              <div className="experience-content">
                <h3 className="experience-role">{exp.role}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                
                <div className="experience-meta">
                  <div className="meta-item">
                    <FaCalendar />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="experience-responsibilities">
                  <h5>Key Responsibilities:</h5>
                  <ul>
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-tech">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
