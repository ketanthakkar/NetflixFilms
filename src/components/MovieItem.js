// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    movieItem: {
      id: string,
      poster_path: string,
      release_date: string,
      tagline: string,
      genres: Array<string>,
      title: string,
    }
}

const MovieItem = ({ movieItem }: Props) => (
        <section className="movieitem-container">
            <figure>
                <Link to={`/film/${movieItem.id}`}>
                    <img className="movieitem-img" src={movieItem.poster_path} alt={movieItem.tagline}/>
                </Link>
                <figcaption className="movieitem-detail">
                    <span>{movieItem.title.toUpperCase()}</span>
                    <span className="movieitem-year">{movieItem.release_date}</span>
                </figcaption>
                <span className="movieitem-genres">{movieItem.genres.join(' & ')}</span>
            </figure>
        </section>
);

export default MovieItem;
