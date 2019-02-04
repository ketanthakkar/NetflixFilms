import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Search from './Search';

const HeaderSection = styled.header`
    background-color: rgba(0, 0, 0, 1);
`;

const Header = () => (
        <HeaderSection>
            <Title />
            <Search />
        </HeaderSection>
);

export default Header;
