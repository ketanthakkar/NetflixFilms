import React from 'react';
import styled from 'styled-components';

const TitleSection = styled.div`
    margin: 0 auto;
    padding: 10px;
`;

const NetflixText = styled.h4`
    color: #F65262;
    width: 90%;
    display: block;
    margin: 0 auto;
`;

const Title = () => (
      <TitleSection>
        <NetflixText>netflixroulette</NetflixText>
      </TitleSection>
);

export default Title;
