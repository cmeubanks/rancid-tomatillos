import React, { Component } from 'react';
import './App.css';
import movieData from './movieData.js';
import MovieLibrary from './components/MovieLibrary.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: {movieData}
    }
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <MovieLibrary movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
