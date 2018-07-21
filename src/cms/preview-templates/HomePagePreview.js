import React from 'react';
import PropTypes from 'prop-types';
import { HomePageTemplate } from '../../templates/home-page';

const HomePagePreview = ({ entry, getAsset }) => {
  const data = entry.get('data').toJS();

  return (
    <HomePageTemplate
      {...data}
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
