import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const About = ({
  baseClass,
  title,
  description,
  linkUrl,
  linkText,
}) => {
  return (
    <section className={'about section ' +
      (baseClass && ('about-' + baseClass))}>
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
  title: PropTypes.string.isRequired,
  description: PropTypes.isRequired,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default About;
