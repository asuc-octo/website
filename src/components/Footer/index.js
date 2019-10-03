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
                <div className='footer-link'><Link to='/contact'>Contact</Link></div>
                <div className='footer-link'>
                  <a href="https://facebook.com/asucocto" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
