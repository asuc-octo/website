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
  <div className={baseClass}>
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
      title={mission.title}
      description={mission.description}
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

  </div>
);

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

const AboutPage = ({data}) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <AboutPageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      mission={frontmatter.mission}
      team={frontmatter.team}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
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
        }
      }
    }
  }
`;
