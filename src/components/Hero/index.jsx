import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import NavBar from '../NavBar';

const Hero = ({
  baseClass,
  isFullHeight,
  titleText,
  subtitleText,
  buttons,
}) => {
  return (
    <section className={'hero hero-backgroundImage ' +
      (baseClass && `hero-${baseClass} `) +
      (isFullHeight && 'is-fullheight ')}
    >
      <NavBar className='hero-navbar' />
      <div className='hero-body'>
        <div className='hero-container container'>
          <div className='columns'>
            <h1 className='hero-title title is-spaced has-text-weight-bold column is-12'>
              {titleText}
            </h1>
          </div>
          <div className='columns'>
            <h2 className='hero-subtitle subtitle column is-one-third'>
              {subtitleText}
            </h2>
          </div>
          <div className='columns column'>
            {buttons.map(({text, to}, idx) => (
              <Link to={to} className='hero-button button' key={idx}>
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.PropTypes = {
  baseClass: PropTypes.String,
  isFullHeight: PropTypes.Boolean,
  titleText: PropTypes.String,
  subtitleText: PropTypes.String,
  buttons: PropTypes.array,
};

export default Hero;
