import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/api/contact', formData);
      
      if (response.data.success) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Failed to send message. Please try again or contact via email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Have a project in mind? Let's connect!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-intro">
              I'm currently looking for opportunities to contribute to innovative projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="info-items">
              <div className="info-card">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Kolkata, India</p>
                </div>
              </div>

              <div className="info-card">
                <FaEnvelope className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ar912739@gmail.com">ar912739@gmail.com</a>
                </div>
              </div>

              <div className="info-card">
                <FaPhone className="info-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+916200425862">+91-6200425862</a>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4>Connect with me</h4>
              <div className="social-links">
                <a href="https://github.com/aadityaraj912739" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/aaditya-raj-897aa5327" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:ar912739@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
