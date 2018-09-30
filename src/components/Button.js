import React from 'react';

import './Button.css';

const Button = ({ text, icon, link }) => {
  return (
    <a href={`${link}`} className="button">
      <span className="buttonText">
        {text}
      </span>
      <div className="buttonIcon">
        <img src={icon} alt="" />
      </div>
    </a>
  );
};

export default Button;