import React from 'react';
import { 
  FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt, 
  FaJava, FaCode 
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiJavascript, 
  SiPostman, SiSocketdotio, SiJsonwebtokens
} from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
        { name: 'REST APIs', icon: <FaCode />, color: '#64ffda' },
        { name: 'JWT Auth', icon: <SiJsonwebtokens />, color: '#000000' },
        { name: 'Socket.io', icon: <SiSocketdotio />, color: '#010101' },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'CRUD Ops', icon: <FaDatabase />, color: '#64ffda' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
        { name: 'Java', icon: <FaJava />, color: '#007396' },
        { name: 'DSA', icon: <FaCode />, color: '#64ffda' },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="core-concepts">
          <h3>Core Concepts</h3>
          <div className="concepts-list">
            <span className="concept-tag">REST APIs</span>
            <span className="concept-tag">JWT Authentication</span>
            <span className="concept-tag">Responsive Design</span>
            <span className="concept-tag">WebSocket</span>
            <span className="concept-tag">CRUD Operations</span>
            <span className="concept-tag">Full-Stack Development</span>
            <span className="concept-tag">OOP</span>
            <span className="concept-tag">Data Structures</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
