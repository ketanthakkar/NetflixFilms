import React, { Component } from 'react';
import { fetchMovies } from './actions/index';
import { connect } from 'react-redux';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ErrorBoundary from './error/ErrorBoundary';
import Movie from './components/Movie';

class Main extends Component {
        
    async componentDidMount() {
        await this.props.fetchMovies();
    }

    render() {   
        return ( 
            <div className="main">
                <Header />  
                { this.props.movies.length > 0 && 
                    <ErrorBoundary>
                        <Content movies={ this.props.movies } />
                    </ErrorBoundary> 
                }
                <Footer />
                {/* Movie Detail page <Movie movie={ movieData.data } /> */}
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