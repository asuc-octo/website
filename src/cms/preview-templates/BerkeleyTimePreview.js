import React from 'react';
import PropTypes from 'prop-types';
import { BerkeleyTimeTemplate } from '../../templates/berkeleyTime-page';

const BerkeleyTimePreview = ({ entry, getAsset }) => {
  const data = entry.get('data').toJS();

  return (
    <BerkeleyTimeTemplate
      {...data}
    />
  );
};

BerkeleyTimePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default BerkeleyTimePreview;
