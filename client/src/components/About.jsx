import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a <span className="highlight">Computer Science Engineering student</span> at 
              Budge Budge Institute of Technology with hands-on experience in full-stack development 
              using the MERN stack.
            </p>
            <p>
              I specialize in building <span className="highlight">responsive web applications</span> with 
              strong expertise in both frontend and backend technologies. I'm passionate about creating 
              efficient, user-centric software solutions that make a real impact.
            </p>
            <p>
              My experience includes deploying <span className="highlight">production-ready applications</span>, 
              integrating AI APIs, and working in collaborative Agile team environments. I constantly strive 
              to learn new technologies and improve my skills.
            </p>
            <p>
              Currently, I'm focused on mastering full-stack development and exploring new opportunities 
              to contribute to innovative projects that solve real-world problems.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <h3>3+</h3>
                <p>Major Projects</p>
              </div>
              <div className="highlight-item">
                <h3>MERN</h3>
                <p>Stack Expert</p>
              </div>
              <div className="highlight-item">
                <h3>2025</h3>
                <p>Internship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
