import React from 'react';

import './SideNav.css';

const SideNav = ({ navOpen }) => {
  const classes = navOpen 
    ? "sideNav"
    : "sideNav sideNavHidden";

  return (
    <div className={classes}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Portfolio</a>
      <a href="#">Contact</a>
    </div>
  )
};

export default SideNav;