import React from 'react';


function Movie({title, posterPath}) {


  return (
    <article>
      <p> {title} </p>
      <img src={posterPath}/>
    </article>
  )
}



export default Movie;
