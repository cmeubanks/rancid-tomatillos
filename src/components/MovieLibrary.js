import React from 'react';
import Card from './Card.js';

function MovieLibrary({ movies}) {
    const newCards = movies.map(film => {
      return (
        <Card
          key={film.id}
          id={film.id}
          posterPath={film.poster_path}
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
