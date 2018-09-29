import React from 'react';

import './SideNav.css';

const SideNav = ({ navOpen, progress, activeLink, sectionPositions }) => {
  const classes = navOpen 
    ? "sideNav"
    : "sideNav sideNavHidden";
  const { home, about, portfolio, contact } = sectionPositions;

  return (
    <div className={classes}>
      <nav className="navLinks">
        <a
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: home,
              behavior: 'smooth'
            });
          }}
          className={`navLink ${activeLink === 'home' ? 'active': ''}`}
          href="#home"
        >
          Home
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: about,
              behavior: 'smooth'
            });
          }}
          className={`navLink ${activeLink === 'about' ? 'active': ''}`}
          href="#about"
        >
          About
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: portfolio,
              behavior: 'smooth'
            });
          }}
          className={`navLink ${activeLink === 'portfolio' ? 'active': ''}`}
          href="#portfolio"
        >
          Portfolio
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: contact,
              behavior: 'smooth'
            });
          }}
          className={`navLink ${activeLink === 'contact' ? 'active': ''}`}
          href="#contact"
        >
          Contact
        </a>
      </nav>
      <div style={{height: `${progress}%`}} className="progress" />
    </div>
  )
};

export default SideNav;