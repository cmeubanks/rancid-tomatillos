import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id, test, posterPath, handleClick }) {

  return (
    <Link to={`/${id}`} className='link-container'>
      <article onClick={handleClick} className='movie-card'>
        <img id={id} src={posterPath} alt='movie poster'/>
      </article>
    </Link>
  )
}

export default Card;
