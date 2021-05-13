import React from 'react';


function Movie({title, posterPath}) {


  return (
    <article className='movie-card'>
      <p></p>
      <img src={posterPath}/>
    </article>
  )
}



export default Movie;
