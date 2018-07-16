import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Products from '../components/Products';

import '../styles/projects/styles.scss';

let baseClass = 'projectsPage';

let products = {
  title: 'Projects',
  description: 'Learn more about what ASUC OCTO has been working on.',
  products: [
    {
      title: 'BerkeleyTime',
      description: 'Berkeley’s most popular online course catalog web app.',
      imgUrl: '/img/coffee-gear.png',
      linkUrl: '/',
    },
    {
      title: 'BerkeleyTime',
      description: 'Berkeley’s most popular online course catalog web app.',
      imgUrl: '/img/coffee-gear.png',
      linkUrl: '/',
    },
    {
      title: 'BerkeleyTime',
      description: 'Berkeley’s most popular online course catalog web app.',
      imgUrl: '/img/coffee-gear.png',
      linkUrl: '/',
    },
    {
      title: 'BerkeleyTime',
      description: 'Berkeley’s most popular online course catalog web app.',
      imgUrl: '/img/coffee-gear.png',
      linkUrl: '/',
    },
  ],
};

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
      title={products.title}
      description={products.description}
      products={products.products}
      productColSize='half'
    />

  </div>
);

ProjectsPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  projects: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
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
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
