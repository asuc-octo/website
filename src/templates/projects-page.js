import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Products from '../components/Products';

import '../styles/projects/styles.scss';

let baseClass = 'projectsPage';

export const ProjectsPageTemplate = ({
  title,
  meta_title,
  meta_description,
  projects,
}) => (
  <div className={`${baseClass} pageContainer`}>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>

    <Products
      baseClass={baseClass}
      title={projects.title}
      description={projects.description}
      products={projects.products}
      productColSize='half'
    />

  </div>
);

ProjectsPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  projects: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    products: PropTypes.array,
  }),
};

const ProjectsPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <ProjectsPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      projects={frontmatter.projects}
    />
  );
};

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProjectsPage;

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        projects {
          title
          description
          products {
            title
            description
            imgUrl
            linkUrl
          }
        }
      }
    }
  }
`;
