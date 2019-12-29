import React from 'react';
import PropTypes from 'prop-types';
import { ApplyTemplate } from '../../templates/apply-page';

const ApplyPreview = ({ entry, getAsset }) => {
  const data = entry.get('data').toJS();

  return (
    <ApplyTemplate
      {...data}
    />
  );
};

ApplyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ApplyPreview;