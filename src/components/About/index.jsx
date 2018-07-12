import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const About = ({
  baseClass,
  classModifier,
  title,
  description,
  linkUrl,
  linkText,
}) => {
  return (
    <section className={'about section ' +
      (baseClass && (`about-${baseClass} `)) +
      (classModifier ? (`about--${classModifier} `) : '')
    }>
      <div className='about-container container'>
        <div className='content is-medium'>
          <h2 className='about-title'>{title}</h2>
          <p className='about-description'>{description}</p>
          {linkText && linkUrl &&
            <div className='about-linkWrapper'>
              <Link className='about-button button' to={linkUrl}>
                {linkText}
              </Link>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  baseClass: PropTypes.string,
  classModifier: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default About;
