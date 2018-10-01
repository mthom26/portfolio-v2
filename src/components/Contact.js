import React from 'react';

import './Contact.css';
import emailIcon from '../images/envelopeWhite.svg';
import githubIcon from '../images/githubWhite.svg';

const Contact = ({ reference }) => {
  return (
    <div className="contact" ref={reference} id="contact">
      <h2>Contact Me</h2>
      <p>If you want to discuss your project just send me an email.</p>

      <div className="contactItem">
        <h3 className="contactSpan">Email</h3>
        <a href="mailto:michaelthompson.code@gmail.com">
          michaelthompson.code@gmail.com
        </a>
      </div>

      <div className="contactItem">
        <h3 className="contactSpan">Links</h3>
        <a className="contactLink" href="mailto:michaelthompson.code@gmail.com">
          <img src={emailIcon} width="32px" alt="" />
        </a>
        <a className="contactLink" href="https://github.com/mthom26">
          <img src={githubIcon} width="32px" alt="" />
        </a>
      </div>
    </div>
  )
};

export default Contact;