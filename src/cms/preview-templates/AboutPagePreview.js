import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS();

  return (
    <AboutPageTemplate
      title={data.title}
      subtitle={data.subtitle}
      meta_title={data.meta_title}
      meta_description={data.meta_description}
      mission={data.mission}
      team={data.team}
    />
  );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
