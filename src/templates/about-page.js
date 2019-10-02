import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import About from '../components/About';
import Profiles from '../components/Profiles';

import '../styles/about/styles.scss';

let baseClass = 'aboutPage';

// Pull from markdown later

// title,
// subtitle,
// meta_title,
// meta_description,
// mission,
// team,

class AboutPageTemplate extends Component {
  componentDidMount () {
    window.sr.reveal('.hero-body');
    window.sr.reveal('.about-container');
    window.sr.reveal('.profile', { duration: 1500 }, 75);
  }

  render () {
    return (
      <div className={`${baseClass} pageContainer`}>
        <Helmet>
          <title>{this.props.meta_title}</title>
          <meta name='description' content={this.props.meta_description} />
        </Helmet>

        <About
          baseClass={baseClass}
          title={this.props.title}
          description={this.props.subtitle}
        />

        <About
          baseClass={baseClass}
          classModifier='mission'
          {...this.props.mission}
        />

        <Profiles
          baseClass={baseClass}
          title={this.props.team.chief.title}
          profiles={this.props.team.chief.members}
          profileColSize='one-third'
        />

        <Profiles
          baseClass={baseClass}
          title={this.props.team.berkeleyTime.title}
          profiles={this.props.team.berkeleyTime.members}
          profileColSize='one-third'
        />

        <Profiles
          baseClass={baseClass}
          title={this.props.team.berkeleyMobile.title}
          profiles={this.props.team.berkeleyMobile.members}
          profileColSize='one-third'
        />

        <Profiles
          baseClass={baseClass}
          title={this.props.team.beehive.title}
          profiles={this.props.team.beehive.members}
          profileColSize='one-third'
        />

        <Profiles
          baseClass={baseClass}
          classModifier='companies'
          title={this.props.team.companies.title}
          profiles={this.props.team.companies.brands}
          profileColSize='one-third'
        />

      </div>
    );
  }
}

AboutPageTemplate.propTypes = {
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  mission: PropTypes.object,
  team: PropTypes.object,
};

const AboutPage = ({data}) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <AboutPageTemplate
      {...frontmatter}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        mission {
          title
          description
        }
        team {
          chief {
            title
            members {
              name
              position
              imgUrl
            }
          }
          berkeleyTime {
            title
            members {
              name
              position
              imgUrl
            }
          }
          berkeleyMobile {
            title
            members {
              name
              position
              imgUrl
            }
          }
          beehive {
            title
            members {
              name
              position
              imgUrl
            }
          }
          companies {
            title
            brands {
              imgUrl
            }
          }
        }
      }
    }
  }
`;
