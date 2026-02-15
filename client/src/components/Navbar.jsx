import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 1, text: 'Home', link: '#home' },
    { id: 2, text: 'About', link: '#about' },
    { id: 3, text: 'Skills', link: '#skills' },
    { id: 4, text: 'Projects', link: '#projects' },
    { id: 5, text: 'Experience', link: '#experience' },
    { id: 6, text: 'Education', link: '#education' },
    { id: 7, text: 'Contact', link: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <h1 className="navbar-logo">Aaditya Raj</h1>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {navItems.map(item => (
            <li key={item.id}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="hamburger">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={nav ? 'mobile-menu active' : 'mobile-menu'}>
          {navItems.map(item => (
            <li key={item.id}>
              <a href={item.link} onClick={handleClick}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
