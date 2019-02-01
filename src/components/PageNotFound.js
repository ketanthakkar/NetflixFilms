import React from 'react';
import styled from 'styled-components';

const NofoundContent = styled.div`
    height: 600px;
    text-align: center;
`;

const PageNotFound = () => (
    <NofoundContent>
        <h2 className="nofound-text red-text">404 Page Not Found</h2>
    </NofoundContent>
);

export default PageNotFound;
