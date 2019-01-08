import React, { Component } from 'react';
import { fetchMovies, filterMovies, filterMoviesBy } from '../actions/index';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';

class Search extends Component {

    handleSearchClick = (event) => {
       const filterBy = event.target.id === "genre-btn" ? "genres" : "title"
       this.props.filterMoviesBy(filterBy);

       document.getElementById("title-btn").classList.toggle("nonselected-color");
       document.getElementById("genre-btn").classList.toggle("nonselected-color");
    }

    handleChange = (event) => {
        this.props.filterMovies(event.target.value);
      }

    render() {
        return (
            <section className="search-section">
                <h4 className="white-text">FIND YOUR</h4>
                <input type="text" placeholder="Enter title" className="white-text search-title"
                        onChange={this.handleChange}></input>
                <div className="search-container">
                    <div className="search-selection">
                        <label className="white-text">SEARCH BY</label>
                        <button id="title-btn" className="white-text" onClick={this.handleSearchClick}>TITLE</button>
                        <button id="genre-btn" className="white-text nonselected-color" onClick={this.handleSearchClick}>GENRE</button>
                    </div>
                    <button className="white-text" onClick={this.props.fetchMovies}>SEARCH</button>
                </div>
            </section>
            )
        }
    }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchMovies,
        filterMovies,
        filterMoviesBy
    }, dispatch)
};

export default connect(null, mapDispatchToProps)(Search);