import React from 'react';
import PropTypes from 'prop-types';
import { HomePageTemplate } from '../../templates/home-page';

const HomePagePreview = ({ entry, getAsset }) => {
  const entryHeroButtons = entry.getIn(['data', 'hero', 'buttons']);
  const heroButtons = entryHeroButtons ? entryHeroButtons.toJS() : [];

  const entryProducts = entry.getIn(['data', 'products', 'products']);
  const products = entryProducts ? entryProducts.toJS() : [];

  return (
    <HomePageTemplate
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      hero={{
        title: entry.getIn(['data', 'hero', 'title']),
        subtitle: entry.getIn(['data', 'hero', 'subtitle']),
        buttons: heroButtons,
      }}
      promo={{
        title: entry.getIn(['data', 'promo', 'title']),
        description: entry.getIn(['data', 'promo', 'description']),
        image: entry.getIn(['data', 'promo', 'image']),
        linkText: entry.getIn(['data', 'promo', 'linkText']),
        linkTo: entry.getIn(['data', 'promo', 'linkTo']),
      }}
      products={{
        title: entry.getIn(['data', 'products', 'title']),
        description: entry.getIn(['data', 'products', 'description']),
        linkText: entry.getIn(['data', 'products', 'linkText']),
        linkTo: entry.getIn(['data', 'products', 'linkTo']),
        products: products,
      }}
      about={{
        title: entry.getIn(['data', 'about', 'title']),
        description: entry.getIn(['data', 'about', 'description']),
        linkText: entry.getIn(['data', 'about', 'linkText']),
        linkTo: entry.getIn(['data', 'about', 'linkTo']),
      }}
    />
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HomePagePreview;
