import React from 'react';

const Landing = ({ reference }) => {
  return (
    <div ref={reference} id="home" style={{height: '60vh'}}>
      <h1>Landing</h1>
    </div>
  )
};

export default Landing;