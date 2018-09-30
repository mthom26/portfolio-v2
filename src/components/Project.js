import React from 'react';

import './Project.css';
import Button from './Button';

import githubIcon from '../images/githubGreen.svg';
import linkIcon from '../images/linkGreen.svg';

const Project = ({
  children,
  imageRef,
  contentRef,
  image,
  gitHubAddress,
  linkAddress
}) => {
  return (
    <div className="project">
      <div ref={imageRef} className="projectImage fade">
        <img src={image} width="100%" />
      </div>
      <div className="projectContent">
        <div ref={contentRef} className="projectContentInner fadeRight">
          {children}
          <div className="projectButtons">
            <Button text="Github" icon={githubIcon} link={gitHubAddress}/>
            <Button text="Live Demo" icon={linkIcon} link={linkAddress}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Project;