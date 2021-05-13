import React from 'react';

function Card({test, posterPath}) {

  return (
    <article onClick={(event) => test} className='movie-card'>
      <img src={posterPath}/>
    </article>
  )
}

export default Card;
