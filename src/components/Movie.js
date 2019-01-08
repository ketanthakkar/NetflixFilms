import React from 'react';
import Title from './Title';
import Footer from './Footer';
import Content from './Content';

const Movie = ({ movie }) => {
    return (
        <article className="movie-container">
            <header className="header-section">
                <Title />
            </header>
            <section className="movie-poster">
                <img className="movie-img" src={movie[0].poster_path} alt={movie[0].tagline} />
                <div className="movie-detail">
                    <span className="movie-title">{movie[0].title.toUpperCase()}</span>
                    <span className="movie-genres">{movie[0].genres.join(" & ")}</span>
                    <div>
                        <span className="movie-year">{movie[0].release_date}</span>
                        <span className="movie-length">{`${movie[0].runtime} min`}</span>
                    </div>
                    <p className="movie-description">{movie[0].overview}</p>
                </div>    
            </section>
            <Content movies={ movie } />
            <Footer />
        </article>
    )
}

export default Movie;