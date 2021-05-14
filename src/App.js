import React, { Component } from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import MovieInfo from './components/MovieInfo';

import movieData from './movieData.js';
import './index.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: {movieData},
      newMovie: null,
    }
  }

  handleClick = (e) => {
    let idNum = parseInt(e.target.id);

    let match = this.state.movies.movieData.movies.find(elem => {
      return elem.id === idNum;
    });

    this.setState({ newMovie: match }, console.log(this.state.newMovie));
  }

  render() {
    return (
      <div className='main-page'>
        <Header />
        {!this.state.newMovie && <MovieLibrary movies={this.state.movies} handleClick={this.handleClick}/>}
        {this.state.newMovie && <MovieInfo movie={this.state.newMovie}/>}
      </div>
    );
  }
}

export default App;
