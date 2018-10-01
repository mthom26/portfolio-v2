import React from 'react';

import './Button.css';

const Button = ({ text, icon, link }) => {
  return (
    <a href={`${link}`} className="buttonBase">
      <div className="button">
        <span className="buttonText">
          {text}
        </span>
        <div className="buttonIcon">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="buttonBottom" />
      <div className="buttonBottomVar" />
    </a>
  );
};

export default Button;