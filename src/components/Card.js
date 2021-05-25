import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id, test, posterPath }) {

  return (
    <Link to={`/${id}`} className='link-container'>
      <article className='movie-card grow'>
        <img id={id} src={posterPath} alt='movie poster'/>
      </article>
    </Link>
  )
}

export default Card;