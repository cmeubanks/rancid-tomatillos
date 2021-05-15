import React, { Component } from 'react';
import apiCalls from '../apiCalls';

class MovieInfo extends Component {
    constructor() {
      super()
      this.state = {
        movie: null
      }
    }

    componentDidMount = () => {
      apiCalls.fetchAMovie(this.props.id)
      .then(data => this.setState({movie: data.movie}))
    }

    render() {
    if(!this.state.movie){
      return (<p>Your flick is loading...</p>)
    }

    return (
      <section className='movie-info'>
        <h1 className='title'>{this.state.movie.title}</h1>
          <div className='poster'>
            <img src={this.state.movie.poster_path} alt='movie poster'/>
          </div>
          <div className='movie-data'>
            <p className='release-date'>Release Date: {this.state.movie.release_date}</p>
            <p className='avg-rating'>Average Rating: {this.state.movie.average_rating}</p>
            <p className='overview'>{this.state.movie.overview}</p>
            <p className='genres'>{this.state.movie.genres}</p>
            <p className='budget'>{this.state.movie.budget}</p>
            <p className='revenue'>{this.state.movie.revenue}</p>
            <p className='runtime'>{this.state.movie.runtime}</p>
            <p className='tagline'>{this.state.movie.tagline}</p>
          </div>
      </section>
    )
  }
}

export default MovieInfo;
//
