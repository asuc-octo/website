import React from 'react';
import Link from 'gatsby-link';

const NavBar = () => {
  return (
    <nav className='Navbar navbar' aria-label='main navigation'>
      <div className='Navbar-brand navbar-brand'>
        <Link to='/' className='Navbar-item navbar-item'>
          ASUC OCTO
        </Link>
        <button className='Navbar-burger button navbar-burger' data-target='navMenu'>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className='Navbar-menu navbar-menu' id='navMenu'>
        <div className='Navbar-end navbar-end'>
          <Link className='Navbar-item navbar-item' to='/pricing'>
            About
          </Link>
          <Link className='Navbar-item navbar-item' to='/about'>
            Projects
          </Link>
          <Link className='Navbar-item navbar-item' to='/blog'>
            Recruitment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
