import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to DentOS</h1>
        </header>
        <p className="App-intro">
          This is placeholder text just for continous integration purposes.
        </p>
        <p>Hello</p>
      </div>
    );
  }
}

export default App;
