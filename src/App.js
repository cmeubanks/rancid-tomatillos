import React, { Component } from 'react';
import apiCalls from './apiCalls';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import MovieInfo from './components/MovieInfo';
import './index.scss';
import { Route } from 'react-router-dom';

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
      .catch(error => this.setState( {error: error}))
  }

  handleClick = (e) => {
    let id = parseInt(e.target.id);
    this.setState({ cardID: id });
  }

  changeDisplay = () => {
    this.setState( {cardID: 0 });
  }

  render() {
    if(this.state.error){
      console.log(this.state.error)
      return <h2 className='error-message'>Uh Oh, Something Went Wrong</h2>
    }

    return (
      <div className='main-page'>
        <Header />
        <Route exact path='/:id' render={() =>
          <MovieInfo id={this.state.cardID} changeDisplay={this.changeDisplay}/>
        }/>
        <Route exact path='/' render={() =>
          <MovieLibrary movies={this.state.movies} handleClick={this.handleClick}/>
        }/>

      </div>
    );
  }
}

export default App;
