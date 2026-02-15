import React from 'react';
import { FaGraduationCap, FaUniversity, FaCalendar, FaAward } from 'react-icons/fa';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Budge Budge Institute of Technology',
      university: 'MAKAUT',
      duration: '2022 - 2026',
      grade: 'CGPA: 7.42/10.0',
      status: 'Expected Graduation: 2026',
      icon: <FaUniversity />,
      highlights: [
        'Specialization in Full-Stack Development',
        'Completed internship in MERN Stack Development',
        'Active participation in coding competitions'
      ]
    },
    {
      id: 2,
      degree: 'Class XII (Intermediate)',
      institution: 'Bihar School Examination Board (BSEB)',
      duration: '2021',
      grade: 'Percentage: 77.8%',
      icon: <FaGraduationCap />,
      highlights: []
    },
    {
      id: 3,
      degree: 'Class X (Matriculation)',
      institution: 'Bihar School Examination Board (BSEB)',
      duration: '2019',
      grade: 'Percentage: 76%',
      icon: <FaGraduationCap />,
      highlights: []
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Academic background and qualifications</p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-icon">
                {edu.icon}
              </div>

              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">
                  {edu.institution}
                  {edu.university && <span className="university"> | {edu.university}</span>}
                </h4>

                <div className="education-meta">
                  <div className="meta-item">
                    <FaCalendar />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaAward />
                    <span>{edu.grade}</span>
                  </div>
                </div>

                {edu.status && (
                  <p className="education-status">{edu.status}</p>
                )}

                {edu.highlights.length > 0 && (
                  <div className="education-highlights">
                    <h5>Highlights:</h5>
                    <ul>
                      {edu.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
