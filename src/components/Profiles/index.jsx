import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../Profile';

const Profiles = ({
  baseClass,
  classModifier,
  title,
  description,
  profiles,
  profileColSize,
}) => {
  return (
    <section className={'profiles section ' +
      (baseClass && `profiles-${baseClass} `) +
      (classModifier ? (`profiles--${classModifier} `) : '')}>
      <div className='profiles-container container'>
        <div className='content is-medium'>
          <h2 className='profiles-title'>{title}</h2>
          {description &&
            <p className='profiles-description'>{description}</p>
          }
          <div className='columns is-multiline is-centered'>
            {profiles.map(({name, position, imgUrl}, idx) => (
              <Profile
                key={idx}
                baseClass={baseClass}
                name={name}
                position={position}
                imgUrl={imgUrl}
                columnSize={profileColSize}
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
  profileColSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Profiles;
