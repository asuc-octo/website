import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import './styles.scss';

const Product = ({
  baseClass,
  title,
  description,
  imgUrl,
  linkUrl,
  columnSize,
}) => {
  if (linkUrl !== "/") {
    return (
      <div className={'column is-' + columnSize}>
        <div className='product'>
          <Link to={linkUrl}>
            <img className='product-image' src={imgUrl} />
            <div className='product-text'>
              <h3 className='product-title'>{title}</h3>
              <p className='product-description'>{description}</p>
            </div>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className={'column is-' + columnSize}>
        <div className='product'>
          <img className='product-image' src={imgUrl} />
          <div className='product-text'>
            <h3 className='product-title'>{title}</h3>
            <p className='product-description'>{description}</p>
          </div>
        </div>
      </div>
    );
  }
};

Product.propTypes = {
  baseClass: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  linkUrl: PropTypes.string,
  columnSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Product;
