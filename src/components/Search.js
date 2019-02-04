import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fetchMovies, filterMovies, filterMoviesBy } from '../actions/index';

const SearchSection = styled.section`
    width: 80%;
    margin: 0 auto;
    padding: 10px 0;

    & > * {
      margin: 10px 0;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SearchSelection = styled.div`
    padding: 0 10px;

    & > * {
      margin: 0 10px;
    }
`;

export const getSearch = state => state.search || {};

class Search extends Component {
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
            <SearchSection>
                <h4 className="white-text">FIND YOUR MOVIE</h4>
                <input type="text" placeholder="Enter title/genre" className="white-text search-title"
                        onChange={this.handleChange}></input>
                <SearchContainer>
                    <SearchSelection>
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
                    </SearchSelection>
                    <Link to={`/search/${encodeURIComponent(searchStr)}`}>
                        <button className="white-text" onClick={this.props.fetchMovies}>SEARCH</button>
                    </Link>
                </SearchContainer>
            </SearchSection>
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

export const mapStateToProps = createSelector(
  getSearch, 
  (search) => ({
    activeSearchBy: search.searchBy,
    searchStr: search.searchStr,
  })
);

Search.defaultProps = {
  onSearch: () => { },
};

const mapDispatchToProps = {
  fetchMovies,
  filterMovies,
  filterMoviesBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);