import React from 'react';

import './Project.css';
import Button from './Button';
import { linkIcon, gitHubIcon } from '../utils/icons.js';

const Project = ({
  children,
  imageRef,
  contentRef,
  image,
  gitHubAddress,
  linkAddress,
  customColor
}) => {
  return (
    <div className="project">
      <div ref={imageRef} className="projectImage fade">
        <img src={image} width="100%" alt={linkAddress} />
      </div>
      <div className="projectContent">
        <div ref={contentRef} className="projectContentInner fadeRight">
          {children}
          <div className="projectButtons">
            <Button
              text="Github"
              icon={gitHubIcon}
              link={gitHubAddress}
              customColor={customColor}
            />
              <Button
              text="Live Demo"
              icon={linkIcon}
              link={linkAddress}
              customColor={customColor}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Project;