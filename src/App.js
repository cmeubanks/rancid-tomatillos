import React, { Component } from 'react';
import movieData from './movieData.js';
import Header from './components/Header.js';
import MovieLibrary from './components/MovieLibrary.js';

import './index.scss';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: {movieData},
      cardId: 0
    }
  }

  handleClick = (e) => {
    this.setState({ cardId: e.target.id })

    return console.log(e.target.id);
  }

  render() {
    return (
      <div className='main-page'>
        <Header />
        {!this.state.cardId && <MovieLibrary movies={this.state.movies} handleClick = {this.handleClick}/>}
      </div>
    );
  }
}

export default App;
