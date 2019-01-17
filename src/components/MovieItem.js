import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const MovieItem = ({movieItem}) => {
    return (
        <section className="movieitem-container">
            <figure>
                <Link to={`/film/${movieItem.id}`}>
                    <img className="movieitem-img" src={movieItem.poster_path} alt={movieItem.tagline}/>
                </Link>
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