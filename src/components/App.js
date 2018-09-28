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
      navOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }

  render() {
    const { navOpen } = this.state;

    return (
      <div className="app">
        <SideNav navOpen={navOpen}/>
        <NavButton
          navOpen={navOpen}
          toggleNav={this.toggleNav}
        />
        <div className="main">
          <Landing />
          <About />
          <Portfolio />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
