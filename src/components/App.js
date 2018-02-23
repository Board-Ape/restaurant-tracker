import React, { Component } from 'react';
import './App.css';
import apiKey from '../apikey.js';

class App extends Component {

  componentDidMount() {
    fetch(`https://check-api.herokuapp.com/restaurant-tracker`, {
      headers: {
        Authorization: apiKey
      }
    })
    .then(response => console.log(response))
    .then(response => console.log(response));
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
