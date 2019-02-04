import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NofoundContent = styled.div`
    height: 600px;
    text-align: center;
`;

const NofoundText = styled.h2`
    line-height: 600px;
`;

const NoMovieFound = () => (
  <NofoundContent>
    <NofoundText>No films found</NofoundText>
  </NofoundContent>
);

NoMovieFound.propTypes = {
  message: PropTypes.string,
};

export default NoMovieFound;
