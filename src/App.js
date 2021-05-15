import React, { Component } from 'react';
import apiCalls from './apiCalls';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import MovieInfo from './components/MovieInfo';

// import movieData from './movieData.js';
import './index.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      cardID: 0,
    }
  }

  componentDidMount = () => {
    apiCalls.fetchAllMovies()
      .then(data => this.setState({movies: data.movies}))
  }

  handleClick = (e) => {
    let id = parseInt(e.target.id);

    this.setState({ cardID: id });
  }

  render() {
    return (
      <div className='main-page'>
        <Header />
        {!this.state.cardID && <MovieLibrary movies={this.state.movies} handleClick={this.handleClick}/>}
        {this.state.cardID && <MovieInfo id={this.state.cardID}/>}
      </div>
    );
  }
}

export default App;
