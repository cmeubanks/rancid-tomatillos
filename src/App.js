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
    }
  }

  componentDidMount = () => {
    apiCalls.fetchAllMovies()
      .then(data => {
        this.setState({ movies: this.cleanData(data)})
      })
      .catch((error) => {
      console.log(error);
      this.setState({ error: 'Uh Oh, Something Went Wrong :performing_arts:' });
      })
  }

  cleanData = (data) => {
    return data.movies.map(movie => {
      return {
        id: movie.id,
        poster_path: movie.poster_path
      }
    })
  }

  displayChosenCard = (match) => {
    const isMovieID = this.state.movies.find(movie => movie.id === parseInt(match.params.id));
    return isMovieID ? (
      <MovieInfo id={match.params.id} />
    ) : (
      <Redirect to='/'/>
    )
  }

  render() {
    if (this.state.error) {
      console.log(this.state.error)
      return <h2 className='message'>Uh Oh, Something Went Wrong 🎭</h2>
    }

    if (!this.state.error && !this.state.movies) {
      return <h2 className='message'>Page Loading 🍿</h2>
    }

    return (
      <div className='main-page'>
      <Header />
      <Route path='/:id' render={({ match }) => this.displayChosenCard(match) }/>
      <Route exact path='/' render={() =>
        <MovieLibrary movies={this.state.movies} />
      }/>
      </div>
    );
  }
}

export default App;
