import React, { Component } from 'react';
import movieData from './movieData.js';
import Header from './components/Header.js';
import MovieLibrary from './components/MovieLibrary.js';
import './index.scss';
// import Movie from './components/Movie.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: {movieData}
    }
  }
  render() {
    return (
      <div className='main-page'>
        <Header />
        <MovieLibrary movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
