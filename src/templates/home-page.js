import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Hero from '../components/Hero';
import Promo from '../components/Promo';
import Products from '../components/Products';
import About from '../components/About';

import '../styles/home/styles.scss';

let baseClass = 'homePage';

export const HomePageTemplate = ({
  meta_title,
  meta_description,
  hero,
  promo,
  products,
  about,
}) => (
  <div className={`${baseClass} pageContainer`}>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>

    <Hero
      baseClass={baseClass}
      isFullHeight
      navBar
      {...hero}
    />

    <Promo
      baseClass={baseClass}
      {...promo}
      imageColumns={5}
    />

    <Products
      baseClass={baseClass}
      {...products}
      productColSize='one-third'
    />

    <About
      baseClass={baseClass}
      {...about}
    />
  </div>
);

HomePageTemplate.propTypes = {
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  hero: PropTypes.object,
  promo: PropTypes.object,
  products: PropTypes.object,
  about: PropTypes.object,
};

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <HomePageTemplate
      {...frontmatter}
    />
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        meta_title
        meta_description
        hero {
          title
          subtitle
          buttons {
            text
            linkUrl
          }
        }
        promo {
          title
          description
          image
          linkText
          linkTo
        }
        products {
          title
          description
          linkText
          linkTo
          products {
            title
            description
            imgUrl
            linkUrl
          }
        }
        about {
          title
          description
          linkText
          linkTo
        }
      }
    }
  }
`;
