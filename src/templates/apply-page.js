import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Hero from '../components/Hero';
import Promo from '../components/Promo';
import Products from '../components/Products';
import About from '../components/About';

import '../styles/apply/styles.scss';
import Link from "gatsby-link";

let baseClass = 'apply';

// meta_title,
// meta_description,
// hero,

class ApplyTemplate extends Component {
  componentDidMount () {
    window.sr.reveal('.hero-body');
  }

  render () {
    return (
      <div className={`${baseClass} pageContainer`}>
        <Helmet>
          <title>{this.props.meta_title}</title>
          <meta name='description' content={this.props.meta_description} />
        </Helmet>

        <Hero
          baseClass={baseClass}
          {...this.props.hero}
        />

      </div>
    );
  }
}

ApplyTemplate.propTypes = {
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  hero: PropTypes.object,
  about: PropTypes.object,
  features: PropTypes.object,
  team: PropTypes.object,
  tech: PropTypes.object,
  recruitment: PropTypes.object,
};

const Apply = ({data}) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <ApplyTemplate
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      hero={frontmatter.hero}
      about={frontmatter.about}
      features={frontmatter.features}
      team={frontmatter.team}
      tech={frontmatter.tech}
      recruitment={frontmatter.recruitment}
    />
  );
};

Apply.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default Apply;

export const applyQuery = graphql`
  query Apply($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        meta_title
        meta_description
        hero {
          title
          subtitle
        }
      }
    }
  }
`;
