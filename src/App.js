import React, { Component } from 'react';
// import logo from './logo.svg';
import thelogo from './images/thelogo.png';
import background from './images/bg.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><img src={background} className="background-image" alt="thebackground" /></div>
        <header className="App-header">
          <img src={thelogo} className="App-logo" alt="thelogo" />
          <img src={background} className="background-image" alt="thebackground" />
          <h1 className="App-title">TITLE TEXT</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
