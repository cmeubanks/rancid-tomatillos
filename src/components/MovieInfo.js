import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import apiCalls from '../apiCalls';
var dayjs = require('dayjs');

class MovieInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null
    }
  }

  componentDidMount = () => {
    apiCalls.fetchAMovie(this.props.id)
      .then(data => this.setState({ movie: data.movie }))
      .catch(error => this.setState({ error: error }))
  }

  convertDollarAmount(amount) {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    const dollarAmt = formatter.format(amount);

    if (dollarAmt === '$0.00') {
      return 'unavailable'
      } else {
        return dollarAmt;
      }
  }

  displayGenres(genres) {
    const list = genres.join(', ')
    return list;
  }

  render() {
    if (!this.state.movie) {
      return <h2 className='message'>Page Loading 🍿</h2>
    }

    if (this.state.error) {
      return (<p>{this.state.error}</p>)
    }

    return (
      <section className='movie-info-container' style={{ backgroundImage: `url(${this.state.movie.backdrop_path})`}}>
        <div className='movie-info'>
          <div className='movie-info-left'>
            <div className='poster'>
              <img src={this.state.movie.poster_path} alt='movie poster'/>
              <p className='tagline'>{this.state.movie.tagline}</p>
            </div>
          </div>
          <div className='movie-info-right'>
            <div className='movie-right-wrapper'>
              <div className='movie-info-box'>
                <h1 className='title'>{this.state.movie.title}</h1>
                <p className='release-date'>Release Date: {dayjs(this.state.movie.release_date).format('MMMM D, YYYY')}</p>
                <p className='overview'>{this.state.movie.overview}</p>
                <p className='runtime'>{this.state.movie.runtime} minutes</p>
                <p className='avg-rating'>
                  Average Rating: {Math.round(this.state.movie.average_rating)} / 10 <i className="fas fa-star"></i>
                </p>
                <p className='genres'>Genre: {this.displayGenres(this.state.movie.genres)}</p>
                <p className='budget'>Budget: {this.convertDollarAmount(this.state.movie.budget)}</p>
                <p className='revenue'>Revenue: {this.convertDollarAmount(this.state.movie.revenue)}</p>
              </div>
              <NavLink exact to='/'>
                <button className='grow' onClick={this.props.changeDisplay}>
                  <i className='fas fa-home'></i>
                  Return Home
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default MovieInfo;
