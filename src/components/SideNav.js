import React from 'react';

import './SideNav.css';

const SideNav = ({ navOpen, progress, activeLink }) => {
  const classes = navOpen 
    ? "sideNav"
    : "sideNav sideNavHidden";

  return (
    <div className={classes}>
      <nav className="navLinks">
        <a
          className={`navLink ${activeLink == 'home' ? 'active': ''}`}
          href="#home"
        >
          Home
        </a>
        <a
          className={`navLink ${activeLink == 'about' ? 'active': ''}`}
          href="#about"
        >
          About
        </a>
        <a
          className={`navLink ${activeLink == 'portfolio' ? 'active': ''}`}
          href="#portfolio"
        >
          Portfolio
        </a>
        <a
          className={`navLink ${activeLink == 'contact' ? 'active': ''}`}
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