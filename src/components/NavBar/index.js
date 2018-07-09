import React from 'react';
import Link from 'gatsby-link';

const NavBar = () => {
  return (
    <nav className='navbar is-transparent' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          ASUC OCTO
        </Link>
        <button className='button navbar-burger' data-target='navMenu'>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className='navbar-menu' id='navMenu'>
        <div className='navbar-end'>
          <Link className='navbar-item' to='/pricing'>
            About
          </Link>
          <Link className='navbar-item' to='/about'>
            Projects
          </Link>
          <Link className='navbar-item' to='/blog'>
            Recruitment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
