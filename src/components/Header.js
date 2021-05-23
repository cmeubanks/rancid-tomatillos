import React from 'react';
import logo from '../popcorn-mascot.png';

function Header() {

  return (
    <nav className='navbar buzz'>
      <img src={logo} alt='popcorn guy logo'/>
      <h1 className='glow-effect'>Rancid Tomatillos</h1>
    </nav>
  )
}

export default Header;
