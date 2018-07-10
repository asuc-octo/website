import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import NavBar from '../components/NavBar';
import Offerings from '../components/Offerings';
import Testimonials from '../components/Testimonials';

export const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>

    <section className='hero hero-backgroundImage is-primary is-fullheight'>
      <NavBar className='navbar-header' />
      <div className='hero-body'>
        <div className='hero-container container'>
          <div className='columns'>
            <h1 className='hero-title title is-spaced has-text-weight-bold'>
              ASUC OCTO
            </h1>
          </div>
          <div className='columns'>
            <h2 className='hero-subtitle subtitle column is-one-third'>
              We build accessible, free software for Berkeley students.
            </h2>
          </div>
          <div className='columns'>
            <button className='hero-button button is-inverted is-primary is-rounded'>
              Learn More
            </button>
            <button className='hero-button button is-inverted is-outlined is-primary is-rounded'>
              Recruitment
            </button>
          </div>
        </div>
      </div>
    </section>

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
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
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
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
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
        meta_title
        meta_description
        heading
        description
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
