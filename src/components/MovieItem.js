import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({movieItem}) => {
    return (
        <section className="movieitem-container">
            <figure>
                <img className="movieitem-img" src={movieItem.poster_path} alt={movieItem.tagline}/>
                <figcaption className="movieitem-detail">
                    <span>{movieItem.title.toUpperCase()}</span>
                    <span className="movieitem-year">{movieItem.release_date}</span>
                </figcaption>
                <span className="movieitem-genres">{movieItem.genres.join(" & ")}</span>
            </figure>
        </section>
    )
}

MovieItem.propTypes = {
    movieItem: PropTypes.object
};

export default MovieItem;