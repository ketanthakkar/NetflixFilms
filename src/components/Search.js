import React from 'react';

const Search = () => {
    return (
        <section className="search-section">
            <h4 className="white-text">FIND YOUR MOVIE</h4>
            <input type="text" placeholder="Enter title" className="white-text search-title"></input>
            <div className="search-container">
                <div className="search-selection">
                    <label className="white-text">SEARCH BY</label>
                    <button id="title-btn" className="white-text">TITLE</button>
                    <button id="genre-btn" className="white-text">GENRE</button>
                </div>
                <button className="white-text">SEARCH</button>
            </div>
        </section>
    )
}

export default Search;