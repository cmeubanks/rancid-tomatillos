import React, { Component } from 'react';
import apiCalls from './apiCalls';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import MovieInfo from './components/MovieInfo';
import './index.scss';
import { Route, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: null,
      cardID: 0,
    }
  }

  componentDidMount = () => {
    apiCalls.fetchAllMovies()
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => this.setState( { error: error }))
  }

  handleClick = (e) => {
    let id = parseInt(e.target.id);
    this.setState({ cardID: id });
  }

  changeDisplay = () => {
    this.setState({ cardID: 0 });
  }

  render() {
    if (this.state.error) {
      console.log(this.state.error)
      return <h2 className='error-message'>Uh Oh, Something Went Wrong</h2>
    }

    if (!this.state.error && !this.state.movies) {
      return <h2 className='error-message'>Page loading...</h2>
    }

    return (
      <div className='main-page'>
      <Header />
      <Route path='/:id' render={({ match }) => {
        const isMovieID = this.state.movies.find(movie => movie.id === parseInt(match.params.id));
        return isMovieID ? (
          <MovieInfo id={match.params.id} changeDisplay={this.changeDisplay}/>
        ) : (
          <Redirect to='/'/>
        )
      }}/>
      <Route exact path='/' render={() =>
        <MovieLibrary movies={this.state.movies} handleClick={this.handleClick}/>
      }/>
      </div>
    );
  }
}

export default App;
