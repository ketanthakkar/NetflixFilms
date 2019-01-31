import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Filter from './Filter';
import MovieItem from './MovieItem';
import ErrorBoundary from '../error/ErrorBoundary';
import Header from './Header';
import Footer from './Footer';
import NoMovieFound from './NoMovieFound';
import { fetchSearchedMovies } from '../actions/index';

class Content extends Component {
  static fetchData(dispatch, match) {
    return dispatch(fetchSearchedMovies(match.params.query));
  }

  componentDidMount() {
    if (this.props.match) {
      this.props.fetchSearchedMovies(this.props.match.params.query);
    }
  }

  render() {
    const { movies, showSearch } = this.props;

    return (
            <React.Fragment>
                {showSearch && <Header /> }
                <ErrorBoundary>
                    {movies.length > 0
                        && <React.Fragment>
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
  showSearch: PropTypes.bool,
  fetchSearchedMovies: PropTypes.func,
  movies: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
        query: PropTypes.string
    })
  }),
};

Content.defaultProps = {
  showSearch: true,
};

const mapDispatchToProps = { fetchSearchedMovies };

const mapStateToProps = state => ({
  movies: state.movies.movieData,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));
