import React from 'react';

import './Landing.css';

const Landing = ({ reference }) => {
  return (
    <div id="home" ref={reference} className="landing">
      <div className="landingContent">
        <h1 className="landingh1">
          Michael <span className="landingColored">Thompson</span>
        </h1>
        <h2>Web Developer, Programmer and Designer</h2>
      </div>
    </div>
  )
};

export default Landing;