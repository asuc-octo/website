import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Product from '../Product';

const Products = ({
  baseClass,
  title,
  description,
  linkText,
  linkUrl,
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
          <div className='columns'>
            {products.map(({title, description, imgUrl, linkUrl}, idx) => (
              <Product
                key={idx}
                title={title}
                description={description}
                imgUrl={imgUrl}
                linkUrl={linkUrl}
                columnSize={productColSize}
              />
            ))}
          </div>
          <div className='products-linkWrapper'>
            <Link className='products-button button' to={linkUrl}>
              {linkText}
            </Link>
          </div>
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
  linkUrl: PropTypes.string,
  products: PropTypes.array,
  productColSize: PropTypes.number,
};

export default Products;
