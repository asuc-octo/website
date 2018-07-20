import React from 'react';
import PropTypes from 'prop-types';
import { HomePageTemplate } from '../../templates/home-page';

const HomePagePreview = ({ entry, getAsset }) => {
  const data = entry.get('data').toJS();

  return (
    <HomePageTemplate
      meta_title={data.meta_title}
      meta_description={data.meta_description}
      hero={data.hero}
      promo={data.promo}
      products={data.products}
      about={data.about}
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
