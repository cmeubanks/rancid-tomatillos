import React from 'react';
//import Movie


function MovieLibrary({movies}) {
    const newMovie = movies.map(movie => {
      return (
        <Movie
          key={movie.id}
          averageRating={movie.average_rating}
          backdropPath={movie.backdrop_path}
          posterPath={movie.poster_path}
          title={movie.title}
          releaseDate={movie.release_date}
        />
      )
    })

  return (
    <section>
      {newMovie}
    </section>
  )

}















export default MovieLibrary;
