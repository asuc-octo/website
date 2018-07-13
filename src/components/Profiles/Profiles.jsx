import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../Profile';

const Profiles = ({
  baseClass,
  title,
  description,
  profiles,
  productColSize,
}) => {
  return (
    <section className={'profiles section ' +
      (baseClass && ('profiles-' + baseClass))}>
      <div className='profiles-container container'>
        <div className='content is-medium'>
          <h2 className='profiles-title'>{title}</h2>
          {description &&
            <p className='profiles-description'>{description}</p>
          }
          <div className='columns'>
            {profiles.map(({name, position, imgUrl}, idx) => (
              <Profile
                key={idx}
                title={title}
                description={description}
                imgUrl={imgUrl}
                columnSize={productColSize}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Profiles.propTypes = {
  baseClass: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  profiles: PropTypes.array.isRequired,
  productColSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Profiles;
