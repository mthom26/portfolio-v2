import React from 'react';

import './Button.css';

const Button = ({ text, icon, link, customColor }) => {
  return (
    <a href={`${link}`} className="buttonBase">
      <div className="button">
        <span style={{ color: customColor }} className="buttonText">
          {text}
        </span>
        <div className="buttonIcon">
          {/* <img src={icon} alt="" /> */}
          {icon(customColor)}
        </div>
      </div>
      <div className="buttonBottom" />
      <div style={{ background: customColor }} className="buttonBottomVar" />
    </a>
  );
};

export default Button;