import React from 'react';

function Card({id, test, posterPath, handleClick}) {

  return (
    <article onClick={handleClick} className='movie-card'>
      <img id={id} src={posterPath} alt='movie poster'/>
    </article>
  )
}

export default Card;
//
