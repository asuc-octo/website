import React, { Component } from 'react';
import sr from '../js/scrollreveal';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Hero from '../components/Hero';
import Promo from '../components/Promo';
import Products from '../components/Products';
import About from '../components/About';

import '../styles/berkeleyMobile/styles.scss';

let baseClass = 'berkeleyMobile';

// meta_title,
// hero,
// about
// features,
// team,
// recruitment,

class BerkeleyMobileTemplate extends Component {
  componentDidMount () {
    sr.reveal('.hero-body');
    sr.reveal('.promo-container');
    sr.reveal('.products-container');
    sr.reveal('.product', { duration: 1500 }, 100);
    sr.reveal('.promo-container');
    sr.reveal('.about-container');
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
          productColSize={3}
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
