import React, { Component } from 'react';

import SideNav from './SideNav';
import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import NavButton from './NavButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false,
      progress: 0
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    // Create refs for each section
    this.rootRef = React.createRef();
    // this.homeRef = React.createRef();
    // this.aboutRef = React.createRef();
    this.portfolioRef = React.createRef();
    // this.contactRef = React.createRef();
    
    this.observer = new IntersectionObserver((items) => {
      // console.log(items);
    }, {
      root: this.rootRef.current,
      threshold: 0.1
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    // this.observer.observe(this.homeRef.current);
    // this.observer.observe(this.aboutRef.current);
    this.observer.observe(this.portfolioRef.current);
    // this.observer.observe(this.contactRef.current);
    // console.log(document.scrollingElement.scrollTop);
    // console.log(document.scrollingElement.scrollHeight);
    // console.log(window.innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const currentScroll = document.scrollingElement.scrollTop;
    const maxScroll = document.scrollingElement.scrollHeight - window.innerHeight;
    const scrollPercent = (currentScroll / maxScroll) * 100;
    this.setState({ progress: scrollPercent });
  }

  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }

  render() {
    const { navOpen, progress } = this.state;

    return (
      <div className="app">
        <SideNav
          navOpen={navOpen}
          progress={progress}
        />
        <NavButton
          navOpen={navOpen}
          toggleNav={this.toggleNav}
        />
        <div ref={this.rootRef} className="main">
          <Landing />
          <About />
          <Portfolio reference={this.portfolioRef} />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
