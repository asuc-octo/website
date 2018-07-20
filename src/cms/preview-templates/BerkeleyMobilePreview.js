import React from 'react';
import PropTypes from 'prop-types';
import { BerkeleyMobileTemplate } from '../../templates/berkeleyMobile-page';

const BerkeleyMobilePreview = ({ entry, getAsset }) => {
  const data = entry.get('data').toJS();

  return (
    <BerkeleyMobileTemplate
      {...data}
    />
  );
};

BerkeleyMobilePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default BerkeleyMobilePreview;
