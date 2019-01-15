import React, { Component } from 'react';
import Title from './Title';
import Footer from './Footer';
import Content from './Content';
import { connect } from 'react-redux';

class Movie extends Component {

    render() {
        const movie = this.props.movies.movieData.find(movieData => movieData.id === parseInt(this.props.match.params.id) )

        return (
            <article className="movie-container">
                <header className="header-section">
                    <Title />
                </header>
                <section className="movie-poster">
                    <img className="movie-img" src={movie.poster_path} alt={movie.tagline} />
                    <div className="movie-detail">
                        <span className="movie-title">{movie.title.toUpperCase()}</span>
                        <span className="movie-genres">{movie.genres.join(" & ")}</span>
                        <div>
                            <span className="movie-year">{movie.release_date}</span>
                            <span className="movie-length">{`${movie.runtime} min`}</span>
                        </div>
                        <p className="movie-description">{movie.overview}</p>
                    </div>    
                </section>
                <Content movies={ movie } nosearch="nosearch" />
                <Footer />
            </article>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
});

export default connect(mapStateToProps, null)(Movie);