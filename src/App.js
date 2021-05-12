import React, { Component } from 'react';
import './App.css';
import movieData from './movieData.js';
// import MovieLibrary from './components/MovieLibrary.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: {movieData}
    }
  }
  //mapping over movieData here to create prop for MovieLibrary
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
