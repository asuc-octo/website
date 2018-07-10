import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Hero from '../components/Hero';
import Promo from '../components/Promo';
import Offerings from '../components/Offerings';
import Testimonials from '../components/Testimonials';
import '../styles/common/styles.scss';
import '../styles/home/styles.scss';

// Pull from markdown later

let buttons = [
  {
    text: 'Learn More',
    to: '#',
  },
  {
    text: 'Recruitment',
    to: '#',
  },
];

export const HomePageTemplate = ({
  title,
  subtitle,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
  promo,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>

    <Hero
      baseClass='homePage'
      isFullHeight
      titleText={title}
      subtitleText={subtitle}
      buttons={buttons}
    />

    <Promo
      baseClass='homePage'
      promoImageURL={promo.image}
      title={promo.title}
      description={promo.description}
      linkText={promo.linkText}
      linkUrl={promo.linkTo}
      imageColumns={5}
    />

    <section className='section section--gradient'>
      <div className='container'>

        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
                <Offerings gridItems={offerings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  promo: PropTypes.object,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

};

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <HomePageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      promo={frontmatter.promo}
      offerings={frontmatter.offerings}
      testimonials={frontmatter.testimonials}
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
        title
        subtitle
        meta_title
        meta_description
        heading
        description
        promo {
          image
          title
          description
          linkText
          linkTo
        }
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`;
