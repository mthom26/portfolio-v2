import React from 'react';

import './SideNav.css';

const SideNav = ({ navOpen }) => {
  const classes = navOpen 
    ? "sideNav"
    : "sideNav sideNavHidden";

  return (
    <div className={classes}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </div>
  )
};

export default SideNav;