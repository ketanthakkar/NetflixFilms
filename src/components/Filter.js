import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({movieCount}) => (
    <section className="filter-container">
        <span className="results">{movieCount} movies found</span>
        <div className="sort-detail">
            <span>Sort by</span>
            <span>release date</span>
            <span>rating</span>
        </div>
    </section>
);

Filter.propTypes = {
    movieCount: PropTypes.number
};

export default Filter;