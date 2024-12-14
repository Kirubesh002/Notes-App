import React from 'react';


const NavBar = () => {
  return (
    <header>
      <nav className='navbar'>
        <p className='navbar__title fw600'>Keep Notes</p>
        <ul className='navbar__menu fw600'>
          <li className='navbar__item'>About</li>
          <li className='navbar__item'>Notes</li>
          <li className='navbar__item'>Account</li>
          <li className='navbar__item'>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
  