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
      titleText={hero.title}
      subtitleText={hero.subtitle}
      buttons={hero.buttons}
    />

    <Promo
      baseClass={baseClass}
      promoImageURL={promo.image}
      title={promo.title}
      description={promo.description}
      linkText={promo.linkText}
      linkUrl={promo.linkTo}
      imageColumns={5}
    />

    <Products
      baseClass={baseClass}
      title={products.title}
      description={products.description}
      linkText={products.linkText}
      linkUrl={products.linkTo}
      products={products.products}
      productColSize='one-third'
    />

    <About
      baseClass={baseClass}
      title={about.title}
      description={about.description}
      linkText={about.linkText}
      linkUrl={about.linkTo}
    />
  </div>
);

HomePageTemplate.propTypes = {
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  promo: PropTypes.object,
};

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <HomePageTemplate
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      hero={frontmatter.hero}
      promo={frontmatter.promo}
      products={frontmatter.products}
      about={frontmatter.about}
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
