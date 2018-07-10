import React from 'react';
import Proptypes from 'prop-types';
import Link from 'gatsby-link';

const Promo = ({
  baseClass,
  promoImageURL,
  title,
  description,
  linkText,
  linkUrl,
  imageColumns,
}) => {
  return (
    <section className={'promo section ' +
      (baseClass && ('promo-' + baseClass))}>
      <div className='promo-container container'>
        <div className='columns'>
          <div className={'column is-' + imageColumns}>
            <div className='promo-imageWrapper'>
              <img alt='' src={promoImageURL} />
            </div>
          </div>
          <div className='column'>
            <div className='promo-content content is-medium'>
              <h2 className='promo-title'>{title}</h2>
              <p className='promo-description'>{description}</p>
              <div className='promo-linkWrapper'>
                <Link className='promo-button button' to={linkUrl}>{linkText}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Promo.Proptypes = {
  className: Proptypes.String,
  promoImage: Proptypes.Element,
  title: Proptypes.String,
  description: Proptypes.String,
  linkText: Proptypes.String,
  linkUrl: Proptypes.String,
};

export default Promo;
