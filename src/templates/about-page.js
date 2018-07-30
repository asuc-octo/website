import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import About from '../components/About';
import Profiles from '../components/Profiles';

import '../styles/about/styles.scss';

let baseClass = 'aboutPage';

// Pull from markdown later

export const AboutPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  mission,
  team,
}) => (
  <div className={`${baseClass} pageContainer`}>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>

    <About
      baseClass={baseClass}
      title={title}
      description={subtitle}
    />

    <About
      baseClass={baseClass}
      classModifier='mission'
      {...mission}
    />

    <Profiles
      baseClass={baseClass}
      classModifier='chief'
      title={team.chief.title}
      profiles={team.chief.members}
      profileColSize='one-third'
    />

    <Profiles
      baseClass={baseClass}
      title={team.berkeleyTime.title}
      profiles={team.berkeleyTime.members}
      profileColSize='one-third'
    />

    <Profiles
      baseClass={baseClass}
      title={team.berkeleyMobile.title}
      profiles={team.berkeleyMobile.members}
      profileColSize='one-third'
    />

    <Profiles
      baseClass={baseClass}
      classModifier='companies'
      title={team.companies.title}
      profiles={team.companies.brands}
      profileColSize='one-third'
    />

  </div>
);

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
