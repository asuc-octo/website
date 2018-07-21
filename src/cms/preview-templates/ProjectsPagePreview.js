import React from 'react';
import PropTypes from 'prop-types';
import { ProjectsPageTemplate } from '../../templates/projects-page';

const ProjectsPagePreivew = ({ entry, getAsset }) => {
  const data = entry.get('data').toJS();

  return (
    <ProjectsPageTemplate
      {...data}
    />
  );
};

ProjectsPagePreivew.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ProjectsPagePreivew;
