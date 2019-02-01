import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';
import routes from './routes';

const MainSection = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
`;

class Main extends Component {
  render() {
    return (
            <MainSection>
                <Switch>
                  {renderRoutes(routes)}
                </Switch>
            </MainSection>
    );
  }
}

export default Main;
