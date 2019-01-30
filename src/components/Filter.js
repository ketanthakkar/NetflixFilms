import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortMovies, fetchMovies } from '../actions/index';

export class Filter extends Component {
    handleSortClick = (event) => {
      const sortBy = event.target.id === 'release' ? 'release_date' : 'vote_average';
      this.props.sortMovies(sortBy);
      this.props.fetchMovies();
    };

    render() {
      const { movieCount, activeSorting } = this.props;

      return (
            <section className="filter-container">
                <span className="results">{movieCount} movies found</span>
                <div className="sort-detail">
                    <span>Sort by</span>
                    <span id="release" 
                          className={activeSorting === 'release_date' ? 'highlight-color' : ''} 
                          onClick={this.handleSortClick}>
                      release date
                    </span>
                    <span id="rating" 
                          className={activeSorting === 'vote_average' ? 'highlight-color' : ''} 
                          onClick={this.handleSortClick}>
                      rating
                    </span>
                </div>
            </section>
      );
    }
}

Filter.propTypes = {
  movieCount: PropTypes.number,
  activeSorting: PropTypes.string,
  sortMovies: PropTypes.func,
  fetchMovies: PropTypes.func
};

const mapStateToProps = state => ({
  movieCount: state.movies.movieData.length,
  activeSorting: state.sortBy.sortBy,
});

const mapDispatchToProps = {
  sortMovies,
  fetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
