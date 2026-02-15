import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Aaditya Raj</h1>
          <h2 className="hero-title">Full Stack Developer</h2>
          <p className="hero-description">
            Computer Science Engineering student specializing in MERN stack development.
            I build responsive, user-centric web applications with a passion for creating 
            efficient software solutions.
          </p>
          
          <div className="hero-info">
            <div className="info-item">
              <FaMapMarkerAlt />
              <span>Kolkata, India</span>
            </div>
            <div className="info-item">
              <FaPhone />
              <span>+91-6200425862</span>
            </div>
            <div className="info-item">
              <FaEnvelope />
              <span>ar912739@gmail.com</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
            <a href="/Aaditya_Raj_Resume.pdf" download className="btn btn-resume">
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/aadityaraj912739" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/aaditya-raj-897aa5327" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/ar912739/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <SiLeetcode />
            </a>
            <a href="mailto:ar912739@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
