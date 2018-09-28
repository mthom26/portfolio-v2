import React from 'react';

const About = ({ reference }) => {
  return (
    <div ref={reference} id="about" style={{height: '60vh'}}>
      <h1>About</h1>
    </div>
  )
};

export default About;