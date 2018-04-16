import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/Header/Header';
import Home from './common/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
