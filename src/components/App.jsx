import React, { Component } from 'react';
import './App.css';
import apiKey from '../apikey.js';
const randomID = require('random-id');

class App extends Component {

  componentDidMount() {
    const id =randomID();
    console.log(id);
  }

  render() {
    return (
      <div className="App">
        About to get crazy!
      </div>
    );
  }
}

export default App;
