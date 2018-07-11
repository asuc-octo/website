import React from 'react';
import Link from 'gatsby-link';
import config from '../../../meta/config';

const Footer = () => {
  return (
    <footer className='footer is-primary'>
      <div className='container'>
        <div className='content is-medium'>
          <div className='level'>
            <div className='level-left'>
              <div className='level-item'>
                <p className='footer-copyright'>{config.copyright}</p>
              </div>
            </div>
            <div className='level-right'>
              <div className='footer-links'>
                <div className='footer-link'><Link to='/'>Contact</Link></div>
                <div className='footer-link'><Link to='/'>Facebook</Link></div>
                <div className='footer-link'><Link to='/'>Recruitment</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
