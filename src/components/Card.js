import React from 'react';

function Card({id, test, posterPath, handleClick}) {

  return (
    <article onClick={handleClick} className='movie-card'>
      <img src={posterPath} id={id}/>
    </article>
  )
}

export default Card;
