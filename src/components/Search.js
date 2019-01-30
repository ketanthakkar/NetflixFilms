import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovies, filterMovies, filterMoviesBy } from '../actions/index';

export class Search extends Component {
    handleSearchClick = (event) => {
      const filterBy = event.target.id === 'genre-btn' ? 'genres' : 'title';
      this.props.filterMoviesBy(filterBy);
    }

    handleChange = (event) => {
      this.props.filterMovies(event.target.value);
    }

    render() {
      const { activeSearchBy, searchStr } = this.props;

      return (
            <section className="search-section">
                <h4 className="white-text">FIND YOUR MOVIE</h4>
                <input type="text" placeholder="Enter title/genre" className="white-text search-title"
                        onChange={this.handleChange}></input>
                <div className="search-container">
                    <div className="search-selection">
                        <label className="white-text">SEARCH BY</label>
                        <button id="title-btn" 
                                className={activeSearchBy === 'title' ? 'white-text' : 'white-text nonselected-color'} 
                                onClick={this.handleSearchClick}>
                          TITLE
                        </button>
                        <button id="genre-btn" 
                                className={activeSearchBy === 'genres' ? 'white-text' : 'white-text nonselected-color'} 
                                onClick={this.handleSearchClick}>
                          GENRE
                        </button>
                    </div>
                    <Link to={`/search/${encodeURIComponent(searchStr)}`}>
                        <button className="white-text" onClick={this.props.fetchMovies}>SEARCH</button>
                    </Link>
                </div>
            </section>
      );
    }
}

Search.propTypes = {
  filterMovies: PropTypes.func,
  fetchMovies: PropTypes.func,
  filterMoviesBy: PropTypes.func,
  activeSearchBy: PropTypes.string,
  searchStr: PropTypes.string,
};

const mapStateToProps = state => ({
  activeSearchBy: state.search.searchBy,
  searchStr: state.search.searchStr,
});

Search.defaultProps = {
  onSearch: () => { },
};

const mapDispatchToProps = {
  fetchMovies,
  filterMovies,
  filterMoviesBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
