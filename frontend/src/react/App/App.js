import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import Test from '../../test.js';
import Dashboard from '../Dashboard/Dashboard.js';
import Fishtanks from '../Fishtanks/Fishtanks.js';
import Home from '../Home/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
