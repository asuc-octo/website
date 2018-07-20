import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Hero from '../components/Hero';
import Promo from '../components/Promo';
import Products from '../components/Products';
import About from '../components/About';

import '../styles/berkeleyTime/styles.scss';

let baseClass = 'berkeleyTime';

export const BerkeleyTimeTemplate = ({
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
      titleText={hero.title}
      subtitleText={hero.subtitle}
    />

    <Promo
      baseClass={baseClass}
      title={about.title}
      description={about.description}
      promoImageURL={about.imgUrl}
      imageColumns={5}
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
      productColSize={6}
    />

    <Promo
      baseClass={baseClass}
      title={team.title}
      description={team.description}
      promoImageURL={team.imgUrl}
      imageColumns={6}
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
      title={recruitment.title}
      description={recruitment.description}
      linkText={recruitment.linkText}
      linkUrl={recruitment.linkTo}
    />

  </div>
);

BerkeleyTimeTemplate.propTypes = {
  meta_title: PropTypes.string.isRequired,
  meta_description: PropTypes.string.isRequired,
};

const BerkeleyTime = ({data}) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <BerkeleyTimeTemplate
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      hero={frontmatter.hero}
      about={frontmatter.about}
      features={frontmatter.features}
      team={frontmatter.team}
      recruitment={frontmatter.recruitment}
    />
  );
};

BerkeleyTime.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BerkeleyTime;

export const berkeleyTimeQuery = graphql`
  query BerkeleyTime($id: String!) {
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