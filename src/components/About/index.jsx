import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

// baseClass
// classModifier
// title
// description
// linkText
// linkUrl

class About extends Component {
  render () {
    return (
      <section className={'about section ' +
        (this.props.baseClass && (`about-${this.props.baseClass} `)) +
        (this.props.classModifier ? (`about--${this.props.classModifier} `) : '')
      }>
        <div className='about-container container'>
          <div className='content is-medium'>
            <h2 className='about-title'>{this.props.title}</h2>
            <p className='about-description'>{this.props.description}</p>
            <div className='about-extra'>
              {this.props.children}
            </div>
            {this.props.linkText && this.props.linkUrl &&
              <div className='about-linkWrapper'>
                <Link className='about-button button' to={this.props.linkUrl}>
                  {this.props.linkText}
                </Link>
              </div>
            }
          </div>
        </div>
      </section>
    );
  }
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
