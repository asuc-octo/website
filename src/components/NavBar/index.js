import React from 'react';
import Link from 'gatsby-link';

const NavBar = ({ className }) => {
  return (
    <nav className={'navbar is-transparent ' + (className || '')} aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          ASUC OCTO
        </Link>
        <span className='navbar-burger burger' data-target='navMenu'>
          <span />
          <span />
          <span />
        </span>
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
