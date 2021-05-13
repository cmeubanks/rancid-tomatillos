import React from 'react';

function Card({title, posterPath}) {

  return (
    <article className='movie-card'>
      <p></p>
      <img src={posterPath}/>
    </article>
  )
}

export default Card;
