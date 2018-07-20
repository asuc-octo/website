import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

// const Promo = ({
//   baseClass,
//   promoImageURL,
//   title,
//   description,
//   linkText,
//   linkUrl,
//   imageColumns,
// }) => {
class Promo extends Component {
  render () {
    return (
      <section className={'promo section ' +
        (this.props.baseClass && ('promo-' + this.props.baseClass))}>
        <div className='promo-container container'>
          <div className='columns'>
            <div className={'column is-' + this.props.imageColumns}>
              <div className='promo-imageWrapper'>
                <img alt='' src={this.props.promoImageURL} />
              </div>
            </div>
            <div className='column'>
              <div className='promo-content content is-medium'>
                <h2 className='promo-title'>{this.props.title}</h2>
                <p className='promo-description'>{this.props.description}</p>
                {this.props.children}
                {this.props.linkText && this.props.linkUrl &&
                  <div className='promo-linkWrapper'>
                    <Link className='promo-button button' to={this.props.linkUrl}>
                      {this.props.linkText}
                    </Link>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Promo.propTypes = {
  baseClass: PropTypes.string,
  promoImageURL: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default Promo;
