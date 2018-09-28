import React, { Component } from 'react';

import SideNav from './SideNav';
import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import NavButton from './NavButton';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SideNav />
        <NavButton />
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
