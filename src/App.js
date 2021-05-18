import React, { Component } from 'react';
import apiCalls from './apiCalls';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import MovieInfo from './components/MovieInfo';
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
      .catch(error => this.setState( {error: error}))
  }

  handleClick = (e) => {    let id = parseInt(e.target.id);

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
        {!this.state.cardID && <MovieLibrary movies={this.state.movies} handleClick={this.handleClick}/>}
        {this.state.cardID && <MovieInfo id={this.state.cardID} changeDisplay={this.changeDisplay}/>}
      </div>
    );
  }
}

export default App;
