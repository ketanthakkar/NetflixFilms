import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

class Main extends Component {
    
    render() {   
        return ( 
            <div className="main">
                    <Switch>
                        {renderRoutes(routes)}
                    </Switch>
            </div>
        );
    }
}

export default Main;