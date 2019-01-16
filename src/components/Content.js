import React, { Component } from 'react';
import Filter from './Filter';
import MovieItem from './MovieItem';
import ErrorBoundary from '../error/ErrorBoundary';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';
import NoMovieFound from './NoMovieFound';
import PropTypes from 'prop-types';
import { fetchSearchedMovies } from '../actions/index'

class Content extends Component {

    componentDidMount() {
        
        if(this.props.match) {
            this.props.fetchSearchedMovies(this.props.match.params.query);
        }
    }

    render() {
        const { movies, showSearch } = this.props;
        
        return (
            <React.Fragment>
                {showSearch && <Header /> } 
                <ErrorBoundary>
                    {movies.length > 0 &&
                        <React.Fragment>
                            <Filter />
                            <main className="moviedata-container"> {
                                movies.map(movie => <MovieItem key={movie.id} movieItem={movie} />)
                            }
                            </main>
                        </React.Fragment>
                    }
                    { movies.length <= 0 && <NoMovieFound /> }
                </ErrorBoundary>    
                {showSearch && <Footer /> }
            </React.Fragment>
        );
    }
}

Content.propTypes = {
    showSearch: PropTypes.bool
};

Content.defaultProps = {
    showSearch: true
};

const mapDispatchToProps = { fetchSearchedMovies };

const mapStateToProps = (state) => ({
    movies: state.movies.movieData,
});

export { Content }; 
export default connect(mapStateToProps, mapDispatchToProps)(Content);