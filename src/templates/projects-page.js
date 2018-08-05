import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Products from '../components/Products';

import '../styles/projects/styles.scss';

let baseClass = 'projectsPage';

// title,
// meta_title,
// meta_description,
// projects,

class ProjectsPageTemplate extends Component {
  componentDidMount () {
    window.sr.reveal('.products-container');
    window.sr.reveal('.product', { duration: 2000 }, 100);
  }

  render () {
    return (
      <div className={`${baseClass} pageContainer`}>
        <Helmet>
          <title>{this.props.meta_title}</title>
          <meta name='description' content={this.props.meta_description} />
        </Helmet>

        <Products
          baseClass={baseClass}
          {...this.props.projects}
          productColSize='half'
        />

      </div>
    );
  }
}

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
      {...frontmatter}
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
