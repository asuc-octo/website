import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/common/styles.scss';
import config from '../../meta/config';

const TemplateWrapper = ({children, location}) => (
  <div>
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta name='description' content={config.siteDescription} />
    </Helmet>
    {location.pathname !== '/' &&
      <NavBar />
    }
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
