import React from 'react';

import './Portfolio.css';
import Project from './Project';

import autoRepairImage from '../images/autobodyrepair.jpg';
import restaurantImage from '../images/projectrestaurant.png';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.fadeRefOne = React.createRef();
    this.fadeRightRefOne = React.createRef();
    this.fadeRefTwo = React.createRef();
    this.fadeRightRefTwo = React.createRef();

    this.observer = new IntersectionObserver(items => {
      items.forEach(item => {
        if(item.intersectionRatio > 0.49) {
          item.target.classList.remove('fade');
          item.target.classList.remove('fadeRight');
          // Only need to remove class once so unobserve ref
          this.observer.unobserve(item.target);
        }
      });
    }, {
      threshold: 0.5
    });
  }

  componentDidMount() {
    this.observer.observe(this.fadeRefOne.current);
    this.observer.observe(this.fadeRightRefOne.current);
    // this.observer.observe(this.fadeRefTwo.current);
    // this.observer.observe(this.fadeRightRefTwo.current);
  }

  render() {
    const { reference } = this.props;

    return (
      <div ref={reference} id="portfolio" className="portfolio">
        <Project
          imageRef={this.fadeRefOne}
          contentRef={this.fadeRightRefOne}
          image={autoRepairImage}
          linkAddress="https://autobodyrepairs.now.sh/"
          gitHubAddress="https://github.com/mthom26/car-body-repair"
        >
          <h3>Auto Body Repairs</h3>
          <p>This is a single page website built GatsbyJS static site generator. It includes eye catching animations and google maps integration.</p>
        </Project>
      </div>
    )
  }
};

export default Portfolio;