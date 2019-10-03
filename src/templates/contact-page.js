import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ContactForm from '../components/ContactForm';

import '../styles/contact/styles.scss';

export const ContactPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
}) => {
  return (
    <div class="contactPage">
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                  <h2 className='subtitle'>
                    {subtitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <ContactForm />
      </section>
    </div>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,

};

const ContactPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;
  return (
    <ContactPageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
    />
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
      }
    }
  }
`;
