import React from 'react';
import PropTypes from 'prop-types';

const NoMovieFound = () => (
  <div className="nofound-content">
    <h2 className="nofound-text">No films found</h2>
  </div>
);

NoMovieFound.propTypes = {
  message: PropTypes.string
};

export default NoMovieFound;