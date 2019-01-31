import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Title from './Title';
import Footer from './Footer';
import Content from './Content';
import { fetchMovieDetail } from '../actions';

class Movie extends Component {
  static fetchData(dispatch, match) {
    return dispatch(fetchMovieDetail(match.params.id));
  }

  componentDidMount() {
    if (this.props.match) {
      this.props.fetchMovieDetail(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match) {
      const { id } = this.props.match.params;
      if (id !== prevProps.match.params.id) {
        this.props.fetchMovieDetail(this.props.match.params.id);
      }
    }
  }

  render() {
    const { movie } = this.props;
    return (
            <React.Fragment>
                { movie
                && <article className="movie-container">
                    <header className="header-section">
                        <Title />
                    </header>
                    <section className="movie-poster">
                        <img className="movie-img" src={movie.poster_path} alt={movie.tagline} />
                        <div className="movie-detail">
                            <span className="movie-title">{movie.title.toUpperCase()}</span>
                            <span className="movie-genres">{movie.genres.join(' & ')}</span>
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
    );
  }
}

Movie.propTypes = {
  fetchMovieDetail: PropTypes.func,
  movie: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovieDetail,
}, dispatch);

const mapStateToProps = state => ({
  movie: state.movies.movie,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));