import React from 'react';

import './NavButton.css';

const NavButton = ({ toggleNav }) => {
  return (
    <div onClick={toggleNav} className="navButton">
      <div className="line one"></div>
      <div className="line two"></div>
      <div className="line three"></div>
    </div>
  )
};

export default NavButton;