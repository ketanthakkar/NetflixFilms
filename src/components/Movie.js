import React, { Component } from 'react';
import Title from './Title';
import Footer from './Footer';
import Content from './Content';
import { connect } from 'react-redux';
import { fetchMovieDetail } from '../actions/index'

export class Movie extends Component {

    componentDidMount() {
        if(this.props.match) {
            this.props.fetchMovieDetail(this.props.match.params.id);
        }
    }

    componentDidUpdate() {
        if(this.props.match) {
            this.props.fetchMovieDetail(this.props.match.params.id);
        }
    }

    render() {
        const { movie } = this.props;
        return (
            <React.Fragment>
                { movie && 
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
                    <Content showSearch={false} />
                    <Footer />
                </article> }
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = { fetchMovieDetail };

const mapStateToProps = (state) => ({
    movie:  state.movies.movie,
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);