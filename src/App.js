import React, { Component } from 'react';
import HeroBox from './components/HeroBox';
import GridBox from './components/GridBox';
import FooterBox from './components/FooterBox/FooterBox';
// import logo from './logo.svg';
// import thelogo from './images/thelogo.png';
// import anotherlogo from './images/lorem.svg';

import background from './images/bg.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroBox />
        <GridBox />
        <FooterBox />
        {/* <div><img src={background} className="background-image" alt="thebackground" /></div> */}
        {/* <img src={thelogo} className="App-logo" alt="thelogo" />
        <img src={anotherlogo} className="App-logo" alt="thelogo" />
        <img src={background} className="background-image" alt="thebackground" /> */}
      </div>
    );
  }
}

export default App;
