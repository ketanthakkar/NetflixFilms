import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortMovies, fetchMovies } from '../actions/index'
import PropTypes from 'prop-types';

class Filter extends Component {

    handleSortClick = (event) => {
        const sortBy = event.target.id === "release" ? "release_date" : "vote_average";
        this.props.sortMovies(sortBy);
        this.props.fetchMovies();

        document.getElementById("release").classList.toggle("highlight-color");
        document.getElementById("rating").classList.toggle("highlight-color");
      };

    render() {
        return (
            <section className="filter-container">
                <span className="results">{this.props.movieCount} movies found</span>
                <div className="sort-detail">
                    <span>Sort by</span>
                    <span id="release" className="highlight-color" onClick={this.handleSortClick}>release date</span>
                    <span id="rating" className="" onClick={this.handleSortClick}>rating</span>
                </div>
            </section>
        )
    }
}

Filter.propTypes = {
    movieCount: PropTypes.number
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      sortMovies,
      fetchMovies
    }, dispatch);
  }

export default connect(null, mapDispatchToProps)(Filter);