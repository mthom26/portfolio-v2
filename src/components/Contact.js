import React from 'react';
import ReactGA from 'react-ga';

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
        <div>
          <a href="mailto:michaelthompson.code@gmail.com">
            michaelthompson.code@gmail.com
          </a>
        </div>
      </div>

      <div className="contactItem">
        <h3 className="contactSpan">Links</h3>
        <div>
          <a
            className="contactLink"
            href="mailto:michaelthompson.code@gmail.com"
            onClick={() => {
              ReactGA.event({
                category: 'Contact',
                action: 'Clicked Email Link'
              })
            }}
          >
            <img src={emailIcon} width="32px" alt="" />
          </a>
          <a
            className="contactLink"
            href="https://github.com/mthom26"
            onClick={() => {
              ReactGA.event({
                category: 'Github',
                action: 'Clicked Main Github Link'
              })
            }}
          >
            <img src={githubIcon} width="32px" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
};

export default Contact;