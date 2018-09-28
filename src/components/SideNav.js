import React from 'react';

import './SideNav.css';

const SideNav = ({ navOpen, progress }) => {
  const classes = navOpen 
    ? "sideNav"
    : "sideNav sideNavHidden";

  return (
    <div className={classes}>
      <div className="navLinks">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <div style={{height: `${progress}%`}} className="progress" />
    </div>
  )
};

export default SideNav;