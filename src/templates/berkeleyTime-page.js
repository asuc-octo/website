import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Hero from '../components/Hero';
import Promo from '../components/Promo';
import Products from '../components/Products';
import About from '../components/About';

import '../styles/berkeleyTime/styles.scss';

let baseClass = 'berkeleyTime';

// meta_title,
// meta_description,
// hero,
// about,
// features,
// team,
// recruitment,

class BerkeleyTimeTemplate extends Component {
  componentDidMount () {
    window.sr.reveal('.hero-body');
    window.sr.reveal('.promo-container');
    window.sr.reveal('.products-container');
    window.sr.reveal('.product', { duration: 1500 }, 100);
    window.sr.reveal('.promo-container');
    window.sr.reveal('.about-container');
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

        <Promo
          baseClass={baseClass}
          imageColumns={5}
          {...this.props.about}
          image={this.props.about.imgUrl}
        >
          <div className='promo-appStoreBadges'>
            <img className='promo-appStoreBadge' src={this.props.about.appleStore} />
            <img className='promo-appStoreBadge' src={this.props.about.googlePlay} />
          </div>
        </Promo>

        <Products
          baseClass={baseClass}
          title={this.props.features.title}
          products={this.props.features.images}
          productColSize={6}
        />

        <Promo
          baseClass={baseClass}
          imageColumns={6}
          {...this.props.team}
          image={this.props.team.imgUrl}
        >
          <div className='promo-roles'>
            {this.props.team.roles.map(({heading, description}, idx) => (
              <div className='promo-role' key={idx}>
                <h3 className='promo-roleTitle'>{heading}</h3>
                <p className='promo-roleDescription'>{description}</p>
              </div>
            ))}
          </div>
        </Promo>

        <About
          baseClass={baseClass}
          {...this.props.recruitment}
        />

      </div>
    );
  }
}

BerkeleyTimeTemplate.propTypes = {
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  hero: PropTypes.object,
  about: PropTypes.object,
  features: PropTypes.object,
  team: PropTypes.object,
  recruitment: PropTypes.object,
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
