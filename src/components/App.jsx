import React, { Component } from 'react';
import './App.css';
import apiKey from '../apikey.js';
const randomID = require('random-id');

class App extends Component {

  componentDidMount() {
    const id =randomID();
    console.log(id);
  }

  getTables = () => {
    fetch(`https://check-api.herokuapp.com/checks/d8d66715-c799-4732-b2c1-8d1b79590a6d`, {
      headers: {
        Authorization: apiKey
      }
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.log(error));
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
