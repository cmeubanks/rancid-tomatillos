import React from 'react';
import Card from './Card.js';

function MovieLibrary({movies, handleClick}) {
    const newCards = movies.movieData.movies.map(film => {
      return (
        <Card
          key={film.id}
          id={film.id}
          averageRating={film.average_rating}
          backdropPath={film.backdrop_path}
          posterPath={film.poster_path}
          title={film.title}
          releaseDate={film.release_date}
          handleClick={handleClick}
        />
      )
    })

  return (
    <section className="library">
      {newCards}
    </section>
  )

}

export default MovieLibrary;
