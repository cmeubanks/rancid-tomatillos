import React, { Component } from 'react';
import flick from '../flicks';

class MovieInfo extends Component {
  constructor() {
    super()
    this.state = {
      flicks: {flick.movie}
    }
  }

  render() {
    return (
      <section className='movie-info'>
        <h1 className='title'>title</h1>
        <div>
          <div className='poster'>
            <img />
          </div>
          <div className='movie-data'>
            <p className='release-date'>release date</p>
            <p className='overview'>overview</p>
            <p className='genres'>genres</p>
            <p className='budget'>budget</p>
            <p className='revenue'>revenue</p>
            <p className='runtime'>runtime</p>
            <p className='tagline'>tagline</p>
            <p className='avg-rating'>average rating</p>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieInfo;
