import React, { Component } from 'react';
import { fetchMovies, filterMovies, filterMoviesBy } from '../actions/index';
import { connect } from 'react-redux';

export class Search extends Component {

    handleSearchClick = (event) => {
       const filterBy = event.target.id === "genre-btn" ? "genres" : "title"
       this.props.filterMoviesBy(filterBy);
    }

    handleChange = (event) => {
        this.props.filterMovies(event.target.value);
      }

    render() {
        const { activeSearchBy } = this.props;

        return (
            <section className="search-section">
                <h4 className="white-text">FIND YOUR</h4>
                <input type="text" placeholder="Enter title" className="white-text search-title"
                        onChange={this.handleChange}></input>
                <div className="search-container">
                    <div className="search-selection">
                        <label className="white-text">SEARCH BY</label>
                        <button id="title-btn" className={activeSearchBy === 'title' ? 'white-text' : 'white-text nonselected-color'} onClick={this.handleSearchClick}>TITLE</button>
                        <button id="genre-btn" className={activeSearchBy === 'genres' ? 'white-text' : 'white-text nonselected-color'} onClick={this.handleSearchClick}>GENRE</button>
                    </div>
                    <button className="white-text" onClick={this.props.fetchMovies}>SEARCH</button>
                </div>
            </section>
            )
        }
    }

const mapStateToProps = (state) => ({
    activeSearchBy: state.search.searchBy,
});

const mapDispatchToProps = {
        fetchMovies,
        filterMovies,
        filterMoviesBy
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);