import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Product from '../Product';

const Products = ({
  baseClass,
  title,
  description,
  linkText,
  linkTo,
  products,
  productColSize,
}) => {
  return (
    <section className={'products section ' +
      (baseClass && ('products-' + baseClass))}>
      <div className='products-container container'>
        <div className='content is-medium'>
          <h2 className='products-title'>{title}</h2>
          <p className='products-description'>{description}</p>
          <div className='products-items columns is-multiline'>
            {products.map((product, idx) => (
              <Product
                key={idx}
                columnSize={productColSize}
                {...product}
              />
            ))}
          </div>
          {linkTo && linkText &&
            <div className='products-linkWrapper'>
              <Link className='products-button button' to={linkTo}>
                {linkText}
              </Link>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

Products.propTypes = {
  baseClass: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  linkText: PropTypes.string,
  linkTo: PropTypes.string,
  products: PropTypes.array,
  productColSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Products;
