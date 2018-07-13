import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({
  baseClass,
  name,
  position,
  imgUrl,
  columnSize,
}) => {
  return (
    <div className={'column is-' + columnSize}>
      <div className='profile'>
        <img className='profile-image' src={imgUrl} alt='team member image' />
        <h3 className='profile-name'>{name}</h3>
        <p className='profile-position'>{position}</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  baseClass: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  imgUrl: PropTypes.string,
  columnSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Profile;
