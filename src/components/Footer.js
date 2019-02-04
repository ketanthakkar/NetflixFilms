import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
    background-color: rgba(0, 0, 0, 0.9);
    padding: 10px;
    width: 100%;
`;

const NetflixText = styled.h4`
    color: #F65262;
    width: 90%;
    display: block;
    margin: 0 auto;
`;

const Footer = () => (
    <FooterSection>
      <NetflixText>netflixroulette</NetflixText>
    </FooterSection>
);

export default Footer;
