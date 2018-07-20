import React from 'react';
import PropTypes from 'prop-types';
import { ProjectsPageTemplate } from '../../templates/projects-page';

const ProjectsPagePreivew = ({ entry, getAsset }) => {
  const entryProjectsPlans = entry.getIn(['data', 'projects', 'plans']);
  const projectsPlans = entryProjectsPlans ? entryProjectsPlans.toJS() : [];

  return (
    <ProjectsPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      projects={{
        heading: entry.getIn(['data', 'projects', 'heading']),
        description: entry.getIn(['data', 'projects', 'description']),
        plans: projectsPlans,
      }}
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
