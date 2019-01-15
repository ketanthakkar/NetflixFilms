import React, { Component } from 'react';
import Filter from './Filter';
import MovieItem from './MovieItem';
import ErrorBoundary from '../error/ErrorBoundary';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';
import NoMovieFound from './NoMovieFound';

export class Content extends Component {

    render() {
        const { movies, nosearch } = this.props;
        
        return (
            <React.Fragment>
                {nosearch !== "nosearch" && <Header /> } 
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
                    {movies.length <= 0 && <NoMovieFound /> }
                </ErrorBoundary>    
                {nosearch !== "nosearch" && <Footer /> }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies.movieData,
});

export default connect(mapStateToProps, null)(Content);