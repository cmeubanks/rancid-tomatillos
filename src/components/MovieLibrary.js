import React from 'react';
import Card from './Card.js';

function MovieLibrary({movies, handleClick}) {
    const newCards = movies.map(film => {
      return (
        <Card
          key={film.id}
          id={film.id}
          posterPath={film.poster_path}
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
