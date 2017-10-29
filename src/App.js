import React, { Component } from 'react';
import HeroBox from './components/HeroBox';
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
        {/* <div className="firstpage-hero">
          <div><h1 className="App-title tk-museo-sans">MUSEO SANS title text ABCDEFGH abcdefgh</h1></div>
        </div> */}
        <div><img src={background} className="background-image" alt="thebackground" /></div>
        {/* <header className="App-header">
          <img src={thelogo} className="App-logo" alt="thelogo" />
          <img src={anotherlogo} className="App-logo" alt="thelogo" />
          <img src={background} className="background-image" alt="thebackground" />
        </header> */}
        {/* <div className="firstpage-hero">
          <h1 className="App-title tk-museo-sans">MUSEO SANS title text ABCDEFGH abcdefgh</h1>
        </div> */}
      </div>
    );
  }
}

export default App;
