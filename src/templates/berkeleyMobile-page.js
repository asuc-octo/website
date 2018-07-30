import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Hero from '../components/Hero';
import Promo from '../components/Promo';
import Products from '../components/Products';
import About from '../components/About';

import '../styles/berkeleyMobile/styles.scss';

let baseClass = 'berkeleyMobile';

export const BerkeleyMobileTemplate = ({
  meta_title,
  meta_description,
  hero,
  about,
  features,
  team,
  recruitment,
}) => (
  <div className={`${baseClass} pageContainer`}>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>

    <Hero
      baseClass={baseClass}
      {...hero}
    />

    <Promo
      baseClass={baseClass}
      imageColumns={5}
      {...about}
      image={about.imgUrl}
    >
      <div className='promo-appStoreBadges'>
        <img className='promo-appStoreBadge' src={about.appleStore} />
        <img className='promo-appStoreBadge' src={about.googlePlay} />
      </div>
    </Promo>

    <Products
      baseClass={baseClass}
      title={features.title}
      products={features.images}
      productColSize={3}
    />

    <Promo
      baseClass={baseClass}
      imageColumns={6}
      {...team}
      image={team.imgUrl}
    >
      <div className='promo-roles'>
        {team.roles.map(({heading, description}, idx) => (
          <div className='promo-role' key={idx}>
            <h3 className='promo-roleTitle'>{heading}</h3>
            <p className='promo-roleDescription'>{description}</p>
          </div>
        ))}
      </div>
    </Promo>

    <About
      baseClass={baseClass}
      {...recruitment}
    />

  </div>
);

BerkeleyMobileTemplate.propTypes = {
  meta_title: PropTypes.string.isRequired,
  meta_description: PropTypes.string.isRequired,
  hero: PropTypes.object,
  about: PropTypes.object,
  features: PropTypes.object,
  team: PropTypes.object,
  recruitment: PropTypes.object,
};

const BerkeleyMobile = ({data}) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <BerkeleyMobileTemplate
      {...frontmatter}
    />
  );
};

BerkeleyMobile.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BerkeleyMobile;

export const berkeleyMobileQuery = graphql`
  query BerkeleyMobile($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        meta_title
        meta_description
        hero {
          title
          subtitle
        }
        about {
          title
          description
          imgUrl
          appleStore
          googlePlay
        }
        features {
          title
          images {
            imgUrl
          }
        }
        team {
          title
          description
          imgUrl
          roles {
            heading
            description
          }
        }
        recruitment {
          title
          description
          linkText
          linkTo
        }
      }
    }
  }
`;
