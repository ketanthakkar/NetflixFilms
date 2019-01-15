import React, { Component } from 'react';
import { fetchMovies } from './actions/index';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Content from './components/Content';
import PageNotFound from './components/PageNotFound'
import Movie from './components/Movie';

class Main extends Component {
    
    render() {   
        return ( 
            <div className="main">
                <Router>
                    <Switch>
                        <Route exact path='/' component={Content} /> 
                        <Route path='/search/:query' component={Content} />
                        <Route path='/film/:id' component={Movie} /> 
                        <Route path='*' component={PageNotFound} />
                    </Switch>  
                </Router>      
            </div>
        );
    }
}

const mapDispatchToProps = {
      fetchMovies
}
  
const mapStateToProps = (state) => {
    return {
        movies: state.movies.movieData,
        searchby: state.search.searchBy,
        sortby: state.sortBy.sortBy
    };
};
  

export default connect(mapStateToProps, mapDispatchToProps)(Main);