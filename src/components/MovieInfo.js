import React, { Component } from 'react';

function MovieInfo({movie}) {

    return (
      <section className='movie-info'>
        <h1 className='title'>{movie.title}</h1>
          <div className='poster'>
            <img src={movie.poster_path} alt='movie poster'/>
          </div>
          <div className='movie-data'>
            <p className='release-date'>Release Date: {movie.release_date}</p>
            <p className='avg-rating'>Average Rating: {movie.average_rating}</p>
            <p className='overview'>{movie.overview}</p>
            <p className='genres'>{movie.genres}</p>
            <p className='budget'>{movie.budget}</p>
            <p className='revenue'>{movie.revenue}</p>
            <p className='runtime'>{movie.runtime}</p>
            <p className='tagline'>{movie.tagline}</p>
          </div>
      </section>
    )
  }

export default MovieInfo;
//
