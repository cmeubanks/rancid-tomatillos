import React from 'react';

function Card({posterPath}) {

  return (
    <article className='movie-card'>
      <img src={posterPath}/>
    </article>
  )
}

export default Card;
