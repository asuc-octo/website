import React from 'react';
import PropTypes from 'prop-types';

const Product = ({
  baseClass,
  title,
  description,
  imgUrl,
  linkUrl,
  columnSize,
}) => {
  return (
    <div className={'column is-' + columnSize}>
      <div className='product'>
        <div className='product-image'>
          <h3 className='product-title'>{title}</h3>
          <p className='product-description'>{description}</p>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  baseClass: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  linkUrl: PropTypes.string,
  columnSize: PropTypes.number,
};

export default Product;
